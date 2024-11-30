import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ toggleAuth }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId); // Add this line
        alert('Login successful');
        navigate('/home');
      }
       else {
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="form-wrapper">
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
      <button onClick={handleLogin}>Sign in</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>
        <span>Don't have an account?</span>
        <b onClick={toggleAuth} className="pointer">Sign up here</b>
      </p>
    </div>
  );
};

export default Login;
