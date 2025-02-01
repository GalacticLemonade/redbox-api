import { io } from 'socket.io-client';

//connect to socket server io
const socket = io('http://localhost:8005');

//listen for messages from the server
socket.on('message', (data) => {
	const args = data.split(' ');

	switch (args) {
		case 'ENCRYPT':
			break;
	}

	console.log('Received from server:', data);
});

console.log('Utils service online!');