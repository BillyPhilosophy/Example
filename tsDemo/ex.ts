// function identity(arg: any): any {
//     return arg;
// }
// let a = identity(1)
// function identity<T>(arg: T): T {
//     return arg;
// }
// let a = identity<string>('mystring')

// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);  // Array has a .length, so no more error
//     return arg;
// }

// let arr = loggingIdentity(['123',456,{a:1}])
// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: <U>(arg: U) => U = identity;

// let a = myIdentity('1')

// function identity<T>(arg: T): T {
//     return arg;
// }
// 字面量定义泛型函数
// let myIdentity: {<V>(arg: V): V} = identity;

// let a = myIdentity('1')
// 定义泛型接口
// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: GenericIdentityFn = identity;


// interface Lengthwise {
//     length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);  // Now we know it has a .length property, so no more error
//     return arg;
// }
// let a = loggingIdentity('1')
// let x = [0, 1, null];

// class Animal {

// }

// class Rhino extends Animal {

// }
// class Elephant extends Animal {
    
// }
// class Snake extends Animal {
    
// }

// let zoo = [new Rhino(), new Elephant(), new Snake()];

// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];

// 类型的兼容性
// interface Named {
//     name: string;
// }
// let x: Named;
// let y = { name: 'Alice', location: 'Seattle' };
// x=y;

// let x = () => ({name: 'Alice'});
// let y = () => ({name: 'Alice', location: 'Seattle'});

// x=y;
// y=x error


// 泛型  目前认为，类型变量可以随意写,官网示例一般用<T>或者<U>，但实际可以随便定义变量
// function ex <AU> (arg : AU): AU{
//     return arg
// }


// let a = ex([1])
// 联合类型
// padding: any可以写任何类型，但是这样会在编译时不出错，实际运行时却走到throw
// function padLeft(value: string, padding: any) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }
// padLeft('dongguangchao',undefined)
// 改写后
// function padLeft(value: string, padding: string | number) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }
// padLeft('dongguangchao',undefined)  编译期间就会出错
// 类型的别名
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//     if (typeof n === 'string') {
//         return n;
//     }
//     else {
//         return n();
//     }
// }
// 别名的泛型使用
// type Container<T> = { value: T };
// 我们可以添加类型参数并且在别名声明的  --->右侧传入(经尝试不传入类型的话(可以是基本类型，类类型，联合类型，函数类型等等各种类型)，T会被视作未声明的变量而报错)
// let a : Container<string | number>;
// a = {value:1}
// 在交叉类型中使用泛别名（一般也用于type进行继承的实现，type本身不能继承不像interface 可以使用extends）
// type LinkedList<T> = T & { next: LinkedList<T> };

// interface Person {
//     name: string;
// }

// var people: LinkedList<Person>;
// 此处的people应该怎么赋值？
// var s = people.name;
// var s = people.next.name;
// var s = people.next.next.name;
// var s = people.next.next.next.name;

// type Alias = { num: number }
// interface Interface {
//     num: number;
// }
// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;

// function f(x: number, y?: number) {
//     return x + (y || 0);
// }

// f(1, null); // error, 'null' is not assignable to 'number | undefined'
// interface Person {
//     name: string;
//     age: number;
// }

// let personProps: keyof Person;
// personProps = 'age'

// function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
// return names.map(n => o[n]);
// }

// interface Person {
//     name: string;
//     age: number;
// }
// let person: Person = {
//     name: 'Jarid',
//     age: 35
// };
// let strings: string[] = pluck(person, ['name']); // ok, string[]
// console.log(strings)

// let someValue: object = {a:1};

// let obj: object = (someValue as unknown as {b:1});
// console.log(obj);


// type Second = number; // 基本类型
// let time: Second = 10; // time的类型其实就是number类型

type SetUser = (name: string, age: number)=>void;

// let fn : SetUser = (name,age)=>{
//   return name+':'+age
// }
// let fn = (name:number,age:number):string=>{
//   return name+age;
// }
// console.log(fn(1,2))