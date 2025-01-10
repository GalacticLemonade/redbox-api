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

// read all subdirectories inside 'modules'
fs.readdir(modulesDir, async (err, subdirs) => {
    if (err) {
      logError("Error reading modules directory:", err);
      return;
    }
  
    for (const subdir of subdirs) {
      const subdirPath = path.join(modulesDir, subdir);
  
      // check if it's a directory
      if (fs.lstatSync(subdirPath).isDirectory()) {
        const indexPath = path.join(subdirPath, "index.js");
  
        // check if 'index.js' exists in the directory
        if (fs.existsSync(indexPath)) {
          try {
            // convert the file path to a file:// URL
            const indexUrl = pathToFileURL(indexPath).href;
  
            // import the 'index.js' file
            const importedModule = await import(indexUrl);
  
            // execute the 'run' function if it exists
            if (typeof importedModule.run === "function") {
              importedModule.run();
            } else {
              logWarning(`No 'run' function found in ${indexPath}`);
            }
          } catch (importError) {
            logError(`Error importing ${indexPath}:`, importError);
          }
        } else {
            logWarning(`No 'index.js' found in ${subdirPath}`);
        }
      }
    }
  });