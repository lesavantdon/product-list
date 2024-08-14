const express = require('express');
const { getProduct, getProducts, createProduct, deleteProduct } = require('../controllers/productController');
const { addProductReview, getProductReviews } = require('../controllers/reviewController');

const router = express.Router();

router.get('/', getProducts); // GET /products with filters, sorting, searching
router.get('/:product', getProduct); // GET /products/:product
router.get('/:product/reviews', getProductReviews); // GET /products/:product/reviews

router.post('/', createProduct); // POST /products
router.post('/:product/reviews', addProductReview); // POST /products/:product/reviews

router.delete('/:product', deleteProduct); // DELETE /products/:product

module.exports = router;
