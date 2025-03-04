












import { Model, DataTypes } from 'sequelize';
import { sequelize } from './database'; // Adjust the path as necessary

class User extends Model {
  public name!: string;
  public email!: string;
  public password!: string;
  public age!: number;
  public gender!: string;
  public location!: string;
  public photo!: string;
}

User.init(
  {
    
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
    sequelize,
    tableName: 'usersData',
  }
);

export { User };
import { Sequelize, DataTypes } from 'sequelize';

const userModel = (sequelize: Sequelize, DataTypes: any) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
  });

  return User;
};

export default userModel;