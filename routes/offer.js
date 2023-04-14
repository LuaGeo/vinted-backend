const express = require("express");
const router = express.Router();

const convertToBase64 = require("../utils/convertToBase64");
const Offer = require("../models/Offer");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
// const User = require("../models/User")

const isAuthenticated = require("../middlewares/isAuthenticated");

router.post(
  "/offer/publish",
  isAuthenticated,
  fileUpload(),
  async (req, res) => {
    try {
      const pictureToBase64 = convertToBase64(req.files.picture);
      const result = await cloudinary.uploader.upload(pictureToBase64);
      const { title, description, price, condition, city, brand, size, color } =
        req.body;
      const offer = new Offer({
        product_name: title,
        product_description: description,
        product_price: Number(price),
        product_details: [
          {
            MARQUE: brand,
          },
          {
            TAILLE: size,
          },
          {
            ÉTAT: condition,
          },
          {
            COULEUR: color,
          },
          {
            EMPLACEMENT: city,
          },
        ],
        product_image: result, // result.secure_url, // result entier?
        owner: req.user._id, // owner: req.infosUser, // owner: req.user._id, ?
        // owner: req.infosUser.select{}
      });
      // console.log(req.infosUser);
      // console.log(offer);
      await offer.save();
      res.json(offer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

router.get("/offers", async (req, res) => {
  try {
    const { title, priceMin, priceMax, sort, page } = req.query;
    // console.log(title, priceMin, priceMax, sort, page);
    let chosenSort = {};
    if (sort === "price-desc") {
      chosenSort.product_price = -1;
    } else if (sort === "price-asc") {
      chosenSort.product_price = 1;
    }
    let chosenPage = 1;
    if (page > 1) {
      chosenPage = page;
    }
    const offers = await Offer.find({
      product_name: new RegExp(title, "i"),
      product_price: {
        $gte: priceMin,
        $lte: priceMax,
      },
    })
      .sort(chosenSort)
      .skip(chosenPage * 2 - 2)
      .limit(2);

    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/offer/:id", async (req, res) => {
  console.log(req.query);
  try {
    const offerById = await Offer.findById(req.params.id);
    res.json(offerById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
