## 1.基础类型
> ###  *ts中基本类型有number string null undefined boolean symbol void*

+ ###  number string boolean 类型  
  ```
  const num: number = 1;
  const text: string = '文本';
  const flag: boolean = true;
  let nums : number;
  nums = 123;
  const nums1: number;
  nums1 = 1 //error
  //注意const只能在连等中使用，无法在声名常量的类型后在进行赋值操作
  //void一般
  ```  
+ ### null undefined 类型  
  默认情况下null和undefined是所有类型的子类型。当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
  ```
  let u: undefined = undefined;
  let n: null = null;
  let obj : null;
  obj = undefined; //error
  let obj : object;
  obj = undefined;//error
  ```
+ ### symbol类型
+ ### void
  void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void.
  ```
  function warnUser(): void {
    console.log("This is my warning message");
  }
  ```
  声名void类型变量通常没用因为你只能为它赋予undefined和null
  ```
  let unusable: void = undefined;
  ```  
+ ### any 
  表示任意类型，当你不知道将要使用什么类型时any或是一个好的选择
+ ### never
  never类型表示的是那些永不存在的值的类型。一般为抛出异常的函数
+ ### 元组Tuple  
  (元组类型允许表示一个已知元素数量和类型的数组)
  ```
  let x: [string, number];
  // Initialize it
  x = ['hello', 10]; // OK
  ```  
> ### *对象静态类型object array class function date regex等除了基本数据类型的类型*
+ ### 例子
  ```
  let persons :string [];
  persons = ['123','313']
  class PersonOrigin{}
  const single :PersonOrigin = new PersonOrigin();

  const personFn :()=>string = ()=> 'wenben';
  let date1 : Date;
  date1 = new Date()
  ```
## 2.泛型

