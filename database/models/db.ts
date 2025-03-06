import { Sequelize, Model,} from 'sequelize';
import dotenv from 'dotenv';
import  User  from './userModel';

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

User.initialize(sequelize);

const db = {
  sequelize,
  Sequelize,
  User,
};

export default db;