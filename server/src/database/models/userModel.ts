import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from './database.js';

class User extends Model {}
  // If you need timestamps, you can uncomment these:
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

      User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
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
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
      }
    );
  
export default User;
