import express from 'express';
import dotenv from 'dotenv';
import router from './routes/api/userRoutes.js';
import authRoutes from './routes/api/authRoutes.js';
import surveyRoutes from './routes/api/surveyRoutes.js';
import sequelize from './database/models/database.js';

dotenv.config();
const app = express(); 
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/users', router); 
app.use('/api/auth', authRoutes); 
app.use('/api/survey', surveyRoutes); 


  sequelize.sync().then(() => { 
    app.listen(PORT, () => { 
      console.log(`Server is running on port ${PORT}`); 
    });
  }).catch((err: Error) => { 
    console.error('Unable to connect to the database:', err); 
  });
 