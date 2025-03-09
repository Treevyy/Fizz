import { Sequelize, Model, DataTypes, Optional, ModelStatic } from 'sequelize';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  location: string;
  photo?: string;
}

// When creating a new user, id is optional because it is auto-generated.
interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'photo'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public age!: number;
  public gender!: string;
  public location!: string;
  public photo?: string;

  // If you need timestamps, you can uncomment these:
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;
}

const userModel = (sequelize: Sequelize): ModelStatic<User> => {
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
      tableName: 'users',
      timestamps: false, // Change to true if you want Sequelize to manage createdAt/updatedAt
    }
  );

  return User;
};

export default userModel;
