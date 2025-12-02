'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
      {
        name: 'Rahul',
        age: 20,
        grade: 85,
        status: 'pass',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Priya',
        age: 19,
        grade: 92,
        status: 'pass',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amit',
        age: 22,
        grade: 72,
        status: 'fail',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
