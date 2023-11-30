'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lojas', [{
      nome: 'Nome Fantasia',
      cnpj: 478212222,
      endereco: 'Rua dos Principes',
      telefone: 78944561
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lojas', null, {});

  }
};
