self.addEventListener("message", function (e) {
  console.log("收到来自其他页面的消息", e.data);
  //发送消息给其他页面
  this.self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage("hello,其他页面");
    });
  });
});
