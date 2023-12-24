const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  items: [
    {
      mealType: {
        type: String,
        enum: ["appetizer", "main dish", "dessert"],
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  restaurants: {
    type: Number,
    ref: "Restaurant",
    required: true,
  },
});

module.exports = mongoose.model("Menu", menuSchema);
