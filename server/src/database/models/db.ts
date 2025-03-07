import { Sequelize } from 'sequelize';
import userModel from './userModel';

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const User = userModel(sequelize);

const db = {
  sequelize,
  User,
};

export default db;