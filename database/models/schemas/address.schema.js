const mongoose = require(mongoose);
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  province: { type: String, required: true },
  city: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  label: { type: String },
});

module.exports = addressSchema;
