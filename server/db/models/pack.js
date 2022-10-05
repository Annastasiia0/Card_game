const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card, Shop }) {
      // define association here
      Pack.belongsTo(Shop, { foreignKey: 'pack_id' });
    }
  }
  Pack.init({
    card_id: {
      type: DataTypes.INTEGER,
      references: {
        model:'Cards',
        key:'id',
      }
    },
    cost: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Pack',
  });
  return Pack;
};
