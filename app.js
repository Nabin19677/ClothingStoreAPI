const express = require("express");
const logger = require("morgan");
const api = require("./api");

const app = express();

app.use("/api", api);

module.exports = app;
