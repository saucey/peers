const express = require('express');
const cors = require('cors')
const WebSocket = require('ws');

const app = express();
app.use(cors())
app.use(express.json());
const server = require('http').createServer(app)
const wss = new WebSocket.Server({ server: server });


wss.getUniqueID = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4();
};

clients = []

wss.on('connection', ws => {


  ws.on('message', message => {
    this.peerID = message.toString();
    console.log('recieved:', this.peerID)
  });

  ws.id = wss.getUniqueID();

  wss.clients.forEach(function each(client) {
    console.log('Client.ID: ' + client.id);
  });

  ws.on('error', error => {
    // OnError(error)ls
  });

  ws.on('close', ws => {
    // onClose();
  });
});

app.get('/api/peer-id', (req, res) => res.json({ peerID: this.peerID }));

server.listen(8889, () => console.log('Listening on port: 8889'))


