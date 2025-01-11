import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Incoming:
public byte ReturnType { get; set; }
public string Barcode { get; set; }
public short Deck { get; set; }
public short Slot { get; set; }
public DateTime ReturnDate { get; set; }
public bool FailedSecurityRead { get; set; }

Outgoing:
BaseResponse
*/

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
    })
}

export const method = 'POST'