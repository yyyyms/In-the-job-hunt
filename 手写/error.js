let a = 0;
function test(params) {
  console.log(1);
  a++;
  if (a < 100) {
    test();
  } else {
    return;
  }
}
test();
