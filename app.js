const express = require("express");
const logger = require("morgan");
const apiRoutes = require("./routes/api");

const app = express();

app.use("/api", apiRoutes);

module.exports = app;
