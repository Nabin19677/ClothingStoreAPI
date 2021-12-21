const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  firstName: { type: String, required },
  lastName: { type: String, required },
  username: { type: String, required },
  password: { type: String, required },
  phoneNumber: { type: String, required },
  role: { type: String, default: 1 },
});

module.exports = mongoose.model("Admin", adminSchema);
