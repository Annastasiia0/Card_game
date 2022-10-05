const regRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

regRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    res.send({ isRegistration: false });
  } else {
    const newUser = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, 5),
    });

    req.session.user = newUser;
    res.json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      photo: newUser.photo,
      coins: newUser.coins,
    });
  }
});

regRouter.get('/session', async (req, res) => {
  if (req.session.userId) {
    const existingUser = await User.findOne({ where: { id: req.session.userId } });
    if (existingUser) {
      const user = {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        photo: existingUser.photo,
        coins: existingUser.coins,
      };
      res.json(user);
    } else {
      res.json({ message: 'Сессия не найдена' });
    }
  } else {
    res.json({});
  }
});

module.exports = regRouter;
