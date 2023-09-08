### JSON.stringfy 深拷贝的问题

- 对象上的 undefined function 序列化后会消失,
- **null 依旧是 null**
- 时间对象，变成字符串
- 正则对象变成空对象
- 对象循环引用时，会报错
- 对象中的 NaN Infinity 和-Infinity 变成 null
- 对象的原型链会丢失
