const mongoose = require('mongoose');

// Review Schema
const reviewSchema = mongoose.Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true }
});

// Product Schema
const productSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  name: {type: String, required: true},
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: {type: String, required: true}, // URL or path to product image,
  reviews: [reviewSchema]  // Embedded reviews
  // Other fields as needed
});

const product = mongoose.model.product || mongoose.model('product', productSchema);

module.exports = product;
