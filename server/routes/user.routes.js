const user = require('express').Router();
const { User } = require('../db/models');
const fileMiddleWare = require('../middlewares/file')
const path = require('path')

// Получение колод пользователя
user.put('/:id/photo', fileMiddleWare.single('profilePhoto'),async(req,res) => {
    try {
        // const {id} = req.params.id
        console.log(req.body)
        console.log(req.file.path)
        if (req.file.path) {
            await User.update({
                photo: req.file.path
            }, {where: {
                id:req.params.id,
                }})
            res.json(req.file.path);
        }
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Не удалось внести изменения',
            error,
        });
    }
});

module.exports = user;
