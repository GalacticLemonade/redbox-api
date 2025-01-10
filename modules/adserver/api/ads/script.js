import fs from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

export const execute = (req, res) => {
    res.send("Temporary method")
}

export const method = 'GET'