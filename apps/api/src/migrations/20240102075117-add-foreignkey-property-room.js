'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE rooms
      ADD CONSTRAINT fk_room_property
      FOREIGN KEY (property_id)
      REFERENCES properties(property_id)
      ON UPDATE CASCADE
      ON DELETE CASCADE;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE rooms
      DROP CONSTRAINT IF EXISTS fk_room_property;
    `);
  },
};
