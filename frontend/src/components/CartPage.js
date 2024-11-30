import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from './Header1';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate();

  // Fetch cart items
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cart/12345'); // Replace with actual user ID
        const data = await response.json();
        if (response.ok) {
          setCartItems(data.cart.items);
        } else {
          console.error('Error fetching cart:', data.message);
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (index) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/remove`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: '12345', // Replace with actual user ID
          itemName: cartItems[index].name,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setCartItems((prev) => prev.filter((_, i) => i !== index));
      } else {
        console.error('Error removing item:', data.message);
      }
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
                      onChange={() => setSelectedItems((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))}
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '50px', marginRight: '10px' }}
                    />
                    <span>{item.name}</span>
                    <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
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
