const cardsRouter = require('express').Router();
const { User, card_deck,Decks,Sequelize } = require('../db/models');

// Получение колод пользователя
cardsRouter.post('/mydeck/:deckid/builddeck', async (req, res) => {
    try {
        const {deckid} = req.params
        const {id} = req.body
        const myDeck = await card_deck.findAll()
        if (myDeck.length < 30) {
            const cardFinder = await card_deck.findOne({
                where: {
                    card_id: id,
                    deck_id: deckid,
                }
            })
            if (!cardFinder) {
                // const user = await User.findOne({ where: { id: req.session.user.id } });
                const userDeck = await card_deck.create({
                    card_id: id,
                    deck_id: deckid,
                })
                // console.log(userDeck)
                res.status(201).json({userDeck})
            }
        }
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Произошла ошибка',
            error,
        });
    }
});

cardsRouter.delete('/mydeck/:deckid/del/:id', async (req, res) => {
    try {
        // const user = await User.findOne({ where: { id: req.session.user.id } });
        const {deckid,id} = req.params
        // console.log(req.params)
        const userDeck = await card_deck.destroy({where:{
            card_id: +id,
            deck_id: +deckid,
        }})
        res.status(200)
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Произошла ошибка',
            error,
        });
    }
});

module.exports = cardsRouter;
