const express = require("express");
const cookieParser = require("cookie-parser");

//const path = require("path");

function expressConfig(app) {
  // app.use(express.static(path.resolve(__dirname, "../public")));
  app.use(express.static("src/public"));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
}

module.exports = expressConfig;
