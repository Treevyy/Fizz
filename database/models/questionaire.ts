import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

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

interface QuestionnaireAttributes {
  id?: number;
  title: string;
  description?: string;
  questions: any;
}

const Questionnaire = sequelize.define('Questionnaire', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    questions: {
      type: DataTypes.JSON, 
      allowNull: false,
    },
  },{
    tableName: 'questionnaires',
});

export default Questionnaire;
export type { QuestionnaireAttributes };