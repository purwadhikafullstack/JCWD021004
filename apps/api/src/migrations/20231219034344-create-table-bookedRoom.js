'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('bookedRooms', {
    booked_room_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    room_id: {
      type: Sequelize.INTEGER,
    },
    start_date: {
      type: Sequelize.DATE,
    },
    end_date: {
      type: Sequelize.DATE,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    is_complete: {
      type: Sequelize.BOOLEAN,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('bookedRooms');
}
