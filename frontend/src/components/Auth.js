// src/components/Auth.js
import React, { useState } from 'react';
import Login from './Login'; 
import Signup from './Signup'; 
import Header from './Header1';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuth = () => {
        setIsLogin(prev => !prev);
    };

    return (
        <div>
            <Header/>
        <div className="container">
            
            <div className={`col ${isLogin ? 'sign-in' : 'sign-up'}`}>
                <div className={`form ${isLogin ? 'show' : ''}`}>
                    <Login toggleAuth={toggleAuth} />
                </div>
            </div>
            <div className={`col ${!isLogin ? 'sign-up' : 'sign-in'}`}>
                <div className={`form ${!isLogin ? 'show' : ''}`}>
                    <Signup toggleAuth={toggleAuth} />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Auth;
