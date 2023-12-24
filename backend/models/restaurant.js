const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  city: { type: String, required: true },
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  _id: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  days: [
    {
      day: { type: String, required: true },
      closes: { type: String, required: true },
      opens: { type: String, required: true },
    },
  ],
  rating: { type: Number, required: true },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
    },
  ],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
