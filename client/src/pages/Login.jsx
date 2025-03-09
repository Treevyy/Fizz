import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
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

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    // TODO: Add authentication API call here
    console.log('Logging in with:', email, password);
  };

  return (
    <>
    <div className = 'login-container'>
    <img src= {logo} alt="Fizz Logo" className="logo-small" />
    <div className="login-container">
      <h1>Welcome Back, Fizzter!</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        {error && <p className="error">{error}</p>}
        <button className = "submit" type="submit" style ={styles.button}>Lets Get Fizzing!</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Join the Fizz!</Link>
      </p>
    </div>
    </div>
    </>
  );
}

export default Login;
