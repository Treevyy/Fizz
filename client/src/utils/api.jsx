// src/utils/api.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SurveyComponent from "../pages/Survey"; // Correct import path
import MatchResults from "../pages/Match"; // Correct import path

export const fetchData = async (endpoint, options = {}) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  export const fetchMatches = async (token, surveyData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/matches`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(surveyData),
      });
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
  
      const data = await response.json();
      return data.matches; // Ensure backend response matches expectation
    } catch (error) {
      console.error("Error fetching matches:", error);
      return [];
    }
  };
  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SurveyComponent />} />
          <Route path="/match" element={<MatchResults />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
