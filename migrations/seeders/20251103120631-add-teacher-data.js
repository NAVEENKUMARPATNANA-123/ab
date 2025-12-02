'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Teachers', [
      {
        name: 'John',
        age: 30,
        salary: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mary',
        age: 28,
        salary: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Steve',
        age: 35,
        salary: 55000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
