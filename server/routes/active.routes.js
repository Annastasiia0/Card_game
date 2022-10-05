const activeRouter = require('express').Router();
const { Op } = require('sequelize');
const { Deck } = require('../db/models');

activeRouter.put('/', async (req, res) => {
  const { status, id } = req.body;

  const otherDeck = await Deck.findAll({
    where: {
      id: {
        [Op.ne]: id,
      },
    },
  });

  otherDeck.forEach(async (el) => {
    el.active = false;
    await el.save();
  });

  const deck = await Deck.findOne({
    where: id,
  });

  deck.active = status;
  await deck.save();
 
  const newDeck = {
    id: deck.id,
    active: deck.active,
  };
  res.json(newDeck);
});

module.exports = activeRouter;
