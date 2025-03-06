import { Sequelize, Model,} from 'sequelize';
import dotenv from 'dotenv';
import  User  from './userModel';
import Matches from './matches';
import Questionnaire from './questionaire';

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
Questionnaire.initialize(sequelize);
Matches.initialize(sequelize);

const db = {
  sequelize,
  Sequelize,
  User,
  Matches,
  Questionnaire,
};

export default db;