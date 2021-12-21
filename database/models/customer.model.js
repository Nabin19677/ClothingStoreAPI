const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schemas
const addressSchema = require("./Schemas/addressSchema");
const customerSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required },
  phone: { type: String },
  addressbook: [
    {
      type: addressSchema,
    },
  ],
});

module.exports = mongoose.model("Customer", customerSchema);
