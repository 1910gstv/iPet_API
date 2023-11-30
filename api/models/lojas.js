'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lojas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lojas.belongsTo(models.Lojistas, {
        foreignKey: 'lojas_id'
      })
      Lojas.belongsTo(models.Pedidos, {
        foreignKey: 'loja_id'
      })
    }
  }
  Lojas.init({
    nome: DataTypes.STRING,
    cnpj: DataTypes.NUMBER,
    endereco: DataTypes.STRING,
    telefone: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Lojas',
  });
  return Lojas;
};