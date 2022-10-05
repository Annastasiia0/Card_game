const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Deck, Shop }) {
      User.hasMany(Deck, { foreignKey: 'user_id' });
      // User.belongsToMany(Card, {  foreignKey: 'user_id' });
      User.hasOne(Shop, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'photo',
    },
    coins: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
