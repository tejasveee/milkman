const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  imageURL: String,
});

const Product = model("Product", productSchema);
module.exports = Product;
