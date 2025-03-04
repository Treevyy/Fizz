// src/components/ProfileCard.js
import React, { useState } from 'react';

function ProfileCard({
  initialName = 'Name',
  initialAge = 25,
  zodiac = 'Gemini',
  interests = 'Hiking, Music, Travel',
  avatarUrl = 'https://via.placeholder.com/100'
}) {
  const [name] = useState(initialName);
  const [age] = useState(initialAge);

  return (
    <div className="profile-preview">
      <div className="profile-avatar">
        <img src={avatarUrl} alt="User Avatar" className="avatar-image" />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-age">Age: {age}</p>
        <p className="profile-zodiac">Zodiac Sign: {zodiac}</p>
        <p className="profile-interests">Interests: {interests}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
