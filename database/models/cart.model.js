const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
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
});

module.exports = mongoose.model("Cart", cartSchema);
