const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const Schema = mongoose.Schema;

//Schemas
const addressSchema = require("./Schemas/addressSchema");
const orderSchema = new Schema({
  orderId: {
    type: String,
    default: nanoid(),
    required,
    es_indexed: true,
  },
  customerId: {
    type: mongoose.Types.ObjectId,
    ref: "Customer",
    required,
  },
  products: [
    {
      _id: false,
      productId: {
        type: mongoose.Types.ObjectId,
        required,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },
    },
  ],
  amount: { type: Number },
  modeOfPayment: {
    type: String,
    required,
  },
  status: {
    type: String,
  },
  shippingAddress: {
    type: addressSchema,
    required,
  },
  billingAddress: {
    type: addressSchema,
    required,
  },
});

module.exports = mongoose.model("Order", orderSchema);
