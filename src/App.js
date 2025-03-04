// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Match from './pages/Match';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </Router>
  );
}

export default App;
