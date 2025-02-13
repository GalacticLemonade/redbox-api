import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

export const execute = (req, res) => {
    res.status(200).json({
        Success: true,
        Errors: [],
        StatusCode: 200
    });
}

export const method = 'POST'