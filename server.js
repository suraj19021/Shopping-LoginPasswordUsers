// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');  // Your DB connection file

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/products', require('./routes/productRoutes'));
app.use('/cart', require('./routes/cartRoutes'));
app.use('/auth', require('./routes/authRoutes'));  // Mount auth routes here ONLY

// Error handling middleware (must come after routes)
const errorHandler = require('./middleware/errorMiddleware');
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
