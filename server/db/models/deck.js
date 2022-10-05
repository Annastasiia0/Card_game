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
    static associate({ User,Card,card_deck }) {
      // Many to many deck -> card
      Deck.hasMany(card_deck, {foreignKey:'deck_id'},{ onDelete: 'CASCADE' })
      Deck.belongsToMany(Card,{through:card_deck, foreignKey:'deck_id',otherKey:'card_id'})
      Deck.belongsTo(User,{foreignKey:'user_id'})
      // define association here
    }
  }
  Deck.init({
    name: DataTypes.TEXT,
    active: DataTypes.BOOLEAN,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },

  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};
