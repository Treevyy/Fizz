import express, { Request, Response } from 'express'; // Import express and types for Request and Response
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for creating JWT tokens
import db from '../../database/models/db';
import dotenv from 'dotenv'; // Import dotenv for loading environment variables

dotenv.config(); // Load environment variables from .env file

const router = express.Router(); // Create a new router
const { User } = db; // Destructure the User model so it's available in all routes

// POST /register - User registration endpoint
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { name, email, password, age, gender, location, photo } = req.body; // Extract user details from the request body
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with bcrypt
    const user = await User.create({ 
      username: name, 
      email, 
      password: hashedPassword, 
      age, 
      gender, 
      location, 
      photo 
    }); // Create a new user
    res.json({ success: true, user }); // Return the created user with a success message
  } catch (error) {
    res.status(400).json({ error: (error as Error).message }); // Handle any errors with a 400 status and return the error message
  }
});

// POST /login - User login endpoint
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body; // Extract email and password from the request body
    const user = await User.findOne({ where: { email } }); // Find a user with the given email
    if (!user || !(await bcrypt.compare(password, user.password))) { // Check if user exists and if the password matches
      return res.status(401).json({ error: 'Invalid credentials' }); // If credentials are invalid, return a 401 status with an error message
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1d' }); // Generate a JWT token for the user
    res.json({ success: true, token }); // Return the token with a success message
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Handle any errors with a 500 status and return the error message
  }
});

export default router; // Export the router as the default export