'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE properties
      ADD CONSTRAINT fk_property_category
      FOREIGN KEY (category_id)
      REFERENCES propertyCategories(category_id)
      ON UPDATE CASCADE
      ON DELETE CASCADE;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE properties
      DROP CONSTRAINT IF EXISTS fk_property_category;
    `);
  },
};
