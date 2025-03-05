import { Sequelize, Model, ModelStatic } from 'sequelize';
import dotenv from 'dotenv';
 
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
});

const Matches = sequelize.define('Matches', {
});


export default  Matches;  