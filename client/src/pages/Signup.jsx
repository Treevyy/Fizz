import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';
import logo from '../assets/FIZZ_logo_small.png' // Update path/name if needed


const styles = {
  button: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '15px', // Adjusted to make the button more rounded
    backgroundColor: '#ff1a66',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
  }
}

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    // TODO: Add API call to register the user
    console.log('Signup data:', { name, email, password, profilePic });
  };

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  return (
    <div className="signup-container">
   <img src= {logo} alt="Fizz Logo" className="logo-small" />

      <h1>Join the Fizz Fun!</h1>
      <form onSubmit={handleSignup} className="signup-form">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input 
          type="password" 
          id="confirmPassword" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
        <label htmlFor="profilePic">Profile Picture:</label>
        <input 
          type="file" 
          id="profilePic" 
          onChange={handleFileChange} 
          accept="image/*" 
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" style ={styles.button}>Start My Fizz Adventure! </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Continue Fizzing</Link>
      </p>
    </div>
  );
}

export default Signup;
