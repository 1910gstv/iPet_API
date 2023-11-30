'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('lojistas', 'lojas_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Lojas', key: 'id'}
    });
    await queryInterface.addColumn('lojistas', 'logins_lojistas_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'Login_Lojistas', key: 'id'}
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('lojistas', 'lojas_id');
    await queryInterface.removeColumn('lojistas', 'logins_lojistas_id');
  }
};
