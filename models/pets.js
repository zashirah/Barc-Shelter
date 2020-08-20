const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Pet = new Schema({
  type: String,
  name: String,
  age: Number,
  sex: String,
  breed: String,
  bioPersonality: String,
  images: [String],
});

module.exports = mongoose.model("pets", Pet);