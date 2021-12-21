const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required },
  price: { type: Number, required },
  color: { type: String },
  description: { type: String },
  size: { type: String },
  material: { type: String },
  stock: { type: Number },
  images: [
    {
      sm: { type: String },
      lg: { type: String },
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
