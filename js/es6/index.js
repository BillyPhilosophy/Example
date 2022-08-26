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

// const proto = {
//   foo: 'hello'
// };

// const obj = {
//   foo: 'world',
//   find() {
//     return super.foo;
//   }
// };
// // Object.create
// Object.setPrototypeOf(obj, proto);
// obj.find() // "hello"
// console.log(obj.find());

// class C {
//   p=12;
//   m(){}
// }

// let c = new C();
// c.m();
// let descriptor1 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(c),'m');
// console.log(descriptor1);
// let clonec = {...c};
// console.log(clonec.p);
// clonec.m();


// function D (){
//   this.p = 13
//   this.fn = ()=>{console.log('fn')}
// };
// D.prototype = {
//   m(){},
//   testprop:'test'
// }

// let d = new D();
// let descriptor1 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d),'m');
// console.log(descriptor1);

// // Object.getOwnPropertyDescriptor只能获取对象自有属性，原型链上的无法获取
// let descriptor1 = Object.getOwnPropertyDescriptor(d,'testprop')//undefined
// let descriptor2 = Object.getOwnPropertyDescriptor(d,'m')//undefined
// let descriptor3 = Object.getOwnPropertyDescriptor(d,'fn')//正常打印数据属性对象
// let cloned = {...d};
// console.log(cloned.testprop);//undefined
// cloned.fn()//正常
// cloned.m()//报错



// Proxy
// var proxy = new Proxy({}, {
//   get: function(target, propKey,receiver) {
//     console.log(target);
//     console.log(propKey);
//     console.log(receiver);
//     return 35;
//   }
// });
// console.log(proxy.name)

// proxy
// var handler = {
//   get:function(target,name){
//       console.log('get方法')
//       return 123
//   },
//   set:function(target,name,value){
//       console.log('set方法')
//       target[name] = value
//   }
// }
// var proxy = new Proxy({},handler)
// console.log(proxy.name)
// console.log(proxy.time)
// proxy.title = '测试代码'
// console.log(proxy.title)


// let obj = {
//   proxy: new Proxy({}, {
//     get:function(target,name){
//       console.log('get方法')
//       return 123
//   },
//   }) 
// };

// let obj = {
  
// };

// let proxy = new Proxy({}, {
//   get:function(target,name){
//     console.log('get方法')
//     return 123
//   }
// }) 
// let obj = Object.create(proxy)

// console.log(obj.name);

var object = { proxy: new Proxy({}, {
  get:function(target,name){
    console.log('get方法')
    return 123
  }
})};

console.log(object.name);