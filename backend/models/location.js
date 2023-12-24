const mongoose = require("mongoose");

// const citySchema = new mongoose.Schema({
//   name: { type: String, required: true },
// });

const countrySchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  country: { type: String, required: true },
  cities: [String],
});

module.exports = mongoose.model("Location", countrySchema);
