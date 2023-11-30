'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.hasOne(models.Usuarios, {
        foreignKey: 'usuario_id'
      })
      Pets.belongsTo(models.Pedidos, {
        foreignKey: 'pet_id'
      })
    }
  }
  Pets.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};