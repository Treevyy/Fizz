import { Sequelize, Model, ModelCtor } from 'sequelize';
import dotenv from 'dotenv';
import { userModel } from './userModel';

dotenv.config();

const path = require('path');
const fs = require('fs');

//const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

interface DbInterface {
  Sequelize?: typeof Sequelize;
  sequelize?: Sequelize;
  User?: ModelCtor<Model<any, any>>;
}

const db: DbInterface = {};

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = userModel(sequelize);
export default db;