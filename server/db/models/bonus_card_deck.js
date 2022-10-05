'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bonus_card_deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({bonus_card,Deck}) {
      bonus_card_deck.belongsTo(Deck, {foreignKey:'deck_id'})
      bonus_card_deck.belongsTo(bonus_card, {foreignKey:'bonus_card_id'})
    }
  }
  bonus_card_deck.init({
    bonus_card_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'bonus_cards',
        key: 'id'
      },
    },
    deck_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Decks',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'bonus_card_deck',
  });
  return bonus_card_deck;
};
