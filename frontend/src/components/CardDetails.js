import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header1';
import './CardDetails.css';

const CardDetails = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryError, setExpiryError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const validateExpiryDate = (date) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    return regex.test(date);
  };

  const handleConfirmPayment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateExpiryDate(expiryDate)) {
      setExpiryError('Invalid expiry date format. Please use MM/YY.');
      setIsSubmitting(false);
      return;
    }

    setExpiryError('');

    const cardData = { cardHolder, cardNumber, cvv, expiryDate };

    try {
      const response = await fetch('http://localhost:5000/api/card-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cardData),
      });

      const responseData = await response.json();

      if (response.ok) {
        alert("Payment successful! You'll be notified in a few minutes.");
        navigate('/home');
        setCardHolder('');
        setCardNumber('');
        setCvv('');
        setExpiryDate('');
      } else {
        alert(responseData.message || 'Failed to save card details.');
      }
    } catch (error) {
      console.error('Error during API call:', error);
      alert('An error occurred while saving card details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="card-details-container">
        <div className="card-details">
          <h4>Credit/Debit Card Payment</h4>
          <form onSubmit={handleConfirmPayment}>
            <div className="form-group">
              <label htmlFor="cardHolder">Card Holder Name:</label>
              <input
                type="text"
                id="cardHolder"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                placeholder="FATIMA MALIK"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                maxLength="16"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                maxLength="3"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                maxLength="5"
                required
              />
              {expiryError && <p className="error-text">{expiryError}</p>}
            </div>
            <button
              type="submit"
              className="confirm-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Confirm Payment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
