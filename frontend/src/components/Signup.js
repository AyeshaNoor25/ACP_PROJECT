// src/components/Signup.js
import React from 'react';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
const Signup = ({ toggleAuth }) => {
    const navigate = useNavigate();

    const handleSignup = () => {
        // Add your login logic here
        alert('Sign up clicked!');
        navigate('/home'); // Redirect after successful login
    };
    return (
        <div className="form-wrapper">
             <img src={logo} alt="Book Store Logo" className="logo" />
            <div className="form sign-up show"> {/* Add show class here */}
                <div className="input-group">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Confirm password" />
                </div>
                <button onClick={handleSignup}>Sign up</button>
                <p>
                    <span>Already have an account?</span>
                    <b onClick={toggleAuth} className="pointer">Sign in here</b>
                </p>
            </div>
        </div>
    );
};

export default Signup;
