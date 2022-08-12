## 一、字符串的新增方法
> ### 实例方法：includes(), startsWith(), endsWith()
> includes()：返回布尔值，表示是否找到了参数字符串。
startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
这三个方法都支持第二个参数，表示开始搜索的位置。 
```
let s = 'Hello world!';
s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```
> ### 实例方法：repeat()
> repeat方法***返回一个新字符串***，表示将原字符串重复n次。
```
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```
> ### 实例方法：padStart()，padEnd()
> 如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串
```
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
//如果省略第二个参数，默认使用空格补全长度。
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '
```
> ### 实例方法：replaceAll()
replaceAll()方法，可以一次性替换所有匹配。它的用法与replace()相同，返回一个新字符串，不会改变原字符串。第一个参数可以是一个字符串，也可以是一个全局的正则表达式（带有g修饰符）。如果不是全局正则会报错
```
// 不报错
'aabbcc'.replace(/b/, '_')

// 报错
'aabbcc'.replaceAll(/b/, '_')
```

> ### 实例方法：at()
at()方法接受一个整数作为参数，返回参数指定位置的字符，支持负索引（即倒数的位置）。如果参数位置*超出了字符串范围，at()返回undefined。*
```
const str = 'hello';
str.at(1) // "e"
str.at(-1) // "o"
```
## 二、数组的扩展
> ### Array.of()
Array.of()方法用于将一组值，转换为数组。<br>
Array.of()总是返回参数值组成的数组。如果没有参数，就返回一个空数组。
```
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
```
> ### 实例方法：find()，findIndex()，findLast()，findLastIndex()
find()返回的是找到返回值为true的成员，findIndex()与find()用法基本一致，只是返回的是成员在数组中的位置，如果找不到将会返回-1；
find()和findIndex()都是从数组的0号位，依次向后检查。ES2022 新增了两个方法findLast()和findLastIndex()，从数组的最后一个成员开始，依次向前检查，其他都保持不变。
```
const array = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 }
];

array.findLast(n => n.value % 2 === 1); // { value: 3 }
array.findLastIndex(n => n.value % 2 === 1); // 2
```
> ### 实例方法：fill()
fill方法使用给定值，填充一个数组。fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
```
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]
```
fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。`['a', 'b', 'c'].fill(7, 1, 2) // ['a', 7, 'c']`。<br>
注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
```
let arr = new Array(3).fill({name: "Mike"});
arr[0].name = "Ben";
arr
// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

let arr = new Array(3).fill([]);
arr[0].push(5);
arr
// [[5], [5], [5]]
```
> ### 实例方法：entries()，keys() 和 values()
> ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
```
let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']
```
> ###  实例方法：flat()，flatMap()
多维数组的拍平,该方法返回一个新数组，对原数据没有影响。
```
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]
```
flat()默认只会“拍平”一层，如果想要“拍平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拍平的层数，默认为1。如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。如果原数组有空位，flat()方法会跳过空位。
```
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]
[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]

[1, 2, , 4, 5].flat()
```
flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
```
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```
> ### 实例方法at()
数组也新增了at方法 支持负索引 at(-1)既是数组的最后一项

## 三、对象的扩展
> ### super关键字
> this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。
```
const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};
// Object.create 不适用此场景
Object.setPrototypeOf(obj, proto);
obj.find() // "hello"
```

> ### 扩展运算符注意点 
> 类的方法都是不可枚举的?此处有疑问 后来发现挂载在原型上的属性和方法也都不可枚举（理解错误其实原因是，非自身的属性而不清楚是否不可枚举，但是理论上不可枚举，否则容易被遍历出来）

对象的扩展运算符，只会返回参数***对象自身***的、可枚举的属性，这一点要特别小心，尤其是用于类的实例对象时。

```
class C {
  p = 12;
  m() {}
}

let c = new C();
let clone = { ...c };

clone.p; // ok
clone.m(); // 报错

es5写法也一样
function D (){
  this.p = 13
  this.fn = ()=>{console.log('fn')}
};
D.prototype = {
  m(){},
  testprop:'test'
}

let d = new D();
// Object.getOwnPropertyDescriptor只能获取对象自有属性，原型链上的无法获取
let descriptor1 = Object.getOwnPropertyDescriptor(d,'testprop')//undefined
let descriptor2 = Object.getOwnPropertyDescriptor(d,'m')//undefined
let descriptor3 = Object.getOwnPropertyDescriptor(d,'fn')//正常打印数据属性对象
let cloned = {...d};
console.log(cloned.testprop);//undefined
cloned.fn()//正常
cloned.m()//报错
```
对象的扩展运算符等同于使用Object.assign()方法。都是浅拷贝
```
let aClone = { ...a };
// 等同于
let aClone = Object.assign({}, a);
```
上面的例子只是拷贝了对象实例的属性，如果想完整克隆一个对象，还拷贝对象原型的属性，可以采用下面的写法。
```
// 写法一
const clone1 = {
  __proto__: Object.getPrototypeOf(obj),
  ...obj
};

// 写法二
const clone2 = Object.assign(
  Object.create(Object.getPrototypeOf(obj)),
  obj
);

// 写法三
注意：*Object.create(proto, propertiesObject),propertiesObject参数将为新创建的对象添加指定的属性值和对应的属性描述符。这些属性对应于 Object.defineProperties() 的第二个参数。*
const clone3 = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)
```
*上面代码中，写法一的__proto__属性在非浏览器的环境不一定部署，因此推荐使用写法二和写法三。*
> ### AggregateError 错误对象
>为了配合新增的Promise.any()方法,引入一个新的错误对象AggregateError,后面结合Promise.any一起总结

<br>

## 四、对象的新方法
> ### Object.getOwnPropertyDescriptors()
ES5 的Object.getOwnPropertyDescriptor()方法会返回某个对象属性的描述对象（descriptor）。ES2017 引入了Object.getOwnPropertyDescriptors()方法，返回指定对象所有<font color="red">自身属性（非继承属性）</font>的描述对象。
> ### __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf() 
 __proto__用来读取或设置当前对象的原型对象（prototype）。只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。。因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性，而是使用下面的Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。
> ### Object.keys()，Object.values()，Object.entries()
Object.keys方法，返回一个数组，成员是参数<font color="red">对象自身的（不含继承的）所有可遍历（enumerable）属性</font>的键名。Object.keys配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用。
```
let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}
//entries(obj) = [[a,1],[b,2],[c,3]]
for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}
```
> ### Object.fromEntries()
Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
```
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }
```
***<font color='red'>该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。</font>***
```
// 例一
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

Object.fromEntries(entries)
// { foo: "bar", baz: 42 }

// 例二
const map = new Map().set('foo', true).set('bar', false);
Object.fromEntries(map)
// { foo: true, bar: false }
```
该方法的一个用处是配合URLSearchParams对象，将查询字符串转为对象。这往往在解析url时十分有用
```
Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
// { foo: "bar", baz: "qux" }
```
> ### Object.hasOwn() 
对象实例有一个hasOwnProperty()方法，可以判断某个属性是否为原生属性。ES2022 在Object对象上面新增了一个静态方法Object.hasOwn()，也可以判断是否为自身的属性。</br>
**Object.hasOwn()的一个好处是，对于不继承Object.prototype的对象不会报错，而hasOwnProperty()是会报错的。**
```
const obj = Object.create(null);

obj.hasOwnProperty('foo') // 报错
Object.hasOwn(obj, 'foo') // false
//obj 没有原型 obj.__proto__ 为 undefined
```
## 五、运算符的扩展
> ### 指数运算符 (**)
```
2**2 //4
2**3 //8
let a = 2;
a**=2 //4 可以幂等
```
> ### 链判断运算符
判断对象属性是否存在
```
//before
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';
//after
const firstName = message?.body?.user?.firstName || 'default';
```
判断方法是否存在
```
iterator.return?.()
//上面代码中，iterator.return如果有定义，就会调用该方法，否则iterator.return直接返回undefined，不再执行?.后面的部分。
```
> ### Null 判断运算符 
```
const headerText = response.settings.headerText ?? 'Hello, world!';
const animationDuration = response.settings.animationDuration ?? 300;
const showSplashScreen = response.settings.showSplashScreen ?? true;
```
上面代码中，默认值只有在左侧属性值为null或undefined时，才会生效。

这个运算符的一个目的，就是跟链判断运算符?.配合使用，为null或undefined的值设置默认值。
> ### 逻辑赋值运算符
```
// 或赋值运算符
x ||= y
// 等同于
x || (x = y)

// 与赋值运算符
x &&= y
// 等同于
x && (x = y)

// Null 赋值运算符
x ??= y
// 等同于
x ?? (x = y)
```
## 六、Symbol的一些注意点
> ### Symbol 值作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。<br>但是，它也不是私有属性，有一个Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
```
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols
// [Symbol(a), Symbol(b)]

const obj = {};
const foo = Symbol('foo');

obj[foo] = 'bar';

for (let i in obj) {
  console.log(i); // 无输出
}

Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [Symbol(foo)]
```
另一个新的 API，**Reflect.ownKeys()方法**可以返回所有类型的键名，包括常规键名和 Symbol 键名。
```
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj)
//  ["enum", "nonEnum", Symbol(my_key)]
```
**由于以 Symbol 值作为键名，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。**
> ### Symbol.for()，Symbol.keyFor()
> 有时，我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点,它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其<font color="red">***注册到全局。注意，Symbol.for()为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行。***</font>Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。
```
function foo() {
  return Symbol.for('bar');
}

const x = foo();
const y = Symbol.for('bar');
console.log(x === y); // true
```
> ### 内置的Symbol值（此处有点多，直接跳转=>）[8.内置的Symbol值](https://es6.ruanyifeng.com/#docs/symbol)

## 七、










