import express from 'express';
import { router } from 'express-file-routing';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5003;

app.use('/', await router({
	directory: __dirname + '/routes',
}));

app.listen(port, () => {
	console.log('Proxy Service listening at http://localhost:' + port);
});