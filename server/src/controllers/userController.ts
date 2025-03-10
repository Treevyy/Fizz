import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken'; 
import User from '../database/models/userModel.js';
import { Request, Response } from 'express'; 

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
  };
}


// Function to register a new user
export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password, age, gender, location, photo } = req.body; // Extract user attributes from the request body

  try {
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' }); // If user exists, return a 400 status with a message
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with bcrypt

    const user = await User.create({
      username,
      email,
      password: hashedPassword, // Create a new user with the hashed password
      age,
      gender,
      location,
      photo,
    });

    const token = jwt.sign({ id: user.dataValues.id }, process.env.JWT_SECRET as string, {
      expiresIn: '180d', 
    });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' }); // Handle any errors with a 500 status
  }
};

// Function to log in an existing user
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body; // Extract email and password from the request body

  try {
    const user = await User.findOne({ where: { email } }); // Find a user with the given email

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' }); // If user is not found, return a 400 status with a message
    }

    const isMatch = await bcrypt.compare(password, user.dataValues.password); // Compare the provided password with the stored hashed password

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' }); // If passwords do not match, return a 400 status with a message
    }

    const token = jwt.sign({ id: user.dataValues.id }, process.env.JWT_SECRET as string, {
      expiresIn: '180d', // Generate a JWT token for the user
    });

    res.json({ token }); // Return the token
  } catch (error) {
    res.status(500).json({ message: 'Server error' }); // Handle any errors with a 500 status
  }
};

// Function to get the profile of the authenticated user
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] }, // Find the user by primary key and exclude the password from the result
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // If user is not found, return a 404 status with a message
    }

    res.json(user); // Return the user profile
  } catch (error) {
    res.status(500).json({ message: 'Server error' }); 
  }
};