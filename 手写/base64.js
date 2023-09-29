const fs = require("fs");
const path = require("path");
const targetP = path.join(__dirname, "./test.png");
const url = fs.readFileSync(targetP).toString("base64");
fs.writeFileSync("./url.txt", url);
console.log(url);
