export 与 import 的复合写法
如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。

export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
上面代码中，export和import语句可以结合在一起，写成一行。但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。

模块的接口改名和整体输出，也可以采用这种写法。

// 接口改名
export { foo as myFoo } from 'my_module';

// 整体输出
export * from 'my_module';
默认接口的写法如下。

export { default } from 'foo';
具名接口改为默认接口的写法如下。

export { es6 as default } from './someModule';

// 等同于
import { es6 } from './someModule';
export default es6;
同样地，默认接口也可以改名为具名接口。

export { default as es6 } from './someModule';
ES2020 之前，有一种import语句，没有对应的复合写法。

import * as someIdentifier from "someModule";
ES2020补上了这个写法。

export * as ns from "mod";

// 等同于
import * as ns from "mod";
export {ns};
模块的继承
模块之间也可以继承。

假设有一个circleplus模块，继承了circle模块。

// circleplus.js

export * from 'circle';
export var e = 2.71828182846;
export default function(x) {
  return Math.exp(x);
}
上面代码中的export *，表示再输出circle模块的所有属性和方法。注意，export *命令会忽略circle模块的default方法。然后，上面代码又输出了自定义的e变量和默认方法。

这时，也可以将circle的属性或方法，改名后再输出。

// circleplus.js

export { area as circleArea } from 'circle';
上面代码表示，只输出circle模块的area方法，且将其改名为circleArea。

加载上面模块的写法如下。

// main.js

import * as math from 'circleplus';
import exp from 'circleplus';
console.log(exp(math.e));
上面代码中的import exp表示，将circleplus模块的默认方法加载为exp方法。

<font color=red>这样的设计，固然有利于编译器提高效率，但也导致无法在运行时加载模块。在语法上，条件加载就不可能实现。如果import命令要取代 Node 的require方法，这就形成了一个障碍。因为require是运行时加载模块，import命令无法取代require的动态加载功能。

const path = './' + fileName;
const myModual = require(path);

上面的语句就是动态加载，require到底加载哪一个模块，只有运行时才知道。import命令做不到这一点。

ES2020提案 引入import()函数，支持动态加载模块。 import编译加载，import()运行加载

import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。另外，import()函数与所加载的模块没有静态连接关系，这点也是与import语句不相同。import()类似于 Node.js 的require()方法，区别主要是前者是异步加载，后者是同步加载。

</font>

> import()的一些适用场合。
  + 按需加载。import()可以在需要的时候，再加载某个模块。
  ```
  button.addEventListener('click', event => {
    import('./dialogBox.js')
    .then(dialogBox => {
      dialogBox.open();
    })
    .catch(error => {
      /* Error handling */
    })
  });
  //上面代码中，import()方法放在click事件的监听函数之中，只有用户点击了按钮，才会加载这个模块。
  ```
> 条件加载 import()可以放在if代码块，根据不同的情况，加载不同的模块。
  ```
  if (condition) {
    import('moduleA').then(...);
  } else {
    import('moduleB').then(...);
  }
  //上面代码中，如果满足条件，就加载模块 A，否则加载模块 B。
  ```
> 动态的模块路径
  ```
  import(f())
  .then(...);
  //上面代码中，根据函数f的返回结果，加载不同的模块。
  ```
> 注意点

import()加载模块成功以后，这个模块会作为一个对象，当作then方法的参数。因此，可以使用对象解构赋值的语法，获取输出接口。
```
import('./myModule.js')
.then(({export1, export2}) => {
  // ...·
});
```
上面代码中，export1和export2都是myModule.js的输出接口，可以解构获得。

如果模块有default输出接口，可以用参数直接获得。

import('./myModule.js')
.then(myModule => {
  console.log(myModule.default);
});
上面的代码也可以使用具名输入的形式。

import('./myModule.js')
.then(({default: theDefault}) => {
  console.log(theDefault);
});
如果想同时加载多个模块，可以采用下面的写法。
```
Promise.all([
  import('./module1.js'),
  import('./module2.js'),
  import('./module3.js'),
])
.then(([module1, module2, module3]) => {
   ···
});
```
import()也可以用在 async 函数之中。
```
async function main() {
  const myModule = await import('./myModule.js');
  const {export1, export2} = await import('./myModule.js');
  const [module1, module2, module3] =
    await Promise.all([
      import('./module1.js'),
      import('./module2.js'),
      import('./module3.js'),
    ]);
}
main();
```



