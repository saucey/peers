const cors = require('cors')
const { Server } = require("socket.io");
// const WebSocket = require('ws');
var express = require('express');
var app = express();
app.use(cors())
app.use(express.json());
const server = require('http').createServer(app)
// const wss = new WebSocket.Server({ server: server });
const io = new Server(server, {
  path: "/socket"
});
var port = process.env.PORT || 8889;

// peer_server
var ExpressPeerServer = require('peer').ExpressPeerServer;
var peerExpress = require('express');
var peerApp = peerExpress();
var peerServer = require('http').createServer(peerApp);
var options = { debug: true }
var peerPort = 3000;

peerApp.use('/peerjs', ExpressPeerServer(peerServer, options));

server.listen(port);
peerServer.listen(peerPort);

clients = []

var peerID = ''

io.on('connection', socket => {
  socket.on('peerID', (id) => {
    console.log(id, 'ID sent!!!!')
    peerID = id
  })

  socket.on('getId', (id) => {
    console.log(peerID.id, 'ID recieved!!!!')
    socket.emit('message', peerID.id);
  })
})

app.get('/api/peer-id', (req, res) => res.json({ peerID: peerID }));

