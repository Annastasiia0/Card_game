const deckRouter = require('express').Router();
const { Deck } = require('../db/models');

// Получение колод пользователя
deckRouter.get('/mydeck', async (req, res) => {
  try {
    const { id } = req.session.user;
    console.log("🚀 ~ file: deck.routes.js ~ line 8 ~ deckRouter.get ~ id", id)
    const userdeck = await Deck.findAll({
      raw: true,
      where: {
        user_id: id,
      },
    });
    res.json(userdeck);
  } catch (error) {
    console.log(error.message);
    res.json({
      message: 'Произошла ошибка получения колод пользователя',
      error,
    });
  }
});

deckRouter.post('/create', async (req, res) => {
  try {
    const { name, id } = req.body;
    console.log(req.body)
    const createdDeck = await Deck.create({
      name,
      user_id: id,
    });
    res.json(createdDeck);
  } catch (error) {
    console.log(error);
    res.json({ message: 'Произошла ошибка создания деки' });
  }
});

module.exports = deckRouter;
