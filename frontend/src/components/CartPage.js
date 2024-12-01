import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from './Header1';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cart', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleSelectItem = (index) => {
    setSelectedItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle selection
    }));
  };

  const handleRemoveItem = async (index) => {
    const itemToRemove = cartItems[index];
  
    try {
      // Send a DELETE request to remove the item from the backend
      const response = await fetch(`http://localhost:5000/api/cart/${itemToRemove._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      // Remove the item from the state (frontend)
      setCartItems((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };
  

  const handleCheckoutSelected = () => {
    const selected = cartItems.filter((_, index) => selectedItems[index]);
    navigate('/checkout', { state: { selectedItems: selected } });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="cart-page">
          <div className="cart-header">
            <h1>Your Cart</h1>
          </div>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <input
                      type="checkbox"
                      checked={!!selectedItems[index]}
                      onChange={() => handleSelectItem(index)}
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '50px', marginRight: '10px' }}
                    />
                    <span>{item.name}</span>
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                  </li>
                ))}
              </ul>
              <div className="cart-actions">
                <button onClick={handleCheckoutSelected}>Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
