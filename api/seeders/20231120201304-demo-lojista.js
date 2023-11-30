'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lojistas', [{
      nome: 'Jessica Alves',
      cpf: 78945612378,
      lojas_id: 1,
      logins_lojistas_id: 1
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lojistas', null, {});
  }
};
