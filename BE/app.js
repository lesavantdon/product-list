const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const productsRoutes = require('./api/products/index.js');
const reviewsRoutes = require('./api/reviews/index.js');
const errorHandler = require('./middleware/errorHandler');

dotenv.config(); // Load environment variables from .env file

const app = express(); 

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});  

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.use('/products', productsRoutes); 
app.use('/reviews', reviewsRoutes);

app.use((req, res) => { 
  res.status(404).send('Sorry, that route doesn’t exist.');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(errorHandler);

module.exports = app; // Export the app
