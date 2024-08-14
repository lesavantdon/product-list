const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    text: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    reviews: [reviewSchema],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
