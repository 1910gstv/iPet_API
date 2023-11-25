'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Logins.belongsTo(models.Lojistas, {
        foreignKey: 'logins_id'
      })
      Logins.belongsTo(models.Usuarios, {
        foreignKey: 'logins_id'
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