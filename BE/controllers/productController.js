// controllers/productController.js

const Product = require('../models/product.js');

// GET /products
const getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 9, query, sort, category } = req.query;

    const queryObject = {};
    if (query) {
      queryObject.name = { $regex: query, $options: 'i' };
    }
    if (category && category !== 'all') {
      queryObject.category = category;
    }

    const products = await Product.find(queryObject)
      .sort({ price: sort === 'asc' ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Product.countDocuments(queryObject);

    res.json({ products, total });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// GET /products/:id
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// POST /products
const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// DELETE /products/:id
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getProducts, getProduct, createProduct, deleteProduct };
