//用正则识别大于5小于15的字符串
{
  const str = "1 2 15 10 8 9 11 7";

  let res = str.match(/\b\d+\b/g).filter((num) => {
    return num > 5 && num < 15;
  });
  //   console.log(res);
}
{
  let arr1 = [1, 2, 3, 4, 5, 6];
  let arr2 = [2, 3, 4];
  let arr3 = [4, 5, 6, 7];
  //交集
  function test1(arr1, arr2, arr3) {}
}

// {
//   const obj = {
//     a: () => {
//       console.log(this);
//     },
//   };
//   obj.a.call("123");
// }
// let cluster = require("cluster");
// let numCPUs = require("os").cpus().length;
// console.log(numCPUs);
let obj = {
  a: 1,
  b: function (params) {
    console.log("b");
  },
  c: new Date(),
  d: /\d/g,
  e: undefined,
  f: null,
};
function myClone(target) {
  let newobj = {
    a: target["b"],
  };
  return newobj;
}
// let newobj = myClone(obj);
// obj["b"] = null;
// console.log(newobj);
// console.log(obj);
{
  let a = " Hell o ";
  // console.log(a.replace(/\s/g, "").toLocaleLowerCase());
}
{
  let arr = [1, 2, "a", "c"];
  // console.log(arr.toString().replace(/,/g, ""));
}
{
  const str = new String("foo");
  // console.log(str);
}
{
  // setImmediate(() => {
  //   console.log(1111);
  // });
}
{
  let fn = function (params) {};
  // console.log(typeof fn);
}
{
  let arr = [];
  // console.log([] == []);
  // console.log(arr.toString());
}
{
  let fn = new Function("console.log(this)");
  // fn();
  // function fn1(params) {
  //   console.log(1);
  // }
  // console.log(fn instanceof Object);
}
//按位与判断奇偶
{
  // console.log(26 & 1);
  // 偶数
}
{
  async function asy1(params) {
    console.log(1);
    await asy2();
    console.log(2);
  }
  let asy2 = async () => {
    await (async () => {
      await (() => {
        console.log(3);
      })();
      console.log(4);
    })();
  };
  let asy3 = () => {
    Promise.resolve().then(() => {
      console.log(6);
    });
  };
  // asy1();
  // console.log(7);
  // asy3();
  // 1 3 7 4 6
}
{
  function test1(params) {
    let a = 10;
    return function (params) {
      console.log(a);
      let a = 5;
    };
  }
  // let fn = test1();
  // fn();
}
//解析dom树
{
  // let tmplate = "<div> <div class='a'> 666 </div> </div>";
}
{
  let a = "ff";
  // console.log(parseInt(a, 16));
  // console.log(parseInt("0.000000005"));
  let num = 0.000000005;
  // console.log(num.toString());
}
{
  function calculateMinOperations(board) {
    let black = 0;
    let white = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const Color1 = (i + j) % 2 === 0 ? "0" : "1";

        if (Color1 === "1" && board[i][j] === "0") {
          black++;
        }
        if (Color1 === "0" && board[i][j] === "1") {
          black++;
        }
        const Color2 = (i + j) % 2 === 0 ? "1" : "0";

        if (Color2 === "1" && board[i][j] === "0") {
          white++;
        }
        if (Color2 === "0" && board[i][j] === "1") {
          white++;
        }
      }
    } // 取黑色棋子为首和白色棋子为首中的较小值，作为最少操作次数
    // console.log(blackFirst, whiteFirst);
    return Math.min(blackFirst, whiteFirst);
  } // 棋盘示例
  const board = [
    ["W", "B", "B"],
    ["B", "B", "W"],
    ["W", "W", "W"],
  ]; // 计算最少操作次数
  // const minOperations = calculateMinOperations(board);
  // console.log("最少操作次数:", minOperations);
  // 0 1 0
  // 1 0 1
  // 0 1 0
}
{
  function calculateMinDays(n, a, b, candiesPerFactory) {
    const sortedCandies = candiesPerFactory.sort((a, b) => a - b); // 按每种糖果的工厂产能排序
    const minCandiesPerPackage = b; // 每包糖果的最小数量
    let remainingPackages = a; // 剩余待生产的包数
    let days = 0; // 已经过的天数

    while (remainingPackages > 0) {
      let candiesProducedToday = 0; // 今天生产的糖果数量

      for (let i = 0; i < n; i++) {
        // 检查每种糖果的剩余需求和产能
        const candiesNeeded = minCandiesPerPackage * remainingPackages;
        const candiesAvailable = Math.min(sortedCandies[i], candiesNeeded);

        // 更新剩余待生产的包数和今天生产的糖果数量
        remainingPackages -= Math.ceil(candiesAvailable / minCandiesPerPackage);
        candiesProducedToday += candiesAvailable;

        if (remainingPackages <= 0) {
          // 完成订单，退出循环
          break;
        }
      }

      days++; // 过了一天

      if (candiesProducedToday === 0) {
        // 无法满足订单需求，返回 -1
        return -1;
      }
    }

    return days;
  }

  const input = "3 10 3\n4 5 2";
  const [n, a, b, ...candiesPerFactory] = input.split(/\s+/).map(Number);
  const minDays = calculateMinDays(3, 10, 20, [7, 9, 6]);

  console.log(`完成订单所需的最少天数: ${minDays}`);
}
