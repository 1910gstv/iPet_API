'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('pets', 'usuario_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Usuarios', key: 'id'}
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('pets', 'usuario_id');
  }
};
