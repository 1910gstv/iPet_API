'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.hasOne(models.Logins, {
        foreignKey: 'login_id'
      })
      Usuarios.belongsTo(models.Pets, {
        foreignKey: 'usuario_id'
      })    
    }
  }
  Usuarios.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};