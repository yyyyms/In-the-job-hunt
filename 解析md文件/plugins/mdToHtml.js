const { readFileSync } = require("fs");
const { resolve } = require("path");
const { compileHTML } = require("./compileHTML");

const INNER = "<!--inner-->";
class MdToHtmlPlugin {
  constructor({ template, filename }) {
    if (!template) {
      throw new Error("The config template must be configure");
    }
    this.template = template;
    this.filename = filename ? filename : "md.html";
  }
  apply(compiler) {
    compiler.hooks.emit.tap("md-to-html-plugin", (compilation) => {
      const _assets = compilation.assets; //资源集合
      const _mdContent = readFileSync(this.template, "utf8"); //md的内容
      const _templateHTML = readFileSync(resolve(__dirname, "template.html"), "utf8"); //html模板
      const _mdContentArr = _mdContent.split("\r\n");
      //   console.log(_mdContentArr);
      const _htmlStr = compileHTML(_mdContentArr);
      console.log(_htmlStr);
      const _finallHTML = _templateHTML.replace(INNER, _htmlStr); //最终的html
      //   console.log(_assets);
      _assets[this.filename] = {
        //为资源集合添加内容时
        source() {
          return _finallHTML;
        },
        size() {
          return _finallHTML.length;
        },
      };
    });
  }
}
module.exports = MdToHtmlPlugin;
