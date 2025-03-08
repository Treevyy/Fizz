import express from 'express';
import dotenv from 'dotenv';
import router from './routes/api/userRoutes.js';
import authRoutes from './routes/api/authRoutes.js';
import surveyRoutes from './routes/api/surveyRoutes';
import db from './database/models/db.js';

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an express application
const PORT = process.env.PORT || 3000; // Set the port from environment variables or default to 5000

app.use(express.json());
app.use('/api/users', router); 
app.use('/api/auth', authRoutes); 
app.use('/api/survey', surveyRoutes); // Add this line to use the survey routes

if (db.sequelize) {
  db.sequelize.sync().then(() => { 
    app.listen(PORT, () => { 
      console.log(`Server is running on port ${PORT}`); 
    });
  }).catch((err: Error) => { 
    console.error('Unable to connect to the database:', err); 
  });
} else {
  console.error('Sequelize instance is undefined');
}