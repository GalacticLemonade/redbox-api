import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
        Errors: [],
        PendingKiosks: [
            {
                "Id": 35618,
                "Address": "2610 Pioneer Rd",
                "City": "St George",
                "State": "UT",
                "ZipCode": "84790-7442",
                "DueTime": "09:00PM",
                "MarketName": "Las Vegas, NV",
                "KaseyaMarketName": "las_vegas_nv"
            }],
    })
}

export const method = 'GET'