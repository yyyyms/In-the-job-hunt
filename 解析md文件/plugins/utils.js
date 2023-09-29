const { readFileSync, writeFileSync, mkdir } = require("fs");
const { resolve, join } = require("path");
function random() {
  return new Date().getTime() + parseInt(Math.random() * 1000);
}
function parseImgs(_imgs, path) {
  const distpath = path;
  _imgs.forEach((imgUrl) => {
    let imgContent = readFileSync(imgUrl);
    let targetPath = imgUrl.split("\\")[4];
    console.log(targetPath);
    mkdir(resolve(distpath, "imgs"), { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }
      writeFileSync(join(distpath, "imgs", targetPath), imgContent);
    });
  });
}
module.exports = {
  random,
  parseImgs,
};
