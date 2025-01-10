import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Incoming:
public DateTime LogDate { get; set; }
public string CreatedOnLocal { get; set; }
public string EventType { get; set; }
public string Username { get; set; }
public string Message { get; set; }
public string Source { get; set; }
*/

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
    })
}

export const method = 'POST'