import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { User } from './user'
dotenv.config();

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
//const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../config/config.json')[env];
const db = {};

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

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = userModel(sequelize, Sequelize);

export default db;