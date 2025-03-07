// filepath: /c:/Users/mrsch/Fizz/models/profile.js
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return Profile;
};