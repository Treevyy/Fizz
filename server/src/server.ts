import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import questionnaireRoutes from '../src/routes/api/questionnaireRoutes';
import matchesRoutes from './routes/matchesRoutes';
import db from '../../database/models/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/questionnaires', questionnaireRoutes);
app.use('/api/matches', matchesRoutes);

if (db.sequelize) {
  db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });
} else {
  console.error('Sequalize was undefined');
}