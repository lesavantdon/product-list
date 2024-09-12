const mongoose = require('mongoose');

const connectDB = async () => {
  try {

    if (mongoose.connection.readyState === 0) {
      const conn = await mongoose.connect(process.env.MONGODB_URI, {
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } else {
      console.log('MongoDB is already connected');
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
