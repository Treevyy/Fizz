const { FOREIGNKEYS } = require("sequelize/lib/query-types");

// filepath: /c:/Users/mrsch/Fizz/models/user.js
module.exports = (sequelize, DataTypes) => {
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
// defines the associations 
  User.associate = (models) => {
    User.hasOne(models.profile,{
      foriegnKey: 'userName',
      as: 'profile',
    });
};
 return User;
};

