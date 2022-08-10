// rest 参数 必须要放到多个参数的最后面

// let fn = (...arg) => {console.log(arg)};

// fn(1,2,3)

// const array = [
//   { value: 1 },
//   { value: 2 },
//   { value: 3 },
//   { value: 4 }
// ];

// array.findLast(n => n.value % 2 === 1); // { value: 3 }
// array.findLastIndex(n => n.value % 2 === 1); // 2

const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};
// Object.create
Object.setPrototypeOf(obj, proto);
obj.find() // "hello"
console.log(obj.find());