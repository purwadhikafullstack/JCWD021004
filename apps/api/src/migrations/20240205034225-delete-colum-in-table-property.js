'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('properties', 'province_id');
    await queryInterface.removeColumn('properties', 'created_at');
    await queryInterface.removeColumn('properties', 'updated_at');
  },

  async down(queryInterface, Sequelize) {},
};
