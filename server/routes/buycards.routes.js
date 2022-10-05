const buyCards = require('express').Router();
const { User, bonus_card,Sequelize } = require('../db/models');

// Получение колод пользователя
buyCards.get('/new', async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.session.user.id } });
    if (user.coins >= 100) {
      const buycard = await bonus_card.findAll({ order: [ [ Sequelize.fn('RANDOM') ] ], limit: 5,raw:true });
      console.log(buycard)
      res.json(buycard);
    } else {
      res.status(500);
    }
  } catch (error) {
    console.log(error)
    res.json({
      message: 'Произошла ошибка',
      error,
    });
  }
});
buyCards.get('/', async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.session.user.id } });
    if (user.coins >= 100) {
      const result = await User.decrement('coins', {
        by: 100,
        where: {
          id: req.session.user.id,
        },
      });
      const buycard = await bonus_card.findAll({ order: [ [ Sequelize.fn('RANDOM') ] ], limit: 5,raw:true });
      console.log(buycard)
      res.json(buycard);
    } else {
      res.status(500);
    }
  } catch (error) {
    console.log(error)
    res.json({
      message: 'Произошла ошибка',
      error,
    });
  }
});

module.exports = buyCards;
