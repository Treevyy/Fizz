import React, { useState } from 'react';
import '../styles/Match.css';

function Match() {
  // Dummy data for potential matches
  const initialMatches = [
    { id: 1, name: 'Bob', age: 28, avatarUrl: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Carol', age: 26, avatarUrl: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Dave', age: 30, avatarUrl: 'https://via.placeholder.com/100' },
  ];

  const [matches] = useState(initialMatches);

  return (
    <div className="match-container">
      <h1>Potential Matches</h1>
      <div className="match-list">
        {matches.map((match) => (
          <div key={match.id} className="match-card">
            <img 
              src={match.avatarUrl} 
              alt={`${match.name}'s avatar`} 
              className="match-avatar" 
            />
            <div className="match-info">
              <h2>{match.name}</h2>
              <p>Age: {match.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Match;
