const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors : {
    origin : '*',
  }
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('received and sending: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => { console.log('listening on *:3000'); });
