const path = require('path');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors')


// Подключаем(рекваирим) модуль на вывод кукис по req.cookies
const cookieParser = require('cookie-parser');
// Подключаем(рекваирим) модуль на создание сессий
const session = require('express-session');
// Подключаем(рекваирим) модуль на создание хранилища(папка session) для хранения сессий
const FileStore = require('session-file-store')(session);
// Подключаем(рекваирим) мидлварку для проверки входа пользователя
const isAuth = require('../middlewares/isAuth');

// Подключаем ручки
// const indexRouter = require('../routers/views/indexRouter');
// const viewsRouter = require('../../../../project P2W2/assessment-2d-tigers-2022-spb/routes/viewsRoutes');
// const authRouter = require('../../../../project P2W2/assessment-2d-tigers-2022-spb/routes/authRouter');
// const Router = require('../../../../project P2W2/assessment-2d-tigers-2022-spb/routes/Router');

// экспортим конфиг с включенными мидлварками
module.exports = function configApp(app) {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.resolve('public')));
  app.use(cookieParser());
  app.use(cors())
  // Создаем конфиг (структуру сессии)
  const sessionConfig = {
    store: new FileStore(), // хранение файлов сессии
    name: 'user_sid', 				// Имя куки для хранения id сессии. По умолчанию - connect.sid
    secret: process.env.SESSION_SECRET ?? 'test',	// Секретное слово для шифрования, может быть любым
    resave: false, 				// Пересохранять ли куку при каждом запросе
    saveUninitialized: false, 		// Создавать ли сессию без инициализации ключей в req.session
    cookie: {
      maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
      httpOnly: true, 				// Серверная установка и удаление куки, по умолчанию true
    },
  };

  // подключаем мидлварки после написания конфига сессии
  app.use(session(sessionConfig));
  app.use(isAuth);

  // app.get('/', (req, res) => {
  //   res.redirect(`/stars`);
  // });

  // app.use('/posts', Router);
  // app.use('/', viewsRouter); // отдельно выделили роуты для вьюшек регистрации и логина
  // app.use('/auth', authRouter); // летают фетчи
};
