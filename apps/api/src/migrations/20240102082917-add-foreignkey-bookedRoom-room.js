'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE bookedRooms
      ADD CONSTRAINT fk_room_bookedRooms
      FOREIGN KEY (room_id)
      REFERENCES rooms(room_id)
      ON UPDATE CASCADE
      ON DELETE CASCADE;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE bookedRooms
      DROP CONSTRAINT IF EXISTS fk_room_bookedRooms;
    `);
  },
};
