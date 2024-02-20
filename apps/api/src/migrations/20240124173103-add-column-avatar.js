'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'avatar', {
      type: Sequelize.STRING, // Adjust the data type based on your avatar storage requirements
      allowNull: true, // Modify as per your requirements
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'avatar');
  },
};
