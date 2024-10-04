// controllers/productController.js
const mongoose = require('mongoose');
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

    res.json({ products, total, currentPage: page, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// GET /products/:id
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createProduct = async (req, res) => {
  
  const { name, description, price, category, image, userName } = req.body;
  console.log('Request product data:', req.body);
  
  try {
    // Validate that all required fields are provided
    if (!name || !description || !price || !category || !image || !userName) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const product = new Product({ name, description, price, category, image, userName });
    await product.save(); // Save the new product in the database
    res.status(201).json(product); // Respond with the created product
  } catch (error) {
    console.error('Error creating product:', error); // Log the error to the console
    res.status(500).json({ message: 'Error creating product', error: error.message }); // Include the error message in the response
  }
};


const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getProducts, getProduct, createProduct, deleteProduct };