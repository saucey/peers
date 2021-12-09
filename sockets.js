const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  path: "/socket/"
});

const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
  debug: true
});

app.use(cors())
app.use('/peerjs', peerServer)

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit('user-connected', userId);
  })

})

server.listen(3000, () => {
  console.log('listening on *:3000');
});
