import { Sequelize, Model, ModelStatic } from 'sequelize';
import  User  from './userModel';

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const db = {
  Sequelize,
  sequelize,
 User,
  };

export default db;