import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Incoming:
public Guid MessageId { get; set; }
public long KioskId { get; set; }
public string Email { get; set; }
public string AccountNumber { get; set; }
public DateTime TransactionDate { get; set; }

Outgoing:
public Guid MessageId { get; set; }
public ConfirmationStatus ConfirmationStatus { get; set; }
public string CustomerProfileNumber { get; set; }
public string MobilePhoneNumber { get; set; }
public bool PromptForPerks { get; set; }
public bool PromptForEarlyId { get; set; }
public bool TextClubEnabled { get; set; }
public bool? EmailVerified { get; set; }
*/

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
    })
}

export const method = 'POST'