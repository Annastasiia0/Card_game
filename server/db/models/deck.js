const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserDeck, Card }) {
      Deck.belongsTo(UserDeck, { foreignKey: 'deck_id' });
      Deck.hasMany(Card, { foreignKey: 'card_id' });
    }
  }
  Deck.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    active: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    card_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cards',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};
