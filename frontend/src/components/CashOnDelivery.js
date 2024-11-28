import React, { useState} from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import Header from './Header1';
const CashOnDelivery = ({removeFromCart}) => {
  const location = useLocation();
  const { subtotal, deliveryCharges } = location.state || { subtotal: 0, deliveryCharges: 250 };
  const [totalPayment, setTotalPayment] = useState(subtotal + deliveryCharges);

  const handleOrder = () => {
    alert(`Order Confirmed! Total Payment: PKR ${totalPayment}`);
    // Add logic to remove add-to-cart notification if necessary
    removeFromCart();
  };

  return (
    <div>
      <Header/>
    <div className='cash-on-delivery-container'>
    <div className="cash-on-delivery">
      <img src={logo} alt="Book Store Logo" className="logo" />
      <h4>Cash on Delivery</h4>
      <p>Please review your order details:</p>
      <div className="order-summary">
        <div className="summary-item">
          <label>Subtotal:</label>
          <span>PKR {subtotal}</span>
        </div>
        <div className="summary-item">
          <label>Delivery Charges:</label>
          <span>PKR {deliveryCharges}</span>
        </div>
        <div className="summary-item total">
          <label>Total Payment:</label>
          <span>PKR {totalPayment}</span>
        </div>
      </div>
      <button className="confirm-btn" onClick={handleOrder}>
        Confirm Order
      </button>
    </div>
    </div>
    </div>
  );
};

export default CashOnDelivery;
