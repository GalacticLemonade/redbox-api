import path, { dirname } from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//http port
const port = 8005;

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