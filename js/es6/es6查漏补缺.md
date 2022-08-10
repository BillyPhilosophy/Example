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
字符串也新增了at方法 支持负索引 at(-1)既是数组的最后一项

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
> 类方法都是不可枚举的?此处有疑问  

对象的扩展运算符，只会返回参数对象自身的、可枚举的属性，这一点要特别小心，尤其是用于类的实例对象时。

```
class C {
  p = 12;
  m() {}
}

let c = new C();
let clone = { ...c };

clone.p; // ok
clone.m(); // 报错
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









