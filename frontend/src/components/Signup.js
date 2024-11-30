import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = ({ toggleAuth }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
      alert('Signup successful');
      navigate('/home');
    } catch (error) {
      console.error('Signup Error:', error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="form-wrapper">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign up</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>
        <span>Already have an account?</span>
        <b onClick={toggleAuth} className="pointer">Sign in here</b>
      </p>
    </div>
  );
};

export default Signup;
