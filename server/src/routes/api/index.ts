import express from 'express'; // Import express for creating the router
const router = express.Router(); // Create a new router

router.get('/', (req, res) => { // Define a GET route for the root path
  res.json({ message: 'Welcome to the API' }); // Return a JSON response with a welcome message
});

export default router; // Export the router as the default export