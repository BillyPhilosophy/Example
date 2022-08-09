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

// function ex <AU> (arg : AU): AU{
//     return arg
// }


// let a = ex([1])