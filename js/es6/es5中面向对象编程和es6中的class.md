# 总结下es5和es6的差异
>## ES5 oo编程
### 一些遗忘的点
+ in操作符在单独使用时会在通过对象能够访问给定属性时返回true<font color=red>无论该属性存在与实例中还是存在于原型当中</font>
+ 工厂函数模式的优缺点:解决了创建多个相似对象的问题，却没有解决对象识别问题（即怎么知道一个对象的类型）
  ```
  function(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
      alert(this.name)
    };
    return o;
  }
  let person1 = createPerson('zhangsan',18,'docter')
  let person2 = createPerson('lisi',19,'engineer')
  ```
+ 构造函数模式和工厂函数的区别：没有显式的创建对象直接把属性和方法赋值给this对象，没有return语句
+ 构造函数本质上和普通函数没有区别，只不过是否使用 new操作符调用，如果将构造函数直接当作函数使用，将把构造函数内部的属性和方法直接添加到window上。
+ es5中一些高频api：
  > + instanceof`person1  instanceof Person//true   person1  instanceof Object//true`
  > + isPrototypeOf()检测实例与原型的关系`Person.prototype.isProptypeOf(person1) //true`
  > + getPrototypeOf()方便的获取一个对象的原型`Object.getPrototypeOf(person1) = Person.prototype //true`
  > + hasOwnProperty()检测一个属性是否存在实例中
  > + 如何确定一个属性属于原型中？(下面是一个自定义函数)
    > ```
    > function hasPrototypeProperty(object,name){
      >   return !object.hasOwnProperty(name)&&(name in object)
      >}
    >```
  > + 获取实例的所有属性，不论是否可枚举 Object.getOwnPropertyNames() ,结果中包含了不可枚举的constructor属性

<br>

+ 原型模式的问题：第一它省略了构造函数传递初始化参数这一环节，结果所有的实例，第二共享的本性或成为原型模式的最大问题，如果只是基本值属性倒没什么，如果是引用类型值的属性来说，问题就比较大了
  ```
    function Person(){}
    Person.prototype = {
      constructor:Person,
      name:"aa",
      age:12,
      friends:['a','b'],
      sayName:function(){
        alert(this.name)
      }
    } 

    var person1 = new Person()
    var person2 = new Person()
    person1.friends.push('c')
    console.log(person1)//'a,b,c'
    console.log(person2)//'a,b,c'
    person1.friends === person2.friends //true
  ```  
+ 组合使用构造函数和原型模式，构造函数模式定义实例属性原型模式定义方法和共享属性，这种混合模式还支持向构造函数传递参数（取两者模式之长处互补）
  ```
    function (name,age){
      this.name = name;
      this.age = age;
      this.friends = ['a','b']
      
    }
    Person.prototype = {
      constructor:Person,
      sayName:function(){
        alert(this.name)
      }
    } 

    var person1 = new Person('xiaoming',18)
    var person2 = new Person('xiangwang',19)
    person1.friends.push('c')
    console.log(person1)//'a,b,c'
    console.log(person2)//'a,b'
    person1.friends === person2.friends //false
    person1.sayName === person2.sayName //true
  ```
+ 动态原型模式(所有信息都封装到动态监测)
  ```
  function Person(name,age){
    this.name = name;
    this.age = age;
    if(typeof this.sayName != 'function'){
      Person.prototype.sayName = function(){//不能使用对象字面量重新原型否则会切断实例与新原型之间的关系
        alert(this.name);
      }
    }
  }
  ```
+ 寄生构造函数模式
  + 除了使用 new 操作符并把使用的包装函数叫做构造函数之外，和工程模式并无而异
  + 这个模式只有在极特殊的情况下用到，比如我们不能直接更改Array的构造函数
  + 返回的对象和和构造函数或者构造函数的原型属性之间没有任何关系，简单理解->和在构造函数外创建此对象没有什么区别,也不能依赖instanceof操作符来确定对象的类型
  + 建议可以使用其他模式的情况下不使用该模式

+ 稳妥构造函数模式
  + 没有公共属性也不引用this对像
  + 不使用new操作符调用构造函数
    ```
    function Person(name,age){
      var o = new Object();
      //此处可以定义私有的属性和方法
      o.sayName = function(){
        alert(name)
      }
      return o
    }
    ```
### es5继承
许多oo语言都支持两种继承方式：接口继承和实现继承<br>
es只支持实现继承ts中实现了接口继承



--------------------------


>## ES6 class
