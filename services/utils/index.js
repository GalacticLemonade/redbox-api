import express from 'express';
import { router } from 'express-file-routing';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5011;

function guidToByteArray(guidStr) {
    const hex = guidStr.replace(/[{}-]/g, '');
    const bytes = Buffer.from(hex, 'hex');

    // little-endian format
    return Buffer.concat([
        Buffer.from([bytes[3], bytes[2], bytes[1], bytes[0]]),
        Buffer.from([bytes[5], bytes[4]]),
        Buffer.from([bytes[7], bytes[6]]),
        bytes.slice(8),
    ]);
}

const m_keyValueBase = guidToByteArray('{776DA6AF-3033-43ee-B379-2D4F28B5F1FC}');
const m_initialVector = guidToByteArray('{F375D7E0-4572-4518-9C2F-E8F022F42AA7}').slice(0, 8);

// extend to 24 bytes (repeat 1st 8)
const m_keyValue = Buffer.concat([m_keyValueBase, m_keyValueBase.slice(0, 8)]);

function encrypt(data) {
    if (data == null) return null;

    const bytes = Buffer.from(data, 'binary');
    const cipher = crypto.createCipheriv('des-ede3-cbc', m_keyValue, m_initialVector);

    let encrypted = cipher.update(bytes);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return encrypted.toString('base64');
}

function decrypt(data) {
    if (data == null) return null;

    const encBytes = Buffer.from(data, 'base64');
    const decipher = crypto.createDecipheriv('des-ede3-cbc', m_keyValue, m_initialVector);

    let decrypted = decipher.update(encBytes);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString('binary');
}

app.use('/', await router({
    directory: __dirname + '/routes',
}));

app.listen(port, () => {
    console.log('Utils listening at http://localhost:' + port);
});