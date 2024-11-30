const mongoose = require('mongoose');

// Define the schema for the checkout details
const checkoutSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true, // Remove unnecessary whitespace
  },
  bookDetails: {
    type: String,
    required: true,
  },
  bookPrice: {
    type: Number,
    required: true,
    min: 0, // Ensure price is non-negative
  },
  deliveryCharges: {
    type: Number,
    required: true,
    min: 0, // Ensure delivery charges are non-negative
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0, // Ensure total amount is non-negative
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create and export the model
module.exports = mongoose.model('Checkout', checkoutSchema);
