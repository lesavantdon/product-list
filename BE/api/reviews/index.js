// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../../models/product');

// Add a Review
router.post('/products/:productId/reviews', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const review = {
      user: req.body.user,
      rating: req.body.rating,
      review: req.body.review,
      productId: req.params.productId
    };

    product.reviews.push(review);
    await product.save();

    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get Reviews
router.get('/products/:productId/reviews', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const page = parseInt(req.query.page) || 1;
    const limit = 4;
    const skip = (page - 1) * limit;

    const reviews = product.reviews.slice(skip, skip + limit);
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a Review
router.delete('/reviews/:reviewId', async (req, res) => {
  try {
    const product = await Product.findOne({ 'reviews._id': req.params.reviewId });
    if (!product) return res.status(404).json({ message: 'Review not found' });

    product.reviews.id(req.params.reviewId).remove();
    await product.save();

    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
