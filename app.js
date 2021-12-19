const express = require("express");
const logger = require("morgan");

const app = express();

app.listen(3000, () => {
  console.log("Listening On 3000");
});
