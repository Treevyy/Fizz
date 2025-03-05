import jwt from 'jsonwebtoken'; // Import jsonwebtoken for verifying JWT tokens
import db from '../models'; // Import the database models
import { Request, Response, NextFunction } from 'express'; // Import Request, Response, and NextFunction types from express

// Define an interface for authenticated requests, extending the Request interface
interface AuthenticatedRequest extends Request {
  user?: typeof db.User; // Add an optional user property of type db.User
}

// Define the authentication middleware function
const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract the token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' }); // If no token, return a 401 status with a message
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }; // Verify the token and decode the payload
    req.user = await db.User.findByPk(decoded.id); // Find the user by primary key using the decoded id
    if (!req.user) {
      return res.status(401).json({ message: 'User not found' }); // If user is not found, return a 401 status with a message
    }
    next(); // Call the next middleware function
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' }); // If token is not valid, return a 401 status with a message
  }
};

export default authMiddleware; // Export the authentication middleware function as the default export