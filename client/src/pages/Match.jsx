import React, { useState } from 'react';
import '../styles/Match.css';
import logo from '../assets/FIZZ_logo_small.png' // Update path/name if needed

/* ✅ FIXED IMAGE IMPORTS */
import avatar1 from '../assets/joseph.png';
import avatar2 from '../assets/deets.png';
import avatar3 from '../assets/ernesto.png';
import avatar4 from '../assets/fredo.png';

function Match() {
  // ✅ FIXED USER PROFILE (Use imported avatar)
  const userProfile = {
    name: "Joseph",
    age: 24,
    sign: "Virgo",
    job: "Stay At Home Dad",
    location: "USA",
    interests: ["Hunting", "Beer", "Football"],
    personality: ["fun", "good listener"],
    avatarUrl: avatar1,  // ✅ Now it correctly references an image
  };

  // ✅ FIXED MATCH DATA
  const initialMatches = [
    { id: 1, name: 'Deets', age: 24, sign: "Virgo", job: "123 Up Yours Accountant", avatarUrl: avatar2 },
    { id: 2, name: 'Ernesto', age: 27, sign: "Libra", job: "Airman Meow", avatarUrl: avatar3 },
    { id: 3, name: 'Fredo', age: 29, sign: "Pisces", job: "Cashier at Cheese and Wine Traders", avatarUrl: avatar4 },
  ];

  const [matches] = useState(initialMatches);

  return (
    <div className="match-container">
      {/* ✅ FIZZ LOGO */}
      <img src={logo} alt="Fizz Logo" className="fizz-logo" />

      {/* ✅ PROFILE CARD */}
      <div className="profile-card">
        <img src={userProfile.avatarUrl} alt="User Avatar" className="profile-avatar" />
        <h2>{userProfile.name}</h2>
        <p>{userProfile.job}</p>
        <p>Age: {userProfile.age}  |  Sign: {userProfile.sign}</p>

        <div className="profile-details">
          <p><strong>Location:</strong> {userProfile.location}</p>
          <p><strong>Interests:</strong> {userProfile.interests.join(", ")}</p>
          <p><strong>Personality:</strong> {userProfile.personality.join(", ")}</p>
        </div>
      </div>

      {/* ✅ MATCH LIST */}
      <div className="match-list-container">
        <h1 className="match-title">The FIZZ Has Spoken: Meet Your Matches!</h1>
        <div className="match-list">
          {matches.map((match) => (
            <div key={match.id} className="match-card">
              <img 
                src={match.avatarUrl}  // ✅ Now correctly using imported images
                alt={`${match.name}'s avatar`} 
                className="match-avatar" 
              />
              <div className="match-info">
                <h2>Hi, I’m {match.name}</h2>
                <p>{match.job}</p>
                <p>Age: {match.age}  |  Sign: {match.sign}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Match;
