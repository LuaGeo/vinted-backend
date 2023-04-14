const express = require("express");
const mongoose = require("mongoose");

///////////////////////////////////////////////////
const fileUpload = require("express-fileupload"); // ?
const cloudinary = require("cloudinary").v2;

///////////////////////////////////////////////////

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer");

app.use(userRoutes);
app.use(offerRoutes);

app.get("/", (req, res) => {
  res.json("COuCOu! C'est mon premier serveur !");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server Started !!! 🚀👌");
});
