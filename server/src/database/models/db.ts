import { Sequelize, Model, ModelStatic } from 'sequelize';
import  userModel  from './userModel';

interface DbInterface {
  Sequelize?: typeof Sequelize;
  sequelize?: Sequelize;
  User?: ModelStatic<Model<any, any>>;
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
  Sequelize,
  sequelize,
  User: userModel(sequelize),
  };

export default db;