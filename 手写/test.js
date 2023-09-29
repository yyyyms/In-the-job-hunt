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
    }

    return Math.min(blackFirst, whiteFirst);
  }
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

  // console.log(`完成订单所需的最少天数: ${minDays}`);
}
{
  // console.log(undefined == null);
  // console.log([] == false);
  // console.log("" == false);
}
{
  // async function async1() {
  //   console.log("async1 start");
  //   await async2();
  //   console.log("async1 end");
  // }
  // async function async2() {
  //   console.log("async2");
  // }
  // console.log("script start");
  // setTimeout(function () {
  //   console.log("settimeout");
  // });
  // async1();
  // new Promise((resolve, reject) => {
  //   console.log("promise1");
  //   resolve;
  // }).then(() => {
  //   console.log("promise2");
  // });
  // console.log("script end");
}
{
  // [1, 2, 3].map((item, index) => {
  //   parseInt(item, index);
  // });
  // console.log(parseInt(3, 2));
}
{
  let arr = [1, 2, 3];
  // console.log(arr.unshift(0));
}
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function test(arr) {
    let flag = 0; //0往牌底放 1往结果里放
    let res = [];
    let queue = [...arr];
    while (queue.length > 0) {}
  }
}
{
  let arr = [1, 2, 3];
  // console.log(Object(arr).length >>> 0);
  let a = 1.1;
  // console.log(a >> 0);
}
{
  // console.log(~1);
  // console.log(0 == "");
  // console.log("".toString());
}
//手写new
{
  function _new(fn, ...args) {
    if (typeof fn !== "function") {
      return;
    }
    let obj = Object.create(fn.prototype);
    let res = fn.apply(obj, args);
    //看看res是不是对象或者function 是返回res 不是的话 返回obj
    const isObject = typeof res === "object" && res !== null;
    const isFunction = typeof res === "function";
    return isObject || isFunction ? res : obj;
  }
  function test(name) {
    this.name = name;
    this.status = true;
  }
  let obj = _new(test, "yms");
  // console.log(obj);
}
{
  const arr = [1, [2, [3, [4, 5]]], 6];
  const flatten = (arr) => {
    return arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
  };
  // console.log(flatten(arr));
}
//手写reduce
{
  function _reduce(cb, initialValue) {
    if (this == undefined) {
      throw new TypeError("this is null or not defined");
    }
    if (typeof cb !== "function") {
      throw new TypeError(cb + " is not a function");
    }
    let arr = Object(this);
    let len = arr.length;
    let k = 0;
    //定义累加器
    let accumulator = initialValue;
    if (accumulator === undefined) {
      //找初始值
      while (k < len && !(k in arr)) {
        k++;
      }
      if (k >= len) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      accumulator = arr[k++];
    }
    while (k < len) {
      if (k in arr) {
        accumulator = cb.call(undefined, accumulator, arr[k], k, arr);
      }
      k++;
    }
    return accumulator;
  }
  Array.prototype._reduce = _reduce;
  let arr = [1, 2, 3, 4];
  // let res = arr._reduce((pre, cur) => {
  //   return pre + cur;
  // }, 0);
  // console.log(res);
  // let res = arr.reduce((pre, cur, i, o) => {
  //   console.log(i, o);
  //   return pre + cur;
  // }, 0);
  // console.log(res);
}
{
  //判断某个元素在数组中唯一
  let arr = [1, 2, 3, 4, 2];
  // console.log(arr.lastIndexOf(2) === arr.indexOf(2));
}

//手写filter
{
  let arr = [1, 2, 3, 4, 2];
  Array.prototype._filter = _filter;
  // console.log(
  //   arr._filter((item) => {
  //     return item > 2;
  //   })
  // );
  function _filter(cb, thisArg) {
    if (this == undefined) {
      throw new TypeError("this is null or not defined");
    }
    if (typeof cb !== "function") {
      throw new TypeError(cb + " is not a function");
    }
    let arr = Object(this);
    let len = arr.length >>> 0; //保证len 是number 且为正整数
    let k = 0;
    let res = [];
    while (k < len) {
      if (k in arr) {
        if (cb.call(thisArg, arr[k], k, arr)) {
          res.push(arr[k]);
        }
      }
      k++;
    }
    return res;
  }
}
//手写map
{
  function _map(cb, thisArg) {
    if (this == undefined) {
      throw new TypeError("this is null or not defined");
    }
    if (typeof cb !== "function") {
      throw new TypeError(cb + " is not a function");
    }
    let arr = Object(this);
    let res = [];
    let len = arr.length >>> 0;
    for (let i = 0; i < len; i++) {
      if (i in arr) {
        res[i] = cb.call(thisArg, arr[i], i, arr);
      }
    }
    return res;
  }
  let arr = [1, 2, 3];
  Array.prototype._map = _map;
}
{
  // let obj = {
  //   a: 1,
  //   b: 2,
  //   [Symbol(6)]: "yms",
  // };
  // for (const key in obj) {
  //   if (Object.hasOwnProperty.call(obj, key)) {
  //     const element = obj[key];
  //     console.log(element);
  //   }
  // }
}
//手写call
{
  function _call(context = window, ...args) {
    if (typeof fn !== "function") {
      return;
    }
    const fn = Symbol("fn");
    context[fn] = this;
    const res = context[fn](...args);
    delete context[fn];
    return res;
  }
}
//手写apply
{
  function _apply(context = window, args) {
    if (typeof fn !== "function") {
      return;
    }
    const fn = Symbol("fn");
    context[fn] = this;
    const res = context[fn](...args);
    delete context[fn];
    return res;
  }
}
//手写bind
{
  function _bind(context = window, args) {
    if (typeof fn !== "function") {
      return;
    }
    let self = this;
    function test() {
      if (this instanceof test) {
        return new self(...args, ...arguments);
      }
      return self.apply(context, [...args, ...arguments]);
    }
    return test;
  }
}
//函数科里化
{
  function sum(...args) {
    let arr = [];
    function add(...args) {
      arr = [...arr, ...args];
      return add;
    }
    add(...args);
    add.valueOf = () => {
      return arr.reduce((pre, cur) => {
        return pre + cur;
      }, 0);
    };
    return add;
  }
  // console.log(sum(1)(1, 2, 3)(2).valueOf());
}
{
  function add() {
    const _args = [...arguments];
    function fn() {
      _args.push(...arguments);
      return fn;
    }
    fn.toString = function () {
      return _args.reduce((sum, cur) => sum + cur);
    };
    return fn;
  }
  // console.log(add(1)(2)(3)(4) == 10);
}
{
  // let arr = [];
  // console.log(NaN === NaN);
}
//继承
{
  function Parent() {
    this.name = "parent";
  }
  Parent.prototype = {
    a: 1,
  };
  function Child() {
    Parent.call(this);
    this.type = "children";
  }
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Parent;
  // let obj = new Child();
  // console.log(obj.name);
}
//数组转树  递归reduce
{
  const currentArray = [
    { id: "01", name: "张大大", pid: "", job: "项目经理" },
    { id: "02", name: "小亮", pid: "01", job: "产品leader" },
    { id: "03", name: "小美", pid: "01", job: "UIleader" },
    { id: "04", name: "老马", pid: "01", job: "技术leader" },
    { id: "05", name: "老王", pid: "01", job: "测试leader" },
    { id: "06", name: "老李", pid: "01", job: "运维leader" },
    { id: "07", name: "小丽", pid: "02", job: "产品经理" },
    { id: "08", name: "大光", pid: "02", job: "产品经理" },
    { id: "09", name: "小高", pid: "03", job: "UI设计师" },
    { id: "10", name: "小刘", pid: "04", job: "前端工程师" },
    { id: "11", name: "小华", pid: "04", job: "后端工程师" },
    { id: "12", name: "小李", pid: "04", job: "后端工程师" },
    { id: "13", name: "小赵", pid: "05", job: "测试工程师" },
    { id: "14", name: "小强", pid: "05", job: "测试工程师" },
    { id: "15", name: "小涛", pid: "06", job: "运维工程师" },
  ];
  function arrToTree(arr, pid) {
    return arr.reduce((pre, cur) => {
      if (cur.pid === pid) {
        pre.push(cur);
        //找cur的儿子
        const child = arrToTree(arr, cur.id);
        if (child.length) {
          cur.child = child;
        }
      }
      return pre;
    }, []);
  }
  // console.log(arrToTree(currentArray, ""));
}
//数组转树 递归filer
{
  const currentArray = [
    { id: "01", name: "张大大", pid: "", job: "项目经理" },
    { id: "02", name: "小亮", pid: "01", job: "产品leader" },
    { id: "03", name: "小美", pid: "01", job: "UIleader" },
    { id: "04", name: "老马", pid: "01", job: "技术leader" },
    { id: "05", name: "老王", pid: "01", job: "测试leader" },
    { id: "06", name: "老李", pid: "01", job: "运维leader" },
    { id: "07", name: "小丽", pid: "02", job: "产品经理" },
    { id: "08", name: "大光", pid: "02", job: "产品经理" },
    { id: "09", name: "小高", pid: "03", job: "UI设计师" },
    { id: "10", name: "小刘", pid: "04", job: "前端工程师" },
    { id: "11", name: "小华", pid: "04", job: "后端工程师" },
    { id: "12", name: "小李", pid: "04", job: "后端工程师" },
    { id: "13", name: "小赵", pid: "05", job: "测试工程师" },
    { id: "14", name: "小强", pid: "05", job: "测试工程师" },
    { id: "15", name: "小涛", pid: "06", job: "运维工程师" },
  ];
  function arrToTree(arr, pid) {
    //找儿子
    const child = arr.filter((item) => {
      return item.pid === pid;
    });
    console.log(child);
    if (child.length === 0) {
      return [];
    } else {
      //给儿子找儿子
      return child.map((i) => {
        let children = arrToTree(arr, i.id);
        if (children.length) {
          i.children = children;
          return i;
        } else {
          return i;
        }
      });
    }
  }
  // console.log(arrToTree(currentArray, ""));
}
//数组转树 迭代
{
  const currentArray = [
    { id: "01", name: "张大大", pid: "", job: "项目经理" },
    { id: "02", name: "小亮", pid: "01", job: "产品leader" },
    { id: "03", name: "小美", pid: "01", job: "UIleader" },
    { id: "04", name: "老马", pid: "01", job: "技术leader" },
    { id: "05", name: "老王", pid: "01", job: "测试leader" },
    { id: "06", name: "老李", pid: "01", job: "运维leader" },
    { id: "07", name: "小丽", pid: "02", job: "产品经理" },
    { id: "08", name: "大光", pid: "02", job: "产品经理" },
    { id: "09", name: "小高", pid: "03", job: "UI设计师" },
    { id: "10", name: "小刘", pid: "04", job: "前端工程师" },
    { id: "11", name: "小华", pid: "04", job: "后端工程师" },
    { id: "12", name: "小李", pid: "04", job: "后端工程师" },
    { id: "13", name: "小赵", pid: "05", job: "测试工程师" },
    { id: "14", name: "小强", pid: "05", job: "测试工程师" },
    { id: "15", name: "小涛", pid: "06", job: "运维工程师" },
  ];
  function arrToTree(arr) {
    let list = JSON.parse(JSON.stringify(arr));
    let root = null;
    let objs = {};
    while (list.length) {
      let item = list.shift();
      if (!objs[item.id]) {
        objs[item.id] = item;
      }
      //处理树根
      if (item.pid === "" && root === null) {
        root = item;
        continue;
      }
      //找父亲
      let parent = objs[item.pid];
      if (!parent) {
        list.push(item);
      } else {
        parent.children = parent.children ? parent.children.concat(item) : [item];
      }
    }
    return root;
  }
  // console.log(arrToTree(currentArray));
}
{
  let str = "abcabcbb";
  function lengthOfLongestSubstring(str) {
    let map = {};
    let left = 0,
      right = 0;
    let max = 0;
    while (right < str.length) {
      let item = str[right];
      if (map[item] >= 0 && map[item] >= left) {
        left = map[item] + 1;
        map[item] = right;
      } else {
        map[item] = right;
        max = Math.max(right - left + 1, max);
      }
      right++;
    }
    return max;
  }
}
// {
//   function test1(str) {
//     function Move(positon, direction, step) {
//       if (direction == "e") {
//         positon[0] = positon[0] + step;
//       } else if (direction == "s") {
//         positon[1] = positon[1] - step;
//       } else if (direction == "w") {
//         positon[0] = positon[0] - step;
//       } else if (direction == "n") {
//         positon[1] = positon[1] + step;
//       }
//     }
//     let positon = [0, 0];
//     let reg = /([a-z])(\d)/;
//     let i = 0;
//     while (str.length !== 0) {
//       let res = reg.exec(str);
//       let direction = res[1]; //方向
//       let step = res[2] * 1; //步数
//       str = str.slice(res.index + 2);
//       //动
//       Move(positon, direction, step);
//     }
//     return positon;
//   }
//   // let flag = "a" / "b";
//   // for (let index = 0; index < array.length; index++) {
//   //   const element = array[index];
//   // }
//   // console.log(test1("e1s1w2n2"));

//   // let aaa = str.split(/[A-z]/);
// }
{
  let obj = {
    id: 0,
    children: [
      {
        id: 1,
        children: [
          {
            id: 11,
            children: [
              {
                id: 111,
              },
              {
                id: 222,
              },
            ],
          },
          {
            id: 12,
            children: [
              {
                id: 121,
              },
              {
                id: 122,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        children: [
          {
            id: 21,
            children: [
              {
                id: 211,
              },
              {
                id: 212,
              },
            ],
          },
          {
            id: 22,
            children: [
              {
                id: 221,
              },
              {
                id: 222,
              },
            ],
          },
        ],
      },
      {
        id: 3,
      },
    ],
  };
  function test1(obj, str) {
    let use = str.split(",");
    //判断是不是目标子串
    function is(id) {
      id = id.toString();
      let Is = false;
      for (let i = 0; i < use.length; i++) {
        const element = "0" + use[i];
        let reg = new RegExp(id);
        if (element.match(reg)) {
          Is = true;
        }
      }
      return Is;
    }
    console.log(is("11"));

    function dfs(obj) {
      if (obj.children) {
        for (let i = 0; i < obj.children.length; i++) {
          if (!obj.children[i].children.length) {
            delete obj.children[i];
          } else {
            dfs(obj.children[i]);
          }
          if (!is(obj.children[i].id)) {
            delete obj.children[i];
          }
        }
      }
    }
    dfs(obj);
    return obj;
  }
  // console.log(test1(obj, "11,22,3"));
}
{
  // let str = "abcadegfa";
}

{
  // console.log(["1", "2", "3"].map(parseInt));
  // let arr = [];
  // arr.map((item, index) => {});
}
// console.log(Object.prototype.__proto__ === null);
// let arr = [];
// arr.reduce((pre, cur) => {
//   console.log(pre);
// });
// console.log([3, 2, 1].reduce(Math.pow));
// let val = "smtg";
// console.log("Value is " + (val === "smtg") ? "Something" : "Nothing");
// var name = "World!";
// (function () {
//   console.log(name);
//   if (typeof name === "undefined") {
//     var name = "Jack";
//     console.log("Goodbye " + name);
//   } else {
//     console.log("Hello " + name);
//   }
// })();
{
  var END = Math.pow(2, 53) + 1;
  // console.log(END);
}
{
  var END = Math.pow(2, 53);
  // var START = END - 100;
  // console.log(START);
  // var count = 0;
  // for (var i = 9007199254740892; i <= 9007199254740992; i++) {
  //   count++;
  // }
  // console.log(count);
}
{
  // var ary = [0, 1, 2, "", "", 5];
  // ary[10] = 10;
  // console.log(
  //   ary.filter(function (x) {
  //     return x === undefined;
  //   })
  // );
}
{
  var two = 0.2;
  var one = 0.1;

  var eight = 0.8;
  var six = 0.6;
  //  [(two - one == one, eight - six == two)];
}
{
  // function showCase2(value) {
  //   switch (value) {
  //     case "A":
  //       console.log("Case A");
  //       break;
  //     case "B":
  //       console.log("Case B");
  //       break;
  //     case undefined:
  //       console.log("undefined");
  //       break;
  //     default:
  //       console.log("Do not know!");
  //   }
  // }
  // showCase2(String("A"));
}
{
  function isOdd(num) {
    return num % 2 == 1;
  }
  function isEven(num) {
    return num % 2 == 0;
  }
  function isSane(num) {
    return isEven(num) || isOdd(num);
  }
  var values = [7, 4, "13", -9, Infinity];
  // console.log(values.map(isSane));
  // true true true  true false
  // console.log(-9 % -2);
}
{
  // console.log([
  //   parseInt(3, 8), //3
  //   parseInt(3, 2), //nan
  //   parseInt(3, 0), //3
  // ]);
  // console.log([1, 2, 3].map(parseInt));
  // console.log();
}
{
  // console.log(Array.isArray());
  // console.log(Array.prototype);
  // let arr = Array.prototype;
  // var a = [0];
  // if ([0]) {
  //   console.log(a == true);
  // } else {
  //   console.log("wut");
  // }
}
{
  // console.log(1 + -+(+(+-+1)));
  // console.log(2 ** (3 ** 2));
}
{
  // 请你编写一个函数，它接收一个其他的函数，并返回该图教的 柯里化 后的形式
  // function curry(fn, ...args) {
  //   if (args.length >= fn.length) {
  //     return fn(...args);
  //   } else {
  //     return (...newArgs) => curry(fn, ...args, ...newArgs);
  //   }
  // }
  // // 示例函数
  // function sum(a, b, c) {
  //   return a + b + c;
  // }
  // const curriedSum = curry(sum);
}
{
  function test(len, k, arr) {
    let is = true;
    for (let i = 0; i < len; i++) {
      if (arr[i + 1] > arr[i]) {
        if (!is) {
          console.log("NO");
        } else {
          is = false;
        }
      }
    }
    if (is) {
      console.log("YES");
      console.log(0);
    }
  }
  // test(5, 3, [1, 2, 3, 4, 5]);
}
{
  function test(n, k, arr) {
    if (arr.length < k) {
      console.log("NO");
    }
    let map = new Map();
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i - 1] != i) {
        map.set(i, arr[i - 1]);
      }
    }
    if (map.size <= 0) {
      console.log("YES");
      console.log(0);
    } else if (map.size == 2) {
      console.log("YES");
      let arr = Array.from(map.keys());
      console.log(arr[0] + " " + arr[1]);
    }
  }
  // test(5, 3, [1, 5, 3, 4, 2]);
  // 12345;
  // 51234;
}
{
  // var ary = Array(3);
  // ary[0] = 2;
  // let res = ary.map(function (elem) {
  //   return "1";
  // });
  function sidEffecting(ary) {
    ary[0] = ary[2];
  }
  function bar(a, b, c) {
    c = 10;
    sidEffecting(arguments);
    console.log(a, b, c);
    return a + b + c;
  }
  // console.log(bar(1, 1, 1));
}
{
  // console.log(Number.MIN_VALUE > 0);
  // console.log([1 < 2 < 3, 3 < 2 < 1]);
  // console.log([[[2]]].toString());
  // 3.toString()
  //   3..toString()
  //   3...toString()
  (function () {
    var x = (y = 1);
  })();
  // console.log(y);
  // console.log(x);
  function test(params) {
    console.log(a);
    var a;
  }
  // test();
  let a = /123/;
  let b = /123/;
  // console.log(a === b);
}
{
  var a = [1, 2, 5],
    b = [1, 2, 3],
    c = [1, 2, 4];
  // console.log(a < c);
}
{
  var a = {},
    b = Object.prototype;
  // console.log(Object.prototype.__proto__);
  // console.log([a.prototype, Object.getPrototypeOf(a) === b]);
}
{
  function f() {}
  var a = f.prototype,
    b = Object.getPrototypeOf(f);
  // console.log(a === b);
}
{
  function foo(params) {}
  foo.name = "yms";
  // console.log(foo);
}
{
  let str = "asda";
  let str1 = new String("yms");
  // console.log(typeof str1);
}
{
  const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "前端收割机" }];
  // console.log(arr.flat(1));
  function _flat(arr, num = 1) {
    return num > 0
      ? arr.reduce((pre, cur) => {
          if (Array.isArray(cur)) {
            return pre.concat(_flat(cur, num - 1));
          } else {
            return pre.concat(cur);
          }
        }, [])
      : arr.slice();
  }
  // console.log(_flat(arr, 1));
}
{
  const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "前端收割机" }];
  let res = [];
  function _flat(arr, num = 1) {
    if (num <= 0) {
      res = res.concat(arr.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        let flag = num;
        const element = arr[i];
        if (Array.isArray(element)) {
          _flat(element, flag - 1);
        } else {
          res = res.concat(element);
        }
      }
    }
  }
  // _flat(arr, 2);
  // console.log(res);
}
//深拷贝 广度优先
//难点是如何对应层级去拷贝
{
  let obj = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
      f: {
        g: 5,
        h: 6,
      },
    },
  };
  function deepclone(obj) {
    let queue = [];
    let newObj = {};
    queue.push({
      original: obj,
      copy: newObj,
    });
    while (queue.length) {
      let { original, copy } = queue.shift();
      for (const key in original) {
        if (Object.hasOwnProperty.call(original, key)) {
          if (typeof original[key] === "object" && original[key] !== null) {
            copy[key] = Array.isArray(original[key]) ? [] : {};
            queue.push({
              original: original[key],
              copy: copy[key],
            });
          } //判断其他类型，这里只考虑基本类型
          else {
            copy[key] = original[key];
          }
        }
      }
    }
    return newObj;
  }
  // console.log(deepclone(obj));
}
{
  let str = "[1,2,3,4];3";
  let arr = str.split(";");
  // console.log(arr[0]);
  let reg = /([|])/g;
  let a = "[1,2,3,4]";
  // console.log(a.replace(reg, ""));
}
{
  let str = "2023-01-01 11:11:11";
  let arr = str.split(" ");
  let reg = /(\d*)-(\d*)-(\d*)/;
  let res1 = arr[0].match(reg);
  let year = res1[1];
  let month = Number(res1[2]);
  let day = Number(res1[3]);
  let reg1 = /(\d*):(\d*):(\d*)/;
  let res2 = arr[1].match(reg1);

  // console.log(res2);
  // console.log(year, month, day);
}
{
  function test(params) {
    console.log(this);
  }
  // test.call(null);
}
{
  // console.log(0 == "0");
  // console.log(Number(undefined));
}
//setTimeout 实现setTimetval
{
  // function _setInterval(fn, time) {
  //   function test(params) {
  //     fn();
  //     setTimeout(test, time);
  //   }
  //   setTimeout(test, time);
  // }
  // _setInterval(() => {
  //   console.log(123);
  // }, 1000);
}
//千分位分隔符
{
  let str = "1234564.110";
  function test(str) {
    let arr = str.split(".");
    let reg = /(\d)(?=(\d{3})+$)/g;
    console.log(
      arr[0].replace(reg, ($1) => {
        return $1 + ",";
      })
    );
  }
  // test(str);
}
{
  let obj = {
    a_b: "aaa_b",
    aaa_bb: "a_b",
  };
  let reg = /(_)([a-zA-Z])/g;
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      key.replace(reg, ($1, $2, $3) => {
        // console.log($3);
        return $3.toUpperCase();
      });
    }
  }
  // console.log(obj);
}
//首尾相同
{
  function test(str) {
    let path = "";
    // let set = [];
    let num = 0;
    function dfs(path, str, index) {
      // console.log(path);
      if (path[0] == path[path.length - 1]) {
        // set.push(path);
        num++;
      }
      for (let i = index; i < str.length; i++) {
        path += str[i];
        dfs(path, str, i + 1);
        path = path.slice(0, -1);
      }
    }
    dfs(path, str, 0);
    console.log(num - 1);
  }
  // test("gsagwg"); //28
}
{
  // var a;
  // console.log(a);
  // function fn(name, age) {
  //   let obj = {
  //     name: name,
  //     age: age,
  //   };
  //   return obj;
  // }
  // Object.prototype.ss = function () {
  //   console.log(this.name, this.age);
  // };
  // let a = fn("li", 12);
  // a.ss();
  // console.log(a.hasOwnProperty(ss) === false);
  // 1.a.ss() 输出 li ages is 12
  // 2.a.hasOwnproperty(ss) === false
}
{
  // let a = {};
  // console.log(a.toString());
}
{
  // try {
  //   console.log(123);
  //   throw Error(66);
  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   console.log("finally");
  // }
}
// 手写并发请求,最多同时处理2个
{
  class Scheduler {
    constructor() {
      this.tasks = [];
      this.pool = [];
      this.flag = true;
    }
    add(promiseCreator) {
      if (this.pool.length < 2) {
        let p = promiseCreator();
        this.pool.push(p);
        p.then(() => {
          this.pool.shift();
          if (this.tasks.length) {
            this.add(this.tasks.shift());
          }
        });
      } else {
        this.tasks.push(promiseCreator);
      }
    }
  }

  const timeout = (time) =>
    new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  const scheduler = new Scheduler();
  const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)));
  };
  // addTask(1000, "1");
  // addTask(500, "2");
  // addTask(300, "3");
  // addTask(400, "4");
  // output: 2 3 1 4
  // 一开始，1、2两个任务进入队列
  // 500ms时,  2完成，输出2，任务3进队
  // 800ms时,  3完成，输出3，任务4进队
  // 1000ms时, 1完成，输出1
  // 1200ms时, 4完成，输出4
}
{
  function test(n, arr) {
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        if (arr[i + 1] < arr[(i + 2) % n]) {
          console.log("NO");
          return false;
        }
        [arr[i], arr[(i + 1) % n]] = [arr[(i + 1) % n], arr[i]];
      }
    }
    console.log("YES");
    return true;
  }
  // console.log(test(4, [4, 3, 2, 1]));
}
// {
//   console.log(2 % 4);
// }
{
  function findSimilarStrings(strings) {
    const similarStrings = [];
    const countMap = new Map();

    for (const str of strings) {
      // 初始化字母计数的哈希表
      const charCount = {};
      for (const char of str) {
        // charCount.set(char, (charCount.get(char) || 0) + 1);
        charCount[char] = (charCount[char] || 0) + 1;
      }
      let arr = Object.keys(charCount).sort();

      arr = arr.map((item) => {
        return item + charCount[item];
      });
      // 将字母计数的哈希表转换为字符串表示
      const countString = JSON.stringify(arr);
      console.log(countString);
      // 检查是否存在相似的字符串
      if (countMap.has(countString)) {
        countMap.set(countString, countMap.get(countString) + 1);
      } else {
        countMap.set(countString, 1);
      }
    }
    let num = 0;

    for (const [key, value] of countMap) {
      function fac(n) {
        return n > 1 ? n * fac(n - 1) : 1;
      }
      num += fac(value) / 2;
    }
    return num;
  }
  // console.log(findSimilarStrings(["abcbd", "dbcba", "abcd", "abcd", "adbc", "aa", "aa"]));
}
//数组扁平 不用递归 指定层数
{
  let arr = [1, 2, 3, [4, [5, [6]], [7]]];
  function flat(arr) {
    let res = [];
    let stack = [arr];
    while (stack.length) {
      let item = stack.shift();
      if (Array.isArray(item)) {
        stack.unshift(...item);
      } else {
        res.push(item);
      }
    }
    return res;
  }
  // console.log(flat(arr));
}
{
  let arr = [1, 2, 3, [4, [5, [6]], [7]]];
  function flat(arr, n) {
    if (n <= 0) {
      return arr;
    } else {
      return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur, n - 1) : cur);
      }, []);
    }
  }
  // console.log(flat(arr, 2));
}
{
  // const a = require("./common");
  // console.log(a);
}
// 手撕深拷贝，用广度优先算法。
{
  let obj = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
      f: {
        g: 5,
        h: 6,
      },
    },
  };
}
//珂里化
{
  function myCurried(fn) {
    let argArr = [];
    return function curry(...args) {
      argArr.push(...args);
      if (argArr.length >= fn.length) {
        return fn(...argArr);
      } else {
        return curry;
      }
    };
  }

  function sum(a, b, c, d, e) {
    return a + b + c + d + e;
  }
  // let resFunc = myCurried(sum);
  // console.log(resFunc(1, 3, 4)(1)(23));
}
//手撕快排(双指针)
{
  let arr = [3, 5, 2, 1, 6, 4];
  function test(arr) {
    quickSort(0, arr.length - 1, arr);
    return arr;
    function quickSort(left, right, arr) {
      if (left > right) {
        return;
      }
      let base = arr[left];
      let i = left,
        j = right;
      //整个过程 i和j不会交叉
      while (i !== j) {
        //右边先找到比base小的数然后停止
        while (arr[j] >= base && i < j) {
          j--;
        }

        //左边找到比base大的数
        while (arr[i] <= base && i < j) {
          i++;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      arr[left] = arr[i];
      arr[i] = base;
      quickSort(left, i - 1, arr); //基准值左边
      quickSort(i + 1, right, arr); //基准值右边
    }
  }
  // console.log(test(arr));
}
//双指针排序
{
  let arr = [3, 5, 2, 1, 6, 4];
}
{
  let arr = [1, 2, 3];
  let proxy = new Proxy(arr, {
    get(arr, key) {
      console.log("数组被获取");
      return arr[key];
    },
    set(arr, key, newvalue) {
      console.log(newvalue, key);
      console.log("数组被修改");
      arr[key] = newvalue;
    },
  });
}
{
  // console.log(1 < 1.01);
}
{

}
