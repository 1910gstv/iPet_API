'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lojistas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.INTEGER
      },lojas_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Lojas', key: 'id'}
      },
      logins_lojistas_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Login_Lojistas', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lojistas');
  }
};