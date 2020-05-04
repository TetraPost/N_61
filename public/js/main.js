const socket = new WebSocket('ws://localhost:3030');

/* Открыть соединение в сервером */
socket.addEventListener('open', function(event) {
  console.log('Connect Opened');
});
setTimeout(() => {
  const data = { name: 'Fish' };
  /* Отправить данные на сервер */
  socket.send(JSON.stringify(data));  
}, 5000);

/* Получить данные с сервера на фронт */
socket.addEventListener('message', function(event) {
  console.log('From server', event.data);
});