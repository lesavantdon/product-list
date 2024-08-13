const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    text: { type: String, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
