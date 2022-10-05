const mainRouter = require('express').Router();
const { User } = require('../db/models');

// Получение колод пользователя
mainRouter.get('/', async (req, res) => {
    try {
        const user = await User.findOne({where:{id:req.session.user.id}})
        res.json(user);
    } catch (error) {
        res.json({
            message: 'Пользователь не найден',
            error,
        });
    }
});

mainRouter.get('/add/money', async (req, res) => {
    try {
        // const neededUser = await User.findOne({where:{id:req.session.user.id},raw:true})
       await User.increment('coins',{by:10, where: {id:req.session.user.id}});
        // console.log(result)
        // await User.update({
        //     coins: coins + 10,
        // }, {where: {
        //         id:req.session.user.id,
        //     }})
        // User.save()
    } catch (error) {
        res.json({
            message: 'Пользователь не найден',
            error,
        });
    }
});

module.exports = mainRouter;
