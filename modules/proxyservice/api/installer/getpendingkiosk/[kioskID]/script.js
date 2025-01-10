import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Outgoing:
public int Id { get; set; }
public string Address { get; set; }
public string City { get; set; }
public string State { get; set; }
public string ZipCode { get; set; }
public string DueTime { get; set; }
public string MarketName { get; set; }
public string KaseyaMarketName { get; set; }
*/

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
    })
}

export const method = 'GET'