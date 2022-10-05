const activeRouter = require('express').Router();
// const { Op } = require('sequelize');
const { Deck } = require('../db/models');

activeRouter.put('/', async (req, res) => {
  const { active, id } = req.body;
  const deck = await Deck.findOne({
    where: id,
  });
  deck.active = active;
  await deck.save();
  const newDeck = {
    id: deck.id,
    active: deck.active,
  };
  res.json(newDeck);
});

module.exports = activeRouter;
