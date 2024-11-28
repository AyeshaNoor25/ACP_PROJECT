// Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Header.css'; 
import b from '../assets/logo.jpg';

function Header({ cartCount, notificationCount }) {
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    alert("Added to cart!");
    navigate('/cart');
  };

  const handleLogin = () => {
    alert("Profile Logout!");
    navigate('/');
  };

  return (
    <div className="header-container">
      <img src={b} alt="Logo" width={80} />
      <div className="icon-container">
        <div className="cart-icon" onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
          {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
        </div>
        <div className="user-icon" onClick={handleLogin}>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
