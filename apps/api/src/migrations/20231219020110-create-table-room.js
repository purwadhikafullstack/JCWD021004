'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('rooms', {
    room_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    property_id: {
      type: Sequelize.INTEGER,
    },
    room_type: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    is_available: {
      type: Sequelize.BOOLEAN,
    },
    price: {
      type: Sequelize.FLOAT,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('rooms');
}
