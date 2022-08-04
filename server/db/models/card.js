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
      Deck, User, Pack, card_deck
    }) {
      Card.belongsToMany(User, { through: 'user_card_join_table' });
      // Card.belongsTo(Pack, { foreignKey: 'pack_id' });
      Card.belongsToMany(Deck,{through:card_deck, foreignKey:'card_id', otherKey:'deck_id'})
    }
  }
  Card.init({
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
    // pack_id:{
    //   type:DataTypes.INTEGER,
    //   references:{
    //     model:'Packs',
    //     key:'id'
    //   },
    //   allowNull:true
    // }
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
