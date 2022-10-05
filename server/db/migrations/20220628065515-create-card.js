module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      attack: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      health: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mana: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      info: {
        type: Sequelize.TEXT,
      },
      imageString: {
        type: Sequelize.TEXT,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      rarity: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cards');
  },
};
