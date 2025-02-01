const express = require('express');
const io = require('socket.io-client');

const app = express();
const port = 3001;

//connect to socket server io
const socket = io('http://localhost:8005');

//send a message to the server
socket.emit('message', 'Hello from Test Service!');

//listen for messages from the server
socket.on('message', (data) => {
	console.log('Received from server:', data);
});

app.get('/', (req, res) => {
	res.send('Test Service is running');
});

app.listen(port, () => {
	console.log('Test Service listening at http://localhost:${port}');
});