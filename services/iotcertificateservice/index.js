import express from 'express';
import io from 'socket.io-client';
import { router } from 'express-file-routing';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5005;

//connect to socket server io
const socket = io('http://localhost:8005');

//send a message to the server
socket.emit('message', 'Hello from IoT Certificate Service!');

//listen for messages from the server
socket.on('message', (data) => {
	console.log('Received from server:', data);
});

app.use('/', await router({
	directory: __dirname + '/routes',
}));

app.listen(port, () => {
	console.log('IoT Certificate Service listening at http://localhost:' + port);
});