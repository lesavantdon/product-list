// models/Product.js
const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Reference to Product
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

// Product Schema
const productSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  reviews: [reviewSchema] // Array of reviews for the product
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
