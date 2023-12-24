const express = require("express");

const {
  getLocations,
  getRestaurants,
  getMenu,
} = require("../controllers/feed");

const router = express.Router();

router.get("/locations", getLocations);

router.get("/restaurants", getRestaurants);

router.get("/restaurants/:restaurantId/menus", getMenu);

module.exports = router;
