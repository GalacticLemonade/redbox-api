import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Incoming:
public int KioskId { get; set; }
public string SessionId { get; set; }
public string StartTime { get; set; }
public string EndTime { get; set; }
public bool IsUnCompressed { get; set; }
public string SessionData { get; set; }

Cannot find what it expects back
*/

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
    })
}

export const method = 'POST'