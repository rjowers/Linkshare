'use strict';
module.exports = function(sequelize, DataTypes) {
  var links = sequelize.define('links', {
    title: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return links;
};
