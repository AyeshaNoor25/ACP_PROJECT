const mongoose = require('mongoose');

// Define the cart schema
const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // You might want to associate the cart with a user
  books: [
    {
      name: { type: String, required: true },
      price: { type: String, required: true },
      image: { type: String, required: true }
    }
  ]
});

// Create the model
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
