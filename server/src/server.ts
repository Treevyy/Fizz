import express from 'express'; // Import express for creating the server
import dotenv from 'dotenv'; // Import dotenv for loading environment variables
import userRoutes from './routes/userRoutes.js'; // Import user routes
import authRoutes from './routes/authRoutes.js'; // Import auth routes
import db from './models'; // Import the database models

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an express application
const PORT = process.env.PORT || 5000; // Set the port from environment variables or default to 5000

app.use(express.json()); // Use express.json middleware to parse JSON requests

app.use('/api/users', userRoutes); // Use the user routes for the '/api/users' path
app.use('/api/auth', authRoutes); // Use the auth routes for the '/api/auth' path

db.sequelize.sync().then(() => { // Sync the database models
  app.listen(PORT, () => { // Start the server and listen on the specified port
    console.log(`Server is running on port ${PORT}`); // Log that the server is running
  });
}).catch((err: Error) => { // Handle any errors during database connection
  console.error('Unable to connect to the database:', err); // Log the error
});