const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cafeSchema = new Schema({
  image: String,
  images: [],
  name: String,
  city: String,
  rating: Number,
  cost: String,
  about: String,
  serviceOptions: [],
  address: String,
  placeId: String,
});

const Cafe = mongoose.model("Cafe", cafeSchema);

module.exports = Cafe;
