const Location = require("../models/location");
const Restaurant = require("../models/restaurant");
const Menu = require("../models/menu");

exports.getLocations = async (req, res, next) => {
  try {
    const locations = await Location.find();
    if (!locations) {
      const error = new Error("Failed to fetch locations");
      error.statusCode = 422;
      throw error;
    }
    res.status(200).json({
      ok: true,
      message: "Success",
      data: locations.map((location) => {
        return {
          ...location._doc,
        };
      }),
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      next(error);
    }
  }
};

exports.getRestaurants = async (req, res, next) => {
  const page = req.query.page || 1;
  const perPage = 4;
  const city = req.query.city || null;
  const filter = city ? { city: city } : {};

  try {
    const restaurants = await Restaurant.find(filter)
      .skip((page - 1) * perPage)
      .limit(perPage);

    if (!restaurants) {
      const error = new Error("Failed to fetch restaurants");
      error.statusCode = 422;
      throw error;
    }
    const numRestaurants = await Restaurant.countDocuments(filter);

    res.status(200).json({
      ok: true,
      message: "Success",
      data: restaurants,
      total: numRestaurants,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getMenu = async (req, res, next) => {
  const restaurantId = req.params.restaurantId;
  try {
    const menu = await Menu.findOne({ restaurants: restaurantId });
    if (!menu) {
      const error = new Error("Failed to fetch restaurants");
      error.statusCode = 422;
      throw error;
    }
    res.status(200).json({
      ok: true,
      message: "Success",
      data: menu,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      next(error);
    }
  }
};
