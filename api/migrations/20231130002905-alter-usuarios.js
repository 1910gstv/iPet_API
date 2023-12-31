'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'login_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Logins', key: 'id'}
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'login_id');
  }
};
