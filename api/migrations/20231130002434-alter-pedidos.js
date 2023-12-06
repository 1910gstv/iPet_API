'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.changeColumn('pedidos', 'createdAt', {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn('now')
  });
  await queryInterface.changeColumn('pedidos', 'updatedAt', {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn('now')
  });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('pedidos', 'createdAt');
     await queryInterface.removeColumn('pedidos', 'updatedAt');
  }
};
