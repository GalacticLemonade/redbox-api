import fs from 'node:fs';
import { v4 } from "uuid"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const appDir = dirname(fileURLToPath(import.meta.url));

/*
Sends:
namespace Redbox.KioskDataServices.Proxy.ComponentModel
{
  public class AddKioskSessionRequest
  {
    public int KioskId { get; set; }

    public string SessionId { get; set; }

    public string StartTime { get; set; }

    public string EndTime { get; set; }

    public bool IsUnCompressed { get; set; }

    public string SessionData { get; set; }
  }
}

Expects:
namespace Redbox.KioskDataServices.Proxy.ComponentModel
{
  public class KioskDataServicesResponse
  {
    public bool Success { get; set; }

    public Dictionary<string, object> Data { get; set; }

    public string ErrorMessage { get; set; }

    public bool ExceptionRaised { get; set; }
  }
}
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