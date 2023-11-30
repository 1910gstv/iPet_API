'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Login_Lojistas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Login_Lojistas.belongsTo(models.Lojistas, {
        foreignKey: 'login_lojistas_id'
      })    
    }
  }
  Login_Lojistas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    cpf: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Login_Lojistas',
  });
  return Login_Lojistas;
};