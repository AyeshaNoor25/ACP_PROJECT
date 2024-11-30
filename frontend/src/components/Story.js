import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Story.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Story({ heading, books = [], addToCart, notificationCount = 0, cartItems = [] }) {
  const navigate = useNavigate();

  const handleBuyNow = (book) => {
    navigate('/checkout', { state: { selectedItems: [book] } });
  };

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
            <button onClick={() => addToCart({ name: book.name, image: book.image, price:book.price })}>Add to Cart</button>
            <button onClick={() => handleBuyNow({ name: book.name, image: book.image, price: book.price })}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    </div>   
  );
}

export default Story;