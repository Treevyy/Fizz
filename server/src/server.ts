import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/api/userRoutes';
import authRoutes from './routes/api/authRoutes';
import surveyRoutes from './routes/api/surveyRoutes'; // Import the survey routes
import db from './database/models/db';

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an express application
const PORT = process.env.PORT || 3000; // Set the port from environment variables or default to 5000

app.use(express.json()); // Use express.json middleware to parse JSON requests

app.use('/api/users', userRoutes); // Use the user routes for the '/api/users' path
app.use('/api/auth', authRoutes); // Use the auth routes for the '/api/auth' path
app.use('/api/survey', surveyRoutes); // Add this line to use the survey routes

if (db.sequelize) {
  db.sequelize.sync().then(() => { // Sync the database models
    app.listen(PORT, () => { // Start the server and listen on the specified port
      console.log(`Server is running on port ${PORT}`); // Log that the server is running
    });
  }).catch((err: Error) => { // Handle any errors during database connection
    console.error('Unable to connect to the database:', err); // Log the error
  });
} else {
  console.error('Sequelize instance is undefined');
}