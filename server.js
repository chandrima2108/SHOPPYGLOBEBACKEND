const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product'); 

const app = express();
app.use(express.json());

// Connect to MongoDB
const mongoURI = 'mongodb+srv://chandrima21:R1S3SJz2g1ifd9X8@userverification.afei5.mongodb.net';

mongoose.connect(mongoURI)
.then(() => {
  console.log('Connected to MongoDB');
  
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit the process if connection fails
});


// Routes
app.use('/products', require('./routes/productRoutes'));
app.use('/cart', require('./routes/cartRoutes'));
app.use('/auth', require('./routes/authRoutes'));

const PORT = 3000; // Hardcoded port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

