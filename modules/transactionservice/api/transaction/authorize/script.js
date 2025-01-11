import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Incoming:
public DateTime TransactionDate { get; set; }
public CreditCard CreditCard { get; set; }
public ShoppingCart ShoppingCart { get; set; }
public string CustomerProfileNumber { get; set; }
public bool? AuthAcceptFlag { get; set; }
public int? AuthRuleId { get; set; }
public decimal? AuthAmount { get; set; }
public bool? SkipAuthRule { get; set; }

Outgoing:
public Guid MessageId { get; set; }
public string Email { get; set; }
public long ReferenceNumber { get; set; }
public string CustomerProfileLastName { get; set; }
public string CustomerProfileFirstName { get; set; }
public List<RentalLimit> Limits { get; set; }
public bool HasProfile { get; set; }
public string CustomerProfileNumber { get; set; }
public ConfirmationStatus ConfirmationStatus { get; set; }
public string AccountNumber { get; set; }
public bool KioskTransactionSuccess { get; set; }
public bool SubscriptionTransactionSuccess { get; set; }
*/

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
    })
}

export const method = 'POST'