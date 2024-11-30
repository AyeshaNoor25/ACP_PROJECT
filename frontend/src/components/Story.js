import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Story.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Story({ heading, books = [], notificationCount = 0, cartItems = [], userId }) {
  const navigate = useNavigate();
  
  const handleBuyNow = (book) => {
    navigate('/checkout', { state: { selectedItems: [book] } });
  };
  const handleAddToCart = async (book) => {
    try {
      const userId = localStorage.getItem('userId'); // Ensure `userId` is stored and retrieved
      if (!userId) {
        console.error('User ID is missing');
        alert('Please log in to add items to the cart');
        return;
      }
  
      const response = await fetch('http://localhost:5000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          item: {
            bookId: book._id, // Ensure `book` contains `_id`
            name: book.name,
            image: book.image,
            price: book.price,
            quantity: 1,
          },
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Item added to cart:', data);
        alert('Item added to cart!');
      } else {
        console.error('Error adding item to cart:', data.message);
        alert(data.message || 'Failed to add item to cart.');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('An error occurred while adding the item to the cart.');
    }
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
