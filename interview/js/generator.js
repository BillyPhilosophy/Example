// function* f(x) {
//   var y = yield x + 10;
//   console.log(y);
//   yield x + y;
//   console.log(x,y);
//   return x + 30;
// }
// var g = f(1);
// console.log(g); // f {<suspended>}
// console.log(g.next()); // {value: 11, done: false}
// console.log(g.next(50)); // {value: 51, done: false} // y被赋值为50
// console.log(g.next()); // {value: 31, done: true} // x,y 1,50
// console.log(g.next()); // {value: undefined, done: true}

function* callee() {
  yield 100;
  yield 200;
  return 300;
}
function* f(x) {
  yield x + 10;
  yield* callee();
  yield x + 30;
}
var g = f(1);
console.log(g); // f {<suspended>}
console.log(g.next()); // {value: 11, done: false}
console.log(g.next()); // {value: 100, done: false}
console.log(g.next()); // {value: 200, done: false}
console.log(g.next()); // {value: 31, done: false}
console.log(g.next()); // {value: undefined, done: true}

