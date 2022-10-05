const user = require('express').Router();
const { User } = require('../db/models');
const fileMiddleWare = require('../middlewares/file')
const path = require('path')

// Получение колод пользователя
user.put('/:id/photo', fileMiddleWare.single('profilePhoto'),async(req,res) => {
    try {
        // const {id} = req.params.id
        if (req.file.path) {
            await User.update({
                photo: req.file.path
            }, {where: {
                id:req.params.id,
                }})
            const neededUser = await User.findOne({where:{id:req.params.id},raw:true})
            res.json(neededUser);
        }
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Не удалось внести изменения',
            error,
        });
    }
});

user.put('/:id/edit',async(req,res) => {
    try {
            await User.update({
                name: req.body.name
            }, {where: {
                    id:req.params.id,
                }})
            const neededUser = await User.findOne({where:{id:req.params.id},raw:true})
            res.json(neededUser);
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Не удалось внести изменения',
            error,
        });
    }
});

module.exports = user;
