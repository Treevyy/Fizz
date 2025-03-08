import { Sequelize } from 'sequelize';
import express from 'express';
import { connectDB } from '../../database/connections.js';
import User from './userModel.js';

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);
const app = express();
const PORT = process.env.PORT || 4002;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, Friend!');
});
app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); });

// Example endpoint to create a user
app.post('/users', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});
// Example endpoint to get all users

app.get('/users', async (req, res) => { 
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); 
});

const db = {
  Sequelize,
  sequelize,
  User,
};

export default db;
