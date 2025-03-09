import { Sequelize, Model, ModelStatic } from 'sequelize';
import  userModel  from './userModel';

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

const User = userModel(sequelize);

const db = {
  sequelize,
  User,
};

export default db;