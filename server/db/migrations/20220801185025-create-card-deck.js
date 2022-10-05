'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('card_decks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      card_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cards',
          key: 'id'
        },
      },
      deck_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Decks',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('card_decks');
  }
};
