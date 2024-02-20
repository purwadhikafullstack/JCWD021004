'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('propertyCategories', {
    category_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    category_name: {
      type: Sequelize.STRING,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('propertyCategories');
}
