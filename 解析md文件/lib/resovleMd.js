const fs = require("fs");
const path = require("path");
targetPath = path.resolve(__dirname, "../docs");
function resolve() {
  const txt = fs.readFileSync(targetPath + "/test.md").toString("utf-8");
  return txt;
}
module.exports = resolve;
