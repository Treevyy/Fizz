// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/FIZZ_logo_small.png' // Update path/name if needed


function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="home-container">
     <img src= {logo} alt="Fizz Logo" className="logo-small" />
      {/* Header section with the logo and tagline */}
      <header className="home-header">
        <h1 className="home-logo">Start your Fizz<br /> Adventure!</h1>

      </header>

      <div className="cta-buttons">
        <p className="cta-label">Sign In</p>
        <button onClick={handleLoginClick} className="cta-btn login-btn">Welcome back, Fizzter!</button>
        
        <p className="cta-label">New User? Join the Fizz!</p>
        <button onClick={handleSignupClick} className="cta-btn signup-btn">Find your match!</button>
      </div>

    </div>
  );
}

export default Home;