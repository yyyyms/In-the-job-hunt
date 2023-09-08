//util
function addClass(element, name) {
  element.classList.add(name);
}
function removeClass(element, name) {
  element.classList.remove(name);
}
let demo = document.getElementById("demo");
let main = document.querySelector("#main"); //父元素代理事件
main.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.value);
  let listname = e.target.value;
  addClass(demo, listname);
  setTimeout(() => {
    removeClass(demo, listname);
  }, 1000);
});

(function () {
  var arr = [2, 3, 4].map(function (item, index) {
    return item + 1;
  });
  console.log(arr);
})();
