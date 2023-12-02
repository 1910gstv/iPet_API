'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logins extends Model {
    static associate(models) {
      Logins.belongsTo(models.Usuarios, {
        foreignKey: 'login_id'
      })    
    }
  }
  Logins.init({
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Logins',
  });
  return Logins;
};