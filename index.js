import path, { dirname } from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

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
		switch (serviceName) {
			case "proxyservice":
				console.log(chalk.blue(`${serviceName}: ${data}`));
				break;
			case "dataservice":
				console.log(chalk.red(`${serviceName}: ${data}`));
				break;
			case "kioskinventory":
				console.log(chalk.green(`${serviceName}: ${data}`));
				break;
			case "adserver":
				console.log(chalk.yellow(`${serviceName}: ${data}`));
				break;
			case "iotcertificateservice":
				console.log(chalk.cyan(`${serviceName}: ${data}`));
				break;
			case "transactionservice":
				console.log(chalk.magenta(`${serviceName}: ${data}`));
				break;
			case "utils":
				console.log(chalk.blueBright(`${serviceName}: ${data}`));
				break;
			case "db":
				console.log(chalk.cyanBright(`${serviceName}: ${data}`));
				break;
			case "testservice":
				console.log(chalk.redBright(`${serviceName}: ${data}`));
				break;
		}
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