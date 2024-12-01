import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from './Header1';
const CartPage = ({ cartItems, removeFromCart }) => {
  const [selectedItems, setSelectedItems] = useState({}); // To keep track of selected items
  const navigate = useNavigate();

  // Function to handle selecting/deselecting items
  const handleSelectItem = (index) => {
    setSelectedItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle selection
    }));
  };

  // Function to checkout selected items
  const handleCheckoutSelected = () => {
    const selected = cartItems.filter((_, index) => selectedItems[index]);
    navigate('/checkout', { state: { selectedItems: selected } }); // Pass selected items to CheckoutForm
  };

  return (
    <div>
      <Header/>
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
                    checked={!!selectedItems[index]} // Check if the item is selected
                    onChange={() => handleSelectItem(index)} // Toggle selection
                  />
                  <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                  <span>{item.name}</span>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
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