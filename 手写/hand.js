//并发请求
{
  function request(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(url);
      }, 1000);
    }).then((res) => {
      console.log(res);
    });
  }
  let max = 3;
  let pool = [];
  let urls = ["test", "test1", "test2", "test3", "test4", "test4", "test5"];
  async function test(params) {
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      let p = request(url);
      pool.push(p);
      if (pool.length >= max) {
        await Promise.race(pool);
      }
    }
  }
  //   test();
}
{
  let obj = {};
  function isNullObj(obj) {}
}
{
  let obj = {
    a: function test(params) {
      console.log(123);
    },
    b: new Date(),
  };
  console.log(new Date() instanceof Date);
  //   console.log(JSON.stringify(obj.b));
}
