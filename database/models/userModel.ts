import { Sequelize, Model, DataTypes,ModelStatic } from 'sequelize';

const userModel = (sequelize: Sequelize): ModelStatic<Model<any, any>> => {
  return sequelize.define('User', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {  
    tableName: 'usersData',  
});
};
export default userModel ;