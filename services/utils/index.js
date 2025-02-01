import { io } from 'socket.io-client';

//connect to socket server io
const socket = io('http://localhost:8005');

//listen for messages from the server
socket.on('message', (data) => {
	console.log('Received from server:', data);
});

console.log('Utils service online!');