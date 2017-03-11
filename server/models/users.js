'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};
