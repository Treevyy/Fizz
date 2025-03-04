import { Sequelize, DataTypes } from 'sequelize'; // Import Sequelize and DataTypes from sequelize

const userModel = (sequelize: Sequelize) => { // Define a function to create the User model
  const User = sequelize.define('User', { // Define the User model
    username: {
      type: DataTypes.STRING, // Define the username field as a string
      allowNull: false, // The username field cannot be null
      unique: true, // The username field must be unique
    },
    email: {
      type: DataTypes.STRING, // Define the email field as a string
      allowNull: false, // The email field cannot be null
      unique: true, // The email field must be unique
    },
    password: {
      type: DataTypes.STRING, // Define the password field as a string
      allowNull: false, // The password field cannot be null
    },
  });

  return User; // Return the User model
};

export default userModel; // Export the userModel function as the default export