'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('peakSeasons', {
    peak_season_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    room_id: {
      type: Sequelize.INTEGER,
    },
    discount_percentage: {
      type: Sequelize.FLOAT,
    },
    discount_nominal: {
      type: Sequelize.FLOAT,
    },
    start_date: {
      type: Sequelize.DATE,
    },
    end_date: {
      type: Sequelize.DATE,
    },
    price: {
      type: Sequelize.FLOAT,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('peakSeasons');
}
