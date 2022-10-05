module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      photo_url: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      damage: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      health: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      manaCost: {
        type: Sequelize.INTEGER,
      },
      ability_id: {
        type: Sequelize.TEXT,
        // references: {
        //   model: 'Abilities',
        //   key: 'id',
        // },
      },
      pack_id: {
        type: Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'Packs',
          key:'id'
        },
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
