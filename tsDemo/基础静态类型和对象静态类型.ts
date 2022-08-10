// 基础静态类型有  number string null undefined boolean symbol void
const num: number = 1;
const text: string = '文本';
const flag: boolean = true;

let nums : number;
nums = 123;
let numsInference = 123;
let nums1 = 123;

// let obj : null;
// obj = undefined


//对象静态类型有  object array class function

const person: {
	uname: string,
	age: number
} = {
	uname: 'dong',
	age: 18
}

let persons :string [];
persons = ['123','313']
class PersonOrigin{}
const single :PersonOrigin = new PersonOrigin();

const personFn :()=>string = ()=> 'wenben';
let date1 : Date;
date1 = new Date()
