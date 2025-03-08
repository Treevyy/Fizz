import { Sequelize, } from 'sequelize';
import  User  from './userModel';
import express from 'express';
import connectDB  from '../../database/connections';

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);
const app = express();const PORT = process.env.PORT || 3000;
connectDB();

app.get('/', (req, res) => {  res.send('Hello, world!');});
app.listen(PORT, () => {  console.log(`Server is running on http://localhost:${PORT}`);});

const db = {
  Sequelize,
  sequelize,
 User,
  };

export default db;
