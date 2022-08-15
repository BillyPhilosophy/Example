# 总结下es5和es6的差异
>## ES5 oo编程
### 一些遗忘的点
+ in操作符在单独使用时会在通过对象能够访问给定属性时返回true<font color=red>无论该属性存在与实例中还是存在于原型当中</font>
+ 工厂函数的优缺点:解决了创建多个相似对象的问题，却没有解决对象识别问题（即怎么知道一个对象的类型）
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
+ 构造函数和工厂函数的区别：没有显式的创建对象直接把属性和方法赋值给this对象，没有return语句
+ 构造函数本质上和普通函数没有区别，只不过是否使用 new操作符调用，如果将构造函数直接当作函数使用，将把构造函数内部的属性和方法直接添加到window上。
+ es5中一些高频api：
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
  
--------------------------


>## ES6 class
