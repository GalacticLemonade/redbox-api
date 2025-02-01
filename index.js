import path, { dirname } from 'path';
import { spawn } from 'child_process';
import http from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//http server for socket.io
const server = http.createServer();

//http port
const port = 8005;

//attach socket.io to server
const ioServer = new Server(server);

//listen for client connections
ioServer.on('connection', (socket) => {
	//console.log('Service connected');

	//lsten for a message from the client
	socket.on('message', () => {
		//console.log('Received from service:', data);
	});

	//handle client disconnect
	socket.on('disconnect', () => {
		//console.log('Service disconnected');
	});
});

//start microservice function
const startMicroservice = (serviceName) => {
	const servicePath = path.join(__dirname, 'services', serviceName, 'index.js');
	//console.log(servicePath);
	const child = spawn('node', [servicePath]);

	child.stdout.on('data', (data) => {
		console.log(`${serviceName}: ${data}`);
	});

	child.stderr.on('data', (data) => {
		console.error(`${serviceName}: ${data}`);
	});

	child.on('close', (code) => {
		console.log(`${serviceName} exited with code ${code}`);
	});
};

//listen on http
server.listen(port);

//start all services
startMicroservice('db');
startMicroservice('utils');
startMicroservice('testservice');

startMicroservice('transactionservice');
startMicroservice('reels');
startMicroservice('proxyservice');
startMicroservice('kioskinventory');
startMicroservice('iotcertificateservice');
startMicroservice('dataservice');
startMicroservice('adserver');