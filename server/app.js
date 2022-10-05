require('@babel/register');
const express = require('express');
require('dotenv').config();
const app = express();

const ws = require('ws');

const { sequelize } = require('./db/models');
const configApp = require('./config/configApp');
const path = require('path')


// импортируем роутеры
const regRouter = require('./routes/reg.routes');
const authRouter = require('./routes/auth.routes');
const deckRouter = require('./routes/deck.routes');
const mainRouter = require('./routes/main.routes')
const buyCards = require('./routes/buycards.routes')
const initCards = require('./routes/initcards.routes')
const cardsRouter = require('./routes/cards.routes')
const collectionsRouter = require('./routes/collections.routes')
const user = require('./routes/user.routes')

const activeDeck = require('./routes/active.routes');


configApp(app);
app.locals.count = 0;

const PORT = process.env.PORT ?? 4000;

// app.get('/stars.txt', (req, res) => {
//   res.sendFile(path.resolve('public', 'stars.txt')); // /public/stars.txt
// })

// подключаем роутеры
app.use('/images',express.static(path.join(__dirname,'images')))
app.use('/registration', regRouter);
app.use('/auth', authRouter);
app.use('/', deckRouter);
app.use('/main',mainRouter)
app.use('/buycards',buyCards)
app.use('/getcards',initCards)
app.use('/',cardsRouter)
app.use('/mydeck/:id',collectionsRouter)
app.use('/active', activeDeck);
app.use('/',user)


app.listen(PORT, async () => {
  console.log(`Сервер шуршит на порту ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('База данных ОК!');
  } catch (error) {
    console.log(error.message); // new Error('mymessage');
  }
});
//socket server
const wss = new ws.Server({
  port: 5000,
}, () => console.log(`Server started on 5000`))
const clientRooms = new Map()

wss.on('connection', function connection(ws) {
  ws.on('message', function (message) {
    message = JSON.parse(message)

    switch (message.event) {
      case 'message':
        // console.log (message.message)
        broadcastMessage(message)
        break;
      case 'connection':
        console.log ('ETO CONNECTION=>>>',message)
        break;
      case 'test':
        broadcastMessage(message)
        break;
      case 'ROOM_CREATED':
        // console.log (message.roomId)
        clientRooms.set(message.roomId,{player1:message.id})
        // console.log(clientRooms)
        break;
      case 'JOIN_ROOM':
        const roomWithUsers = clientRooms.get(message.roomId)
        // console.log (roomWithUsers)
        if(roomWithUsers) {
          clientRooms.set(message.roomId, {...roomWithUsers, player2: message.id})
          // console.log (clientRooms)
          broadcastMessage({
            event: '2_PLAYERS_CONNECTED',
            users: clientRooms.get(message.roomId)
          })
        }else {
          broadcastMessage({
            event: 'ROOM_DOES_NOT_EXIST',
          })
        }
        break;
    }
    ws.emit('isReady', () => {
      // console.log ('qqqqqqqqqqqqqqq')
    })
  })
})

function broadcastMessage(message, id) {
  wss.clients.forEach(client => {
    client.send(JSON.stringify(message))
  })
}
