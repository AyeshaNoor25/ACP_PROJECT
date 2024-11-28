// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Story from './components/Story';
import Auth from './components/Auth';
import Login from './components/Login';
import Signup from './components/Signup';
import CardDetails from './components/CardDetails';
import CashOnDelivery from './components/CashOnDelivery';
import CheckoutForm from './components/CheckoutForm';
import CartPage from './components/CartPage';
import PayPage from './components/paypage';
import Home from './components/Pages/Home';
import CrimeAndThirills from './components/Pages/CrimeAndThirills';
import Faritails from './components/Pages/Faritails';
import Friction from './components/Pages/Firiction';
import Litrature from './components/Pages/Litrature';
import Mystery from './components/Pages/Mystery';
import Horror from './components/Pages/Horror';
import UCrimeAndThirills from './components/Pages/UCrimeAndThirills';
import UFaritails from './components/Pages/UFaritails';
import UFiriction from './components/Pages/UFiriction';
import ULitrature from './components/Pages/ULitrature';
import UMystery from './components/Pages/UMystery';
import UHorror from './components/Pages/UHorror';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setNotificationCount((prevCount) => prevCount + 1);
  };  
  
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    if (notificationCount > 0) {
      setNotificationCount(notificationCount - 1);
    }
  };

  return (
    <Router>
      <div>
        {/* <Header cartCount={cartItems.length} notificationCount={notificationCount} />  */}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cash-on-delivery" element={<CashOnDelivery removeFromCart={removeFromCart} />} />
          <Route path="/card-details" element={<CardDetails />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/pay" element={<PayPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/your-story-path" element={<Story cartItems={cartItems} notificationCount={notificationCount} addToCart={addToCart} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/CrimeAndThirills" element={<CrimeAndThirills addToCart={addToCart} />} />
          <Route path="/Faritails" element={<Faritails addToCart={addToCart}/>} />
          <Route path="/Firiction" element={<Friction addToCart={addToCart}/>} />
          <Route path="/Litrature" element={<Litrature addToCart={addToCart}/>} />
          <Route path="/Mystery" element={<Mystery addToCart={addToCart}/>} />
          <Route path="/Horror" element={<Horror addToCart={addToCart}/>} />
          <Route path="/UCrimeAndThirills" element={<UCrimeAndThirills addToCart={addToCart}/>} />
          <Route path="/UFaritails" element={<UFaritails addToCart={addToCart}/>} />
          <Route path="/UFiriction" element={<UFiriction addToCart={addToCart}/>} />
          <Route path="/ULitrature" element={<ULitrature addToCart={addToCart}/>} />
          <Route path="/UMystery" element={<UMystery addToCart={addToCart}/>} />
          <Route path="/UHorror" element={<UHorror addToCart={addToCart}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
