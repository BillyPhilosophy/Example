// 柯里化函数
function curry(fn) {
  console.log(fn.length);
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
}

// 原始的函数
function add(a, b, c) {
  return a + b + c;
}

// 使用柯里化创建一个新函数
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)); //返回一个状态函数需要继续传参才能执行
// console.log(curriedAdd(1)(2)(3)); // 输出 6
// console.log(curriedAdd(1, 2)(3)); // 输出 6
// console.log(curriedAdd(1)(2, 3)); // 输出 6
// console.log(curriedAdd(1, 2, 3)); // 输出 6


// 部分函数应用函数
function partial(fn, ...partialArgs) {
  return function (...args) {
    return fn(...partialArgs, ...args);
  };
}

// 原始的函数
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

// 使用部分函数应用创建一个新函数
const greetHello = partial(greet, 'Hello');

console.log(greetHello('Alice')); // 输出 "Hello, Alice!"
console.log(greetHello('Bob'));   // 输出 "Hello, Bob!"


// 将普通函数转为柯里化函数
function convertToCurry(funct, ...args) {
  const argsLength = funct.length;
  return function (..._args) {
    _args.unshift(...args);
    if (_args.length < argsLength) return convertToCurry.call(this, funct, ..._args);
    return funct.apply(this, _args);
  }
}

var funct = (x, y, z) => x + y + z;
var addCurry = convertToCurry(funct);
// var result = addCurry(1)(2)(3);
// console.log(result); // 6