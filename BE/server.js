

const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = require('./app'); // Import your main app configuration



dotenv.config(); // Load environment variables from .env file

connectDB(); // Connect to the database

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});