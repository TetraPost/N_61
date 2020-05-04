// Найтройки веб сервера

// Normalize a port into a number, string, or false.
const normalizePort = (val) => {
  if (typeof val === 'undefined') {
    return false;
  }

  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    throw new Error(`Port ${val} incorect`);
  }

  if (port >= 0) {
    // port number
    return port;
  }

  throw new Error(`Port ${val} incorect`);
};

// если порт передали в process.env.PORT - нормализируй и используй, иначе порт по умолчанию
const httpPort = normalizePort(process.env.PORT) || 3000;
const wsPort = normalizePort(process.env.WS_PORT) || 3030;
// app.set('port', port);
if (httpPort === wsPort) {
  console.log('\x1b[43m\x1b[30m Port HTTP AND WS must be different \x1b[0m');
  throw new Error('failed run config');
}

module.exports = {
  server: {
    httpPort,
    wsPort,
  },
};
