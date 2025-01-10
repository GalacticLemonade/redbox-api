import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Incoming:
public Guid UniqueId { get; set; }
public DateTime CreatedOn { get; set; }
public string CreatedOnLocal { get; set; }
public int AlertType { get; set; }
public string SubAlertType { get; set; }
public string AlertMessage { get; set; }
*/

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
    })
}

export const method = 'POST'