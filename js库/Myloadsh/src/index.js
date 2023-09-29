const arr = require("./lodash");

let _ = {};
for (let i = 0; i < arr.length; i++) {
  const obj = arr[i];
  _[obj.name] = obj.fn;
}
module.exports = _;
