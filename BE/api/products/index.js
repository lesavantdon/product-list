const express = require('express');
const { getProducts, getProduct, createProduct, deleteProduct } = require('../../controllers/productController');
const { addProductReview, getProductReviews } = require('../../controllers/reviewController');

const router = express.Router();

router.get('/', getProducts); // GET /products
router.get('/:id', getProduct); // GET /products/:id
router.post('/', createProduct); // POST /products
router.delete('/:id', deleteProduct); // DELETE /products/:id
router.post('/:id/reviews', addProductReview); // POST /products/:id/reviews
router.get('/:id/reviews', getProductReviews); // GET /products/:id/reviews

module.exports = router;