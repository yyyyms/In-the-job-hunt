const _ = require("./src/index");

// console.log(_.slice([1, 2, 3], 1));
// const str = "yms";
// const binary = str.charCodeAt(1).toString(2);
// console.log(binary); // 输出: "10010001100101110110011011001101111"
// let str = "0b101010";
// console.log(parseInt(str, 2).toString());
let str = "101010";
let binary = parseInt(str, 2);
let result = binary.toString(); // 转为字符串
console.log(result); // 输出: "42"
