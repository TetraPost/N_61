const WebSocket = require('ws');
const port = require('config').get('server:wsPort');

const init = async () => {
  const ws = new WebSocket.Server({ port });
  /* Открыть соединение. Слушать порт */
  ws.on('connection', function (socket){
  console.log('connection open');
    /* Получить данные с фронта на сервер */
    socket.on('message', function(message){
        console.log('WS:', message);
    }); 
    setTimeout(()=> {
        /* Отправить данные на фронт */
        socket.send('Hi');
    }, 10*1000);
  });
};

module.exports = {
  init,
};
