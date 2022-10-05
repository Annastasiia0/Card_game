const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Deck, Pack,
    }) {
      Card.belongsTo(Deck, { foreignKey: 'card_id' });
      // Card.belongsToMany(User, { through: Deck, foreignKey: 'deck_id', otherKey: 'user_id' });
      // Card.hasMany(Ability, { foreignKey: 'ability_id' });
      Card.belongsTo(Pack, { foreignKey: 'card_id' });
    }
  }
  Card.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo_url: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    damage: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    health: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    manaCost: {
      type: DataTypes.BIGINT,
    },
    ability_id: {
      type: DataTypes.TEXT,
      // references: {
      //   model: 'Abilities',
      //   key: 'id',
      // },
    },
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
