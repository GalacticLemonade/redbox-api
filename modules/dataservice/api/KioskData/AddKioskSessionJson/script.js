import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Incoming:

*/

export const execute = (req, res) => {
    res.status(200).json({
        Success: true,
        Data: [ 'KioskID' = req.body.KioskId, 'SessionId' = req.body.SessionID ],
        ErrorMessage: "",
        ExceptionRaised: false
    })
}

export const method = 'POST'