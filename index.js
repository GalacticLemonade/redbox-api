import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modulesDir = path.join(__dirname, "modules");

function log(message) {
    console.log(chalk.cyan("servicehandler ") + chalk.green("INFO: ") + message)
}

function logWarning(message) {
    console.log(chalk.cyan("servicehandler ") + chalk.yellow("WARNING: ") + message)
}

function logError(message) {
    console.error(chalk.cyan("servicehandler ") + chalk.red("ERROR: ") + message)
}

log("service starter started!")

// read all subdirectories, i.e. each individual server
fs.readdir(modulesDir, async (err, subdirs) => {
    if (err) {
        logError(err)
    }

    for (const subdir of subdirs) {
        const subdirPath = path.join(modulesDir, subdir)

        // check if it is a directory
        if (fs.lstatSync(subdirPath).isDirectory()) {
            const indexPath = path.join(subdir, "index.js")

            // check if index exists
            if (fs.existsSync(indexPath)) {
                try {
                    // convert file path into a file:// uri
                    const indexUrl = pathToFileURL(indexPath).href

                    // import index.js
                    const importedModule = await import(indexUrl)

                    // execute the 'run' function if it exists
                    if (typeof importedModule.run === "function") {
                        importedModule.run()
                    } else {
                        logWarning(`No 'run' function found in ${indexPath}!`)
                    }
                } catch (importError) {
                    logError(`Error importing ${indexPath}: ` + importError)
                }
            } else {
                logWarning(`No 'index.js' found in ${subdirPath}!`)
            }
        }
    }
})