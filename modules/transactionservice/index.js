// Transaction Service

import express from "express"
import { v4 } from "uuid"
import chalk from "chalk"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3015
const app = express();

function log(message) {
    console.log(chalk.red("modules/transactionservice ") + chalk.green("INFO: ") + message)
}

function logWarning(message) {
    console.log(chalk.red("modules/transactionservice ") + chalk.yellow("WARNING: ") + message)
}

function logError(message) {
    console.error(chalk.red("modules/transactionservice ") + chalk.red("ERROR: ") + message)
}

export function run() {
    app.use(express.json())

    app.all("*", (req, res) => {
        log("new " + req.method + " request to " + req.originalUrl)
    })

    app.listen(PORT, () => {
        log(`Server is listening on port ${PORT}!`);
    });
}