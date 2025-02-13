import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

export const execute = (req, res) => {
    res.status(200).json({
        "opsMarket": "Las Vegas, NV",
        "kaseyaServer": "las_vegas_nv",
        "success": true,
        "errors": {},
        "hostName": "test3",
        "statusCode": 200,
        "responseTime": 0
    })
}

export const method = 'GET'