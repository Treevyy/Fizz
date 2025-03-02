import React, { useState } from 'react';
import '../styles/Profile.css';

function Profile() {
  // In a real app, you'll fetch this data from an API
  const [name, setName] = useState('Alice');
  const [email, setEmail] = useState('alice@example.com');
  const [bio, setBio] = useState('Hello, I love hiking and music!');
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    // TODO: Save updated details via API call
    setEditing(false);
    console.log('Profile updated:', { name, email, bio });
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      {editing ? (
        <div className="profile-edit">
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </label>
          <label>
            Bio:
            <textarea 
              value={bio} 
              onChange={(e) => setBio(e.target.value)} 
            />
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="profile-details">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Bio:</strong> {bio}</p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
