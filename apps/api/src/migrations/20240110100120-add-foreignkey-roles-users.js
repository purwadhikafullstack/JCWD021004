'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE users
      ADD CONSTRAINT fk_user_role
      FOREIGN KEY (role_id)
      REFERENCES roles(id)
      ON UPDATE CASCADE
      ON DELETE CASCADE;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE users
      DROP CONSTRAINT IF EXISTS fk_user_role;
    `);
  },
};
