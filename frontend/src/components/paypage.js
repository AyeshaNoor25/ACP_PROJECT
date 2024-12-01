import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import Header from './Header1';
const PayPage = () => {
  const location = useLocation();
  const { subtotal, deliveryCharges } = location.state || { subtotal: 0, deliveryCharges: 0 };
  const navigate = useNavigate();

  const handlePayment = (method) => {
    if (method === 'card-details') {
      navigate('/card-details', { state: { subtotal, deliveryCharges } });
    } else {
      navigate('/cash-on-delivery', { state: { subtotal, deliveryCharges } });
    }
  };

  return (
    <div>
      <Header/>
      <div className='payment-page'>
    <div className="payment-methods">
    <img src={logo} alt="Book Store Logo" className="logo" />
      <h1 className="cad-heading-color">Select Payment Method</h1>
      <div className="payment-container">
        <button className="payment-button" onClick={() => handlePayment('card-details')}>
          Credit Card
        </button>
        <button className="payment-button" onClick={() => handlePayment('cash-on-delivery')}>
          Cash on Delivery
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default PayPage;
