'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lojistas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lojistas.hasOne(models.Lojas, {
        foreignKey: 'lojas_id'
      })
      Lojistas.hasOne(models.Login_Lojistas, {
        foreignKey: 'logins_lojistas_id'
      })
    }
  }
  Lojistas.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Lojistas',
  });
  return Lojistas;
};