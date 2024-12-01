const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Cart = require('./models/cart');
require('dotenv').config();

const app = express();

const CardDetails = require('./models/CardDetails');

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

app.post('/api/cart/add', async (req, res) => {
  const { userId, item } = req.body;

  // Validate userId and item
  if (!userId) {
    return res.status(400).json({ message: 'userId is required.' });
  }
  if (!item || !item.bookId) {
    return res.status(400).json({ message: 'item.bookId is required.' });
  }

  try {
    // Convert userId to ObjectId and validate that the user exists
    const objectIdUserId = mongoose.Types.ObjectId(userId); // Convert to ObjectId
    const userExists = await User.findById(objectIdUserId);  // Check if user exists
    if (!userExists) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Find or create the cart for the user
    let cart = await Cart.findOne({ user: objectIdUserId });
    if (!cart) {
      cart = new Cart({ user: objectIdUserId, items: [] });
    }

    // Add the item to the cart or update the quantity if it already exists
    const existingItemIndex = cart.items.findIndex((cartItem) => cartItem.bookId.toString() === item.bookId);
    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += item.quantity || 1;
    } else {
      cart.items.push(item);
    }

    // Save the updated cart
    await cart.save();
    res.status(200).json({ message: 'Item added to cart', cart });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'Error adding to cart', error });
  }
});


// Get Cart Items Endpoint
app.get('/api/cart/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ user: userId }).populate('user');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json({ cart });
  } catch (error) {
    console.error('Error retrieving cart:', error);
    res.status(500).json({ message: 'Error retrieving cart', error });
  }
});
app.delete('/api/cart/remove', async (req, res) => {
  const { userId, itemName } = req.body;

  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter((item) => item.name !== itemName);
    await cart.save();

    res.status(200).json({ message: 'Item removed from cart', cart });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Error removing item from cart', error });
  }
});

//Card DEta

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
