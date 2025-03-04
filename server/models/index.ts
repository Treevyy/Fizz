import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import userModel from './user';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const db: any = {};

// Initialize models
db.User = userModel(sequelize);

// Sync models with the database
sequelize.sync();

export default db;