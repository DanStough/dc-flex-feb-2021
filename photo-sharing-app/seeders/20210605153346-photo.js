'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Something I helped put in space',
      url: 'https://solarsystem.nasa.gov/system/resources/detail_files/17761_cassinihuygens_BTN_16_purple_final_01.jpg',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
