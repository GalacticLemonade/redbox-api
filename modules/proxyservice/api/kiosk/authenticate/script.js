import fs from 'node:fs';
import { v4 } from "uuid"
import crypto from "crypto"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

const m_keyValue = Buffer.from(process.env.M_KEY_VALUE, 'hex');
const m_initialVector = Buffer.from(process.env.M_INITIAL_VECTOR, 'hex');

function TripleDESEncrypt(data) {
    if (data == null) return null;

    const bytes = Buffer.from(data, 'binary');
    const cipher = crypto.createCipheriv('des-ede3-cbc', m_keyValue, m_initialVector);

    let encrypted = cipher.update(bytes);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return encrypted.toString('base64');
}

export const execute = (req, res) => {

    if (req.body.Username == process.env.FMA_USER && req.body.Password == TripleDESEncrypt(process.env.FMA_PASS)) {
        res.status(200).json({
            MessageId: v4(),
            Success: true,
        })
    } else {
        res.status(200).json({
            MessageId: v4(),
            Errors: ["Invalid credentials"],
            Success: false,
        })
    }
}

export const method = 'POST'