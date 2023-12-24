const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./constants");

const feedRoutes = require("./routes/feed");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(feedRoutes);

app.use((error, req, res, next) => {
  if (!error) {
    return next();
  }
  const { message, statusCode } = error;
  res.status(statusCode).json({
    message,
    ok: false,
  });
});

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(8080);
  })
  .catch((error) => {
    console.log(error);
  });
