// var delayAsync = function(time, callback, ...args){
//   setTimeout(() => callback(...args), time);
// }



// var thunk = (time,...arg) => { 
//   return (callback)=>{
//     setTimeout(() => callback(...arg), time)
//   }
// }
// var callback = (...args) => {
//   console.log(args.toString());
// }
// var delayTrunk = thunk(1000,1,2,3)
// delayTrunk(callback)



// const convertToThunk = (funct) => (...args) => (callback) => funct.apply(null, args);


// var it = null;

// function f(){
//     var rand = Math.random() * 2;
//     setTimeout(function(){
//         if(it) it.next(rand);
//     },1000)
// }

// function* g(){ 
//     var r1 = yield f();
//     console.log(r1);
//     var r2 = yield f();
//     console.log(r2);
//     var r3 = yield f();
//     console.log(r3);
// }

// it = g();
// it.next();

function thunkFunct(index) {
  return function f(funct) {
    var rand = Math.random() * 2;
    setTimeout(() => funct({ rand: rand, index: index }), 1000)
  }
}

// yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
function* g() {
  var r1 = yield thunkFunct(1);
  console.log(r1.index, r1.rand);
  var r2 = yield thunkFunct(2);
  console.log(r2.index, r2.rand);
  var r3 = yield thunkFunct(3);
  console.log(r3.index, r3.rand);
}

function run(generator) {
  var g = generator();

  var next = function (data) {
    console.log('data', data);
    var res = g.next(data);
    console.log('res', res);
    if (res.done) return;
    // console.log(res.value);
    res.value(next);
  }

  next();
}

run(g);


// 这段代码是一个基于Generator和Thunk函数的异步编程示例，使用JavaScript实现了一种类似于协程的流程控制。我将逐步解释代码的运行过程：

// 定义thunkFunct(index)函数：这是一个接受一个参数index的函数，它返回另一个函数f(funct)。f(funct)函数内部通过使用setTimeout来模拟异步操作，1秒后会执行传入的funct函数，并将一个对象作为参数传递给它，对象包含一个随机数rand和传入的index。

// 定义生成器函数g()：这是一个使用Generator语法定义的函数，其中包含了三个通过yield关键字分隔的部分。每个部分都会调用thunkFunct(index)来生成一个Thunk函数，并通过yield等待它的完成。当这些异步操作完成后，生成器函数会依次执行后续的逻辑。

// 定义run(generator)函数：这个函数接受一个生成器函数作为参数，创建一个生成器实例并开始执行它。内部定义了一个next(data)函数，用于推进生成器的执行。首次调用next()会启动生成器，然后在每个异步操作完成后，调用res.value(next)来继续生成器的执行。

// 启动生成器：调用run(g)会启动g()生成器函数的执行。生成器开始执行，第一个yield表达式暂停生成器，并执行thunkFunct(1)，即第一个异步操作。一秒后，异步操作完成，传入的回调函数被执行，此时生成器继续执行。

// 后续执行：生成器的执行继续到第二个yield表达式，它暂停生成器并执行thunkFunct(2)。同样，异步操作完成后生成器继续执行。然后是第三个yield表达式，同样的流程。

// 总之，这段代码利用了Generator的暂停和恢复特性，以及Thunk函数的方式，实现了一种协程式的异步流程控制。生成器函数g()的执行会在每次异步操作完成后恢复，允许你在每个步骤中执行一些逻辑，而不需要显式的回调嵌套。在这个例子中，每个异步操作都模拟了1秒的延迟，确保它们在按顺序完成。