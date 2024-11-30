const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String },
        // quantity: { type: Number, default: 1 },
      },
    ],
  });
  

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
