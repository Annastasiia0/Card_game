const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class bonus_card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
                       Deck, User, bonus_card_deck
                     }) {
      bonus_card.belongsToMany(User, { through: 'user_card_join_table' });
      bonus_card.belongsToMany(Deck,{through:bonus_card_deck, foreignKey:'bonus_card_id', otherKey:'deck_id'})
    }
  }
  bonus_card.init({
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mana: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    info: {
      type: DataTypes.TEXT,
    },
    imageString: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rarity: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'bonus_card',
  });
  return bonus_card;
};
