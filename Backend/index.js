const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Cart = require('./models/cart');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
require('dotenv').config({ path: '../.env' });  // Adjust the path to your .env file

const app = express();

const CardDetails = require('./models/CardDetails');
const Checkout = require('./models/checkOut');


// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Nameapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Signup Endpoint
app.post('/api/auth/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Error during registration', error });
  }
});

// Login Endpoint
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Step 1: Find the user by email
    console.log('Received login request:', email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User found:', user.email);

    // Step 2: Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log('Password matched');

    // Step 3: Generate JWT token
    const secretKey = process.env.JWT_SECRET || 'fallback-secret';  // Ensure JWT_SECRET is loaded
    console.log('JWT Secret:', secretKey);  // Log the secret key for debugging

    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
    console.log('JWT Token generated:', token);

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Error during login', error });
  }
});

app.post('/api/cart', async (req, res, next) => {
  try {
    const { book } = req.body;

    if (!book || !book.name || !book.price || !book.image) {
      return res.status(400).json({ message: 'Missing book details' });
    }

    // Assuming you have JWT token logic here
    const token = req.headers.authorization?.split(' ')[1];  // Bearer token

if (!token) {
  return res.status(401).json({ message: 'No token provided' });
}

const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
  console.error("JWT_SECRET is not defined");
  return res.status(500).json({ message: 'JWT_SECRET is not defined in the environment' });
}

const decoded = jwt.verify(token, secretKey);

    const userId = decoded.id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, books: [book] });
    } else {
      cart.books.push(book);
    }

    await cart.save();
    res.status(200).json(cart);

  } catch (err) {
    console.error('Error adding to cart:', err);
    next(err);  // Pass the error to the next middleware for handling
  }
});

// Checkout
app.post('/api/checkout', async (req, res) => {
  try {
    const { description, bookDetails, bookPrice, deliveryCharges, totalAmount } = req.body;

    if (!description || !bookDetails || !bookPrice || !deliveryCharges || !totalAmount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newCheckout = new Checkout({
      description,
      bookDetails,
      bookPrice,
      deliveryCharges,
      totalAmount,
    });

    await newCheckout.save();
    res.status(201).json({ message: 'Checkout info saved successfully!' });
  } catch (error) {
    console.error('Error saving checkout info:', error);
    res.status(500).json({ message: 'Error saving checkout info' });
  }
});

//Card Details
app.post('/api/card-details', async (req, res) => {
  const { cardHolder, cardNumber, cvv, expiryDate } = req.body;

  try {
    if (!cardHolder || !cardNumber || !cvv || !expiryDate) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newCardDetails = new CardDetails({
      cardHolder,
      cardNumber,
      cvv,
      expiryDate,
    });

    await newCardDetails.save();
    res.status(201).json({ message: 'Card details saved successfully.' });
  } catch (error) {
    console.error('Error saving card details:', error);
    res.status(500).json({ message: 'Failed to save card details.' });
  }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
