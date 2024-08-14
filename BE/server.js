const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/products'); // Import routes for products
const reviewsRoutes = require('./routes/reviews'); // Import routes for reviews (if needed)

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Database Connection
mongoose.connect('mongodb://localhost:27017/your-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Database connection error:', err);
});

// Routes
app.use('/products', productsRoutes); // Route for products
app.use('/reviews', reviewsRoutes); // Route for reviews (if applicable)

// Categories Route
app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find().distinct('name');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
