// api/reviews/index.js
const express = require('express');
const router = express.Router();
const {
  addProductReview,
  getProductReviews,
  deleteProductReview
} = require('../../controllers/reviewController');


router.post('/:productId/reviews', addProductReview); // Use controller function
router.get('/:productId/reviews', getProductReviews); // Use controller function
router.delete('/:productId/reviews/:reviewId', deleteProductReview); 

module.exports = router; 
