// const say = require("./a");
// const object = {
//   name: "《React进阶实践指南》",
//   author: "我不是外星人",
// };
// console.log("我是 b 文件");
// module.exports = function () {
//   return object;
// };

console.log("b模块加载");
export default function sayhello() {
  console.log("hello,world");
}
