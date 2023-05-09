const mongoose = require("mongoose");

const Offer = mongoose.model("Offer", {
  product_name: String,
  product_description: String,
  product_price: Number,
  product_details: Array,
  product_pictures: Array,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  product_image: Object,
  product_date: Object
});

module.exports = Offer;

"product_name": "Vestido",
  "product_description": "Vestido camisero estampado, tegido fluido satinado, talla S.",
  "product_price": 25,
  "product_details": [
    {
      "MARQUE": "STRADIVARIUS"
    },
    {
      "ÉTAT": "NEUF AVEC ÉTIQUETTE"
    },
    {
      "COULEUR": "MULTICOLORE"
    },
    {
      "EMPLACEMENT": " ANDALUCÍA, ESPAÑA"
    }
  ],
  "product_pictures": [
    {
      "asset_id": "5e765e480db9660abba486e25553fe06",
      "public_id": "api/vinted-v2/offers/64518fac838b1f551be9ab7e/oeevlebdsk4djri2etv1",
      "version": 1683066797,
      "version_id": "a88ea2d9f313cad51fe430f5abe5ff4e",
      "signature": "6a8f68a5eb817d643f59d98488fdeec436dc2464",
      "width": 321,
      "height": 800,
      "format": "jpg",
      "resource_type": "image",
      "created_at": "2023-05-02T22:33:17Z",
      "tags": [],
      "bytes": 82936,
      "type": "upload",
      "etag": "b4cd79f0e0466d2b5e1da656e07763a1",
      "placeholder": false,
      "url": "http://res.cloudinary.com/lereacteur/image/upload/v1683066797/api/vinted-v2/offers/64518fac838b1f551be9ab7e/oeevlebdsk4djri2etv1.jpg",
      "secure_url": "https://res.cloudinary.com/lereacteur/image/upload/v1683066797/api/vinted-v2/offers/64518fac838b1f551be9ab7e/oeevlebdsk4djri2etv1.jpg",
      "folder": "api/vinted-v2/offers/64518fac838b1f551be9ab7e",
      "access_mode": "public",
      "original_filename": "1644244740_xwwygk",
      "api_key": "361833749344571"
    }
  ],
  "owner": {
    "$oid": "64518fa2838b1f551be9ab55"
  },
  "product_image": {
    "asset_id": "99c8515080339dab0223c40ed8482f96",
    "public_id": "api/vinted-v2/offers/64518fac838b1f551be9ab7e/preview",
    "version": 1683066797,
    "version_id": "a88ea2d9f313cad51fe430f5abe5ff4e",
    "signature": "15b161dc6fc06b538fadc0b6bcb43dcdabf76336",
    "width": 321,
    "height": 800,
    "format": "jpg",
    "resource_type": "image",
    "created_at": "2023-05-02T22:33:17Z",
    "tags": [],
    "bytes": 82936,
    "type": "upload",
    "etag": "b4cd79f0e0466d2b5e1da656e07763a1",
    "placeholder": false,
    "url": "http://res.cloudinary.com/lereacteur/image/upload/v1683066797/api/vinted-v2/offers/64518fac838b1f551be9ab7e/preview.jpg",
    "secure_url": "https://res.cloudinary.com/lereacteur/image/upload/v1683066797/api/vinted-v2/offers/64518fac838b1f551be9ab7e/preview.jpg",
    "folder": "api/vinted-v2/offers/64518fac838b1f551be9ab7e",
    "access_mode": "public",
    "original_filename": "1644244740_xwwygk",
    "api_key": "361833749344571"
  },
  "product_date": {
    "$date": {
      "$numberLong": "1683066796591"
    }
  },
  "__v": 0
