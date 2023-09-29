// const a = require("./a");
// const b = require("./b");
// import a from "./a";
// console.log(a);
// console.log(module.children[0].children.children);
// console.log("main.js开始执行");
import { a, sayA } from "./a.js";

console.log(a);

sayA();
console.log(a);
// // import say1 from "./b.js";
// console.log("main.js执行完毕");
// const a = require("./a");
// a.b.c = 9;
// a.d();
// console.log(a);
