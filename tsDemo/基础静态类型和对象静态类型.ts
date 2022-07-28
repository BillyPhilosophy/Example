// 基础静态类型有  number string null undefined boolean symbol void
const num: number = 1;
const text: string = '文本';
const flag: boolean = true


//对象静态类型有  object array class function

const person: {
	uname: string,
	age: number
} = {
	uname: 'dong',
	age: 18
}

const persons :string [] = ['dong','wang'];

class PersonOrigin{}
const single :PersonOrigin = new PersonOrigin();

const personFn :()=>string = ()=> 'wenben'