import { Sequelize, Model, ModelStatic } from 'sequelize';
import dotenv from 'dotenv';
import  userModel  from './userModel';

dotenv.config();

//const path = require('path');
//const fs = require('fs');
const env = process.env.NODE_ENV || 'development';

interface DbInterface {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  User: ModelStatic<Model<any, any>>;
}

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const db: DbInterface = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  User: userModel(sequelize)
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = userModel(sequelize);

export default db;