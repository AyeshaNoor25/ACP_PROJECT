const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Checkout = require('./models/checkOut'); // Import the checkout model

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/nameapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Route to handle checkout form submission
app.post('/api/checkout', async (req, res) => {
  const { address, bookDetails, bookPrice, deliveryCharges, totalAmount } = req.body;

  try {
    // Create a new checkout document
    const newCheckout = new Checkout({ address, bookDetails, bookPrice, deliveryCharges, totalAmount });
    await newCheckout.save(); // Save to MongoDB
    res.status(201).json({ message: 'Checkout details saved successfully!' });
  } catch (error) {
    console.error('Error saving checkout details:', error);
    res.status(500).json({ message: 'Failed to save checkout details' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
