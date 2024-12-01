import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Story.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Story({ heading, books = [], addToCart, notificationCount = 0, cartItems = [] }) {
  const navigate = useNavigate();

  const handleAddToCart = async (book) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(data.message || 'Book added to cart successfully!');
      } else {
        const error = await response.json();
        console.error('Error response:', error);
        alert(error.message || 'Failed to add book to cart.');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('An error occurred while adding to cart.');
    }
  };
  
<<<<<<< HEAD
  
=======

>>>>>>> add50c2dde13e34e6deb34ce0fa4c557279870c2
  return (
    <div>
      <Header cartCount={cartItems.length} notificationCount={notificationCount} />
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
              <button onClick={() => handleAddToCart({ name: book.name, image: book.image, price: book.price })}>
                Add to Cart
              </button>
              <button onClick={() => navigate('/checkout', { state: { selectedItems: [book] } })}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
