// src/components/Login.js
import React from 'react';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Login = ({toggleAuth}) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Add your login logic here
        alert('Login clicked!');
        navigate('/home'); // Redirect after successful login
    };
    return (
        <div className="form-wrapper">
            <img src={logo} alt="Book Store Logo" className="logo" />
            <div className="form sign-in show"> {/* Add show class here */}
                <div className="input-group">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" />
                </div>
                <button onClick={handleLogin}>Sign in</button>
                <p>
                <span>Don't have an account?</span>
                <b onClick={toggleAuth} className="pointer">Sign up here</b>
                </p>
            </div>
        </div>
    );
};

export default Login;
