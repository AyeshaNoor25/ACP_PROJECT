const mongoose = require('mongoose');  // Make sure this is present

const cartSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',  // Assuming there is a 'Book' model
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,  // Ensure the quantity is at least 1
  },
  price: {
    type: Number,
    required: true,
  },
});

const Cart = mongoose.model('Cart', cartSchema);  // Model for the Cart collection
module.exports = Cart;
