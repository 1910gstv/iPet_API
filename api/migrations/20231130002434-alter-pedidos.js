'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.addColumn('pedidos', 'loja_id', {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: 'Lojas', key: 'id'}
  });
  await queryInterface.addColumn('pedidos', 'usuario_id', {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: 'Usuarios', key: 'id'}
  });
  await queryInterface.addColumn('pedidos', 'pet_id', {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: 'Pets', key: 'id'}
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('pedidos', 'loja_id');
    await queryInterface.removeColumn('pedidos', 'usuario_id');
    await queryInterface.removeColumn('pedidos', 'pet_id');
  }
};
