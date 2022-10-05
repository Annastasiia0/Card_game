const collections = require('express').Router();
const { card_deck } = require('../db/models');

// Получение колод пользователя
collections.get('/', async (req, res) => {
    try {
        const card = await card_deck.findAll({raw:true})
        console.log(card)
        res.json(card);
    } catch (error) {
        res.json({
            message: 'Карты не найдены',
            error,
        });
    }
});

module.exports = collections;
