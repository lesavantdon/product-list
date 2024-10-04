// controllers/reviewController.js
const mongoose = require('mongoose');
const Product = require('../models/product');


// Add a Product Review
const addProductReview = async (req, res) => {
  const { productId } = req.params; // Extract productId from request parameters
  const { user, rating, review } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const newReview = { user, rating, review };
    product.reviews.push(newReview); // Add the new review to the product's reviews array
    await product.save(); // Save the updated product document

    res.status(201).json({ message: 'Review added successfully', review: newReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding review', error });
  }
};

// Get Reviews for a Product
const getProductReviews = async (req, res) => {
  const { productId } = req.params; // Extract productId from request parameters

  try {
    const product = await Product.findById(productId).select('reviews'); // Select only reviews
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product.reviews); // Return the reviews for the product
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// Delete a Review
const deleteProductReview = async (req, res) => {
  const { productId, reviewId } = req.params; // Extract productId and reviewId from request parameters

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Find the review by its ID and remove it from the product's reviews array
    product.reviews.id(reviewId).remove();
    await product.save(); // Save the updated product document

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting review', error });
  }
};

module.exports = {
  addProductReview,
  getProductReviews,
  deleteProductReview,
};
