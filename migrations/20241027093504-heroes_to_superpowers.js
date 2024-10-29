'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('heroes_to_superpowers', { 
      heroId: {
        type:Sequelize.INTEGER,
        allowNull: true,
        field: "hero_id",
        references: {
          model: "heroes",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      powerId:{
        type:Sequelize.INTEGER,
        allowNull: true,
        field: "power_id",
        references: {
          model: "super_powers",
          key: "id"
        }
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE
      }
     });
     await queryInterface.addConstraint("heroes_to_superpowers", {
      fields:["hero_id","power_id"],
      type:"unique",
      name: "heroes_to_powers_unique"
     })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('heroes_to_superpowers');
  }
};
