import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Incoming:
public DateTime CreatedOn { get; set; }
public string CreatedOnLocal { get; set; }
public DateTime ReportTime { get; set; }
public string UserName { get; set; }
public string InitTest { get; set; }
public string TrackTest { get; set; }
public string VendDoor { get; set; }
public string VerticalSlot { get; set; }
public string CameraDriver { get; set; }
public string SnapDecode { get; set; }
public string TouchScreenDriver { get; set; }
*/

export const execute = (req, res) => {
    res.status(200).json({
        MessageId: v4(),
        Success: true,
    })
}

export const method = 'POST'