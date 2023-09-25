const reg_mark = /^(.+?)\s/; //匹配 '# 这是一个 h1 的标题' 中的 #标识
const reg_sharp = /^\#/;
const reg_crossbar = /^\-/; //匹配 -
const reg_numer = /^\d\./; //匹配1. 2.
const { random } = require("./utils");
/**
 * 
{
  'h1-1695281231852': { tape: 'single', tags: [ '<h1>这是一个 h1 的标题\r</h1>' ] },
  'ul-1695281232269': {
    tape: 'wrap',
    tags: [
      '<li> 这是 ul 列表第 1 项\r</li>',
      '<li> 这是 ul 列表第 2 项\r</li>',
      '<li> 这是 ul 列表第 3 项\r</li>',
      '<li> 这是 ul 列表第 4 项\r</li>'
    ]
  },
  'h2-1695281232791': { tape: 'single', tags: [ '<h2>这是一个 h2 的标题\r</h2>' ] },
  'ol-1695281232502': {
    tape: 'wrap',
    tags: [
      '<li> 这是 ol 列表的第 1 项\r</li>',
      '<li> 这是 ol 列表的第 2 项\r</li>',
      '<li> 这是 ol 列表的第 3 项\r</li>',
      '<li> 这是 ol 列表的第 4 项\r</li>'
    ]
  }
}
 */
function compileHTML(_mdArr) {
  const _htmlPool = createTree(_mdArr);
  //   console.log(_htmlPool);
  let _htmlStr = "";
  let item;
  for (const key in _htmlPool) {
    item = _htmlPool[key];
    // console.log(item);
    if (item.type === "single") {
      _htmlStr = _htmlStr + item.tags[0];
    } else if (item.type == "wrap") {
      let _list = "";
      item.tags.forEach((tag) => {
        _list += tag;
      });
      _htmlStr += `<${key.split("-")[0]}>`;
      _htmlStr += `${_list}`;
      _htmlStr += `</${key.split("-")[0]}>`;
    }
  }
  //   console.log(_htmlStr);
  return _htmlStr;
}
function createTree(mdArr) {
  let _lastMark = "";
  let _htmlPool = {}; //定义树形结构方便生成html结构
  let _key = 0;
  mdArr.forEach((mdFragment) => {
    const matched = mdFragment.match(reg_mark);
    if (matched) {
      const mark = matched[1];
      const input = matched["input"];
      //处理 #
      if (reg_sharp.test(mark)) {
        const tag = `h${mark.length}`;
        const tagContent = input.replace(reg_mark, "");
        if (_lastMark === mark) {
          _htmlPool[`${tag}-${_key}`].tags = [..._htmlPool[`${tag}-${_key}`].tags, `<${tag}>${tagContent}</${tag}>`];
        } else {
          _key = random();
          _lastMark = mark;
          _htmlPool[`${tag}-${_key}`] = {
            type: "single",
            tags: [`<${tag}>${tagContent}</${tag}>`],
          };
        }
      }
      //处理 - 无序列表
      if (reg_crossbar.test(mark)) {
        const tag = "li";
        const tagContent = input.replace(reg_crossbar, "");

        if (_lastMark === mark) {
          _htmlPool[`ul-${_key}`].tags = [..._htmlPool[`ul-${_key}`].tags, `<${tag}>${tagContent}</${tag}>`];
        } else {
          _key = random();
          _lastMark = mark;
          _htmlPool[`ul-${_key}`] = {
            type: "wrap",
            tags: [`<${tag}>${tagContent}</${tag}>`],
          };
        }
      }
      //处理 1. 有序列表
      if (reg_numer.test(mark)) {
        const tag = "li";
        const tagContent = input.replace(reg_numer, "");
        if (reg_numer.test(_lastMark)) {
          _htmlPool[`ol-${_key}`].tags = [..._htmlPool[`ol-${_key}`].tags, `<${tag}>${tagContent}</${tag}>`];
        } else {
          _key = random();
          _lastMark = mark;
          _htmlPool[`ol-${_key}`] = {
            type: "wrap",
            tags: [`<${tag}>${tagContent}</${tag}>`],
          };
        }
      }
    }
  });
  return _htmlPool;
}
module.exports = {
  compileHTML,
};
