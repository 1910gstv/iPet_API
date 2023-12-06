'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedidos.hasMany(models.Lojas, {
        foreignKey: 'loja_id'
      })
      Pedidos.hasMany(models.Usuarios, {
        foreignKey: 'usuario_id'
      })
      Pedidos.hasMany(models.Pets, {
        foreignKey: 'pet_id'
      })
    }
  }
  Pedidos.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};