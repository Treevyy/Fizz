// src/pages/Intro.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Intro.css';
import fizzLogo from '../assets/logo.png'; // Update path/name if needed

function Intro() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleLogoClick = () => {
    setClicked(true);
    // After the fade-out animation finishes, go to the Login page
    setTimeout(() => {
      navigate('/login');
    }, 1000); // 1-second delay
  };

  return (
    <div className={`intro-container ${clicked ? 'fade-out' : ''}`}>
      <div className="intro-logo" onClick={handleLogoClick}>
        <img src={fizzLogo} alt="Fizz Logo" className="logo-image" />
      </div>
      {/* If the tagline is already part of the image, you can remove the line below */}
      <p className="intro-text">pop, clink, fizz to your love match!</p>
    </div>
  );
}

export default Intro;
