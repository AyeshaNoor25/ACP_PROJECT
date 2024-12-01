const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  bookDetails: {
    type: String,
    required: true,
  },
  bookPrice: {
    type: Number,
    required: true,
  },
  deliveryCharges: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Checkout', checkoutSchema);
