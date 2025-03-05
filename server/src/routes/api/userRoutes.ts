import express from 'express'; // Import express for creating the router
import { User } from '../models'; // Import the User model

const router = express.Router(); // Create a new router

router.get('/', async (req, res) => { // Define a GET route for fetching all users
  try {
    const users = await User.findAll(); // Fetch all users from the database
    res.json(users); // Return the users as a JSON response
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Handle any errors with a 500 status and return the error message
  }
});

export default router; // Export the router as the default export