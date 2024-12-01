import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header1';

const CheckoutForm = () => {
  const location = useLocation();
  const { selectedItems } = location.state || { selectedItems: [] };
  const [description, setDescription] = useState('');
  const [bookDetails, setBookDetails] = useState(selectedItems.map(item => item.name).join(', '));
  const [bookPrice, setBookPrice] = useState(0); // Initialize to 0
  const deliveryCharges = 250;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate bookPrice and totalAmount when selectedItems change
  useEffect(() => {
    const totalPrice = selectedItems.reduce((total, item) => parseFloat(total) + parseFloat(item.price), 0);
    setBookPrice(parseFloat(totalPrice));
  }, [selectedItems]);

  const totalAmount = bookPrice + deliveryCharges;

  const handleConfirm = async () => {
    const checkoutData = {
      description,
      bookDetails,
      bookPrice,
      deliveryCharges,
      totalAmount,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkoutData),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        alert('Checkout details saved successfully!');
        navigate('/pay', { state: { subtotal: bookPrice, deliveryCharges } });
      } else {
        alert(responseData.message || 'Failed to save checkout details.');
      }
    } catch (error) {
      console.error('Error during API call:', error);
      alert('An error occurred while saving checkout details.');
    }
  };
  
  return (
    <div>
      <Header />
      <div className="form-container">
        <div className="form-wrapper">
          <h1>Check Out</h1>
          {message && <p className="feedback-message">{message}</p>}
          <div className="input-group">
            <label>Address:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your Address"
            />
          </div>
          <div className="input-group">
            <label>Book Details:</label>
            <input
              type="text"
              value={bookDetails}
              onChange={(e) => setBookDetails(e.target.value)}
              placeholder="Enter book details"
            />
          </div>
          <div className="input-group">
            <label>Book Price:</label>
            <input
              type="text"
              value={`Rs. ${bookPrice}`} // Display formatted price
              readOnly
            />
          </div>
          <div className="input-group">
            <label>Delivery Charges:</label>
            <input type="text" value={`Rs. ${deliveryCharges}`} readOnly />
          </div>
          <div className="input-group">
            <label>Total:</label>
            <input type="text" value={`Rs. ${totalAmount}`} readOnly />
          </div>
          <button onClick={handleConfirm} disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
