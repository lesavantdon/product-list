const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRoutes);
app.use('/reviews', reviewRoutes);

module.exports = app;
