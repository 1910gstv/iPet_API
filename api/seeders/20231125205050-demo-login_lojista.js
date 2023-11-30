'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Login_Lojistas', [{
      nome: 'Jessica',
      ativo: true,
      cpf: 45698712385
    }], {});

 },

 async down (queryInterface, Sequelize) {

   await queryInterface.bulkDelete('Login_Lojistas', null, {});
    
 }
};
