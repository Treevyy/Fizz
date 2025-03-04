import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from './database'; 

const Questionnaire = sequelize.define ('Questionnaire', {
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

export { Questionnaire };