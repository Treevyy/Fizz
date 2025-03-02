// src/utils/api.js

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
  