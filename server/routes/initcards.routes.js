const initcards = require('express').Router();
const { Card } = require('../db/models');

// Получение колод пользователя
initcards.get('/', async (req, res) => {
    try {
        const card = await Card.findAll({order:[['mana','asc']]})
        res.json(card);
    } catch (error) {
        res.json({
            message: 'Карты не найдены',
            error,
        });
    }
});

module.exports = initcards;
