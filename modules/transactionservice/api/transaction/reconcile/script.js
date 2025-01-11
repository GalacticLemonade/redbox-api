import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Incoming:
public long? ReferenceNumber { get; set; }
public bool Blocklisted { get; set; }
public string Email { get; set; }
public DateTimeOffset? TransactionDate { get; set; }
public CreditCard CreditCard { get; set; }
public long? ParentTransactionId { get; set; }
public ShoppingCart ShoppingCart { get; set; }
public bool IsOffline { get; set; }
public bool PlayPassPromptAccepted { get; set; }
public int PlayPassPointsEarned { get; set; }
public string CustomerProfileNumber { get; set; }
public string UtcOffset { get; set; }
public List<DiscOfferCode> DiscOfferCodes { get; set; }
public bool IsEarlyId { get; set; }
public bool IsEarlyIdApple { get; set; }
public bool IsEarlyIdGoogle { get; set; }
public RedeemedOffer RedeemedCustomerOffer { get; set; }

Outgoing:
public string CustomerProfileNumber { get; set; }
*/

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
    })
}

export const method = 'POST'