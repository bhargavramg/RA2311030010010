const fs = require("fs");

function logger(type, message) {
  const log = `[${new Date().toISOString()}] ${type}: ${JSON.stringify(message)}\n`;
  fs.appendFileSync("log.txt", log);
}

module.exports = logger;
