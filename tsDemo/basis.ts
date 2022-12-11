// 1.字面量进行类型声明 值只能是其本身
// let a : 10;
// a = 10;//ok
// a = 11;//error
// 使用场景
// let b : 'male'|'female' ;//;声明联合类型
// b='1'

// 2.any表示任意类型，一个变量设置类型为any时，ts编译此变量时相当于关闭了其类型检测，
//let d: any;

// 声明变量如果不指定类型，则TS会直接将其解析为any类型
// let d;//隐式的any

//3.unknown 表示未知类型的值（用的时候看起来和any很像，但是不能随意将unknown的变量赋值给其他的变量，而any则可以随意霍霍别的变量）
// let d: unknown;
// d = true;
// d = 'try';
// d = 123;
// let e:any;
// e = 'hello';
// e = 123;
// e = true;

// let s:string;

// s = d;//报错
// s = e;//不报错且会污染s的类型

// let f:unknown;
// f = d;//unknown可以赋值给unknown
// e = d;//unknown可以赋值给any
//unknown可以理解为类型安全的any，unknown类型的变量不可以直接赋值给其他类型的变量
// 可以使用类型判断|断言 将unknown赋值给其他类型的变量
// if(typeof d === 'string'){
//   s = d;
// }

// s = d as string;//断言



// 4.void表示空
// let fn = () :void=>{
// }

// 5.never表示永远不会返回接口（用来抛出异常）

// let fn2 = ():never =>{
//   throw new Error('我错了')
// }

// 5.object
// 直接声明为object意义不大，因为万物皆对象
// let a:object;
// a = {};
// a = ()=>{};
// 字面量声明object比较常用
// let b:{name:string};
// b = {name:'xiao'};
// let b:{name:string,age?:number};//?表示可选
// b = {name:'yiyi',age:1}//报错

// let b : {name:string,[propName:string]:any};//表示必须要有name属性[propName:string]表示声明了属性的类型为string，any则表示属性值的类型

// 声明函数
// let e : Function;//实际中基本用不到的声明方式
// let f :(a:number,b:number,...rest:any)=>number//函数结构的声明（使用箭头函数的写法来声明函数类型）...rest表示除了a，b外的任意入参


// 6.数组

// let g:Array<string|number>;
// g = [1,3,'123']

// 7.元组

// let h:[string,number];
// h = ['123',123];

// 8.enum 枚举

// enum Gender{
//   male,
//   famale
// }

// let i:{name:string,gender:Gender};

// i = {
//   name:'yahaha',
//   gender:Gender.male
// }

// 9.联合类型
// |表示或的联合类型
// let a:string|boolean;
// &表示且的意思
// let a:string & number;//可以这样写，但毫无意义，一个值不可能同时既是string又是number
// let a:{name:string}&{age:number}//正确写法

// 10.类型的别名
// 当你定义了这样一个类型 'haha'|'gege'|123|'123'|'asd'
// let b:'haha'|'gege'|123|'123'|'asd';
// let c:'haha'|'gege'|123|'123'|'asd';//用起来很麻烦

// type myType = 'haha'|'gege'|123|'123'|'asd';用别名来定义自己的类型
// let c:myType;
// c = 123











