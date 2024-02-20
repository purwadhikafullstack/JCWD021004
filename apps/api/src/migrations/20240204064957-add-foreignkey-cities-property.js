'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE properties
      ADD CONSTRAINT fk_properties_city
      FOREIGN KEY (city_id)
      REFERENCES cities(city_id)
      ON UPDATE CASCADE
      ON DELETE CASCADE;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE properties
      DROP CONSTRAINT IF EXISTS fk_properties_city;
    `);
  },
};
