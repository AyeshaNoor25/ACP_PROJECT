const mongoose = require('mongoose');

const cardDetailsSchema = new mongoose.Schema({
  cardHolder: { type: String, required: true },
  cardNumber: { type: String, required: true },
  cvv: { type: String, required: true },
  expiryDate: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CardDetails', cardDetailsSchema);
