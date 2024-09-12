const mongoose = require('mongoose');
const Product = require('../models/product');  // Ensure this path is correct

const uri = "mongodb://lesavantdon:icecream2@localhost:27017/productsdb?authSource=admin";

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('Database connected!');
    return Product.deleteMany({});  // Clear existing data
  })
  .then(() => {
    console.log('Existing data deleted!');
    
    // Sample data to seed
    const sampleProducts = [
      {
        userName: 'Alice',
        name: 'Topaz Ring',
        description: 'A beautiful piece of jewelry with a topaz gem.',
        price: 150,
        category: 'jewelry',
        image: 'https://example.com/jewelry1.jpg',
        reviews: [
          {
            user: 'Bob',
            rating: 5,
            review: 'Absolutely loved it!',
            productId: new mongoose.Types.ObjectId()  // Replace this with a valid ObjectId if necessary
          }
        ]
      },
      {
        userName: 'John',
        name: 'Garden Toolset',
        description: 'A versatile set of tools for your garden.',
        price: 80,
        category: 'garden',
        image: 'https://example.com/garden1.jpg',
        reviews: [
          {
            user: 'Alice',
            rating: 4,
            review: 'Very useful!',
            productId: new mongoose.Types.ObjectId()  // Replace this with a valid ObjectId if necessary
          }
        ]
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userName: 'Sarah',
        name: 'Elegant Necklace',
        description: 'An elegant necklace that adds a touch of class.',
        category: 'jewelry',
        price: 29.99,
        image: 'https://example.com/images/elegant-necklace.jpg',
        reviews: []
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userName: 'Mike',
        name: 'Garden Tools Set',
        description: 'A comprehensive set of garden tools for all your needs.',
        category: 'garden',
        price: 49.99,
        image: 'https://example.com/images/garden-tools-set.jpg',
        reviews: []
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userName: 'Emily',
        name: 'Wireless Gaming Mouse',
        description: 'A high-performance wireless mouse for gamers.',
        category: 'games',
        price: 59.99,
        image: 'https://example.com/images/wireless-gaming-mouse.jpg',
        reviews: []
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userName: 'Tom',
        name: 'Chic Sunglasses',
        description: 'Stylish sunglasses that protect your eyes from the sun.',
        category: 'beauty',
        price: 89.99,
        image: 'https://example.com/images/chic-sunglasses.jpg',
        reviews: []
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userName: 'Lily',
        name: 'Comfortable Lounge Chair',
        description: 'A comfortable chair perfect for lounging.',
        category: 'home',
        price: 199.99,
        image: 'https://example.com/images/lounge-chair.jpg',
        reviews: []
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userName: 'Rachel',
        name: 'Stylish Earrings',
        description: 'Earrings that add a touch of elegance to any outfit.',
        category: 'jewelry',
        price: 19.99,
        image: 'https://example.com/images/stylish-earrings.jpg',
        reviews: []
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userName: 'Jack',
        name: 'Organic Soil Mix',
        description: 'Premium organic soil mix for your garden.',
        category: 'garden',
        price: 14.99,
        image: 'https://example.com/images/organic-soil-mix.jpg',
        reviews: []
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userName: 'Sophia',
        name: 'Advanced VR Headset',
        description: 'An advanced VR headset for immersive experiences.',
        category: 'games',
        price: 299.99,
        image: 'https://example.com/images/vr-headset.jpg',
        reviews: []
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userName: 'Oliver',
        name: 'Luxury Hand Cream',
        description: 'A luxurious hand cream that moisturizes and rejuvenates.',
        category: 'beauty',
        price: 24.99,
        image: 'https://example.com/images/luxury-hand-cream.jpg',
        reviews: []
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userName: 'Ava',
        name: 'Modern Desk Lamp',
        description: 'A sleek desk lamp that provides ample lighting.',
        category: 'home',
        price: 34.99,
        image: 'https://example.com/images/modern-desk-lamp.jpg',
        reviews: []
      }
    ];

    // Insert sample data
    return Product.insertMany(sampleProducts);
  })
  .then(() => {
    console.log('Data seeded!');
    mongoose.disconnect();  // Close the connection
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    mongoose.disconnect();  // Ensure connection is closed on error
  });
