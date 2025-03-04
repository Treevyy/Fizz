// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';

function Home() {
  return (
    <div className="home-container">
      {/* Header section with the logo and tagline */}
      <header className="home-header">
        <h1 className="home-logo">fizz</h1>
        <p className="home-tagline">Let’s Get Matching!</p>
      </header>

      {/* Render the ProfileCard component */}
      <ProfileCard
        initialName="Alice"
        initialAge={25}
        zodiac="Gemini"
        interests="Hiking, Music, Travel"
        avatarUrl="https://via.placeholder.com/100"
      />

      {/* Call-to-action buttons for navigation */}
      <div className="cta-buttons">
        <Link to="/signup" className="cta-btn signup-btn">Sign Up</Link>
        <Link to="/login" className="cta-btn login-btn">Login</Link>
        <Link to="/match" className="cta-btn match-btn">Let’s Get Match!</Link>
      </div>
    </div>
  );
}

export default Home;
