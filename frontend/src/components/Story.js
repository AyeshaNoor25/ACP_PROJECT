import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Story.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';

function Story({ heading, books = [], addToCart, notificationCount = 0, cartItems = [] }) {
  const [cartCount, setCartCount] = useState(0); // Local state for cart count

  const navigate = useNavigate();

  const handleBuyNow = (book) => {
    navigate('/checkout', { state: { selectedItems: [book] } });
  };
  const handleAddToCart = (book) => {
    if (!book.name || !book.price || !book.image) {
      console.error("Invalid book details:", book);
      return;
    }
  
    addToCart(book);  // Update the cart in state
    setCartCount((prevCount) => prevCount + 1);
    // Send the book data to the backend API
    fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Send the token
      },
      body: JSON.stringify({ book })
    })
    
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to add book: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Book added to cart:', data);
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
  };
  

  return (
    <div>
      <Header cartCount={cartCount} notificationCount={notificationCount} />
      <div className="section-container">
        <div className="search-bar-container">
          <input type="text" placeholder="Book, Category, Author" className="search-bar" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <h2>{heading}</h2>
        <div className="image-scroll">
          {books.map((book, index) => (
            <div className="image-item" key={index}>
              <img src={book.image} alt={book.name} />
              <h3>{book.name}</h3>
              <h3>{book.price}</h3>
              <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
              <button onClick={() => handleBuyNow(book)}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
