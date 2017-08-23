# 第四课代码学习笔记

## build_a_human.js

在这个 js 文件中，用的是表达式函数定义法：

```js
var buildPerson = function () {
    ...
}
```

在阅读《JavaScript 权威指南》第三章的时候，书里也提到了这个知识点，但只是一笔带过。

用关键字 `js how to understand expression function` 进行搜索，结果第一条就是 MDN 上的文档，文档中还说明了函数表达式与函数声明的区别：

- 函数表达式中的函数名可忽略，这样创建的就是匿名函数。

```js
var x = function(y) {
    return y * y;
}
```

- 函数表达式可以用作 IIFE（立即执行函数表达式），在定义之后就立刻执行。

- 函数表达式没有被提升，所以只能在定义之后才可以调用。

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};
```

- 命名的函数表达式，会将其作用域限制在函数体内部（官方文档里的这段话没看明白……）下面的函数 `factorial()`，只能通过 `math.factorial(x)` 的形式调用。

```js
var math = {
  'factorial': function factorial(n) {
    if (n <= 1)
      return 1;
    return n * factorial(n - 1);
  }
};
```

参考文档：[function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

## sound_off.js

第一个报数的示例，是用顺序执行的方法来演示的。

老师用的是最原始的方式，把所要输出的内容手动地一个一个输出来。

稍微高级一点的方式，就是用循环了。结合前学过的函数声明和函数表达式，可以用两种形式来写这个循环。

```js
function solider(i) {
    console.log(i + '到');
}

// 第一种循环形式
function startCountOff() {
    for(var i = 0; i < 5; i++) {
        solider(i+1);
    }
}

// 第二种循环形式
var startCountOff = function() {
    for(var i = 0; i < 5; i++) {
        solider(i+1);
    }
    return 1;
}

startCountOff();
```

不管是哪种循环形式，输出的结果都是相同的。那么是该使用函数声明的形式，还是函数表达式的形式，就要根据两种方式各自的特点，以及实际的需求，来决定了。

## sound_off_2.js

第二个函数是用嵌套的方式来演示的。

为了尽量让大家能够看懂代码，老师依然是把可以写成循环的部分都一个个具体地写出来了。

而如果用“真正”的循环，应该写成什么样子呢？自己尝试了一下，写成了下面的样子，感觉写出来的代码还是不够精简。

```js
var currentSolider = 1;
var soliderCount = 5;

function CountOff(soliderCount) {
    while(currentSolider <= soliderCount) {
        console.log(currentSolider + '到');
        currentSolider++;
        CountOff(soliderCount);
    }
}

CountOff(soliderCount);
```

说明一下上面的代码：报数是从第一个士兵 `currentSolider` 开始的，当前士兵先报数（`console.log(……)`），然后将报数的任务传给下一个士兵（`currentSolider++`），下一个士兵继续报数（`CountOff(soliderCount)`）。

当所有士兵（`soliderCount`）都报了数的时候，就可以结束了（`while(……)`）。

## sound_off_3.js

在第三个示例中，老师则是通过定义五个相似的对象，并依次调用各对象方法的方式，来为大家展示对象方法应当如何使用。

之前在学 C# 的时候，知道对象的构造函数，可以在对象实例化的时候进行一些操作。那么 JS 中能否实现在创建对象的时候，利用构造函数或者其它的特性，让它输出指定的内容呢？

用关键字 `JS 构造函数` 搜索，第二个链接就是 SegmengFault 上的文章：[深入javascript——构造函数和原型对象](https://segmentfault.com/a/1190000000602050)。文章中讲到了几种创建对象的方式，其中 `使用 new 关键字创建`、`使用对象字面量创建` 都只能通过调用对象的方法来输出。而 `工厂模式` 和 `构造函数` 这两部分自己还没有看明白，先记录一下。

下面的代码，是自己仿照着 `工厂模式` 的形式写出来的。

```js
function soliderObj(i) {
    var o = new Object();
    o.i = i;
    o.countOff = function() {
        console.log(i + '到');
    }

    return o;
}

for(var i = 0; i < 5; i++) {
    var soliderInstance = soliderObj(i + 1);
    soliderInstance.countOff();
}
```

## kitchen_workflow.js

老师通过拆解准备一桌酒席的流程，向大家展示了如何将实际生活中的事物，转化为代码。

老师的讲解过程，是从细节到整体。也可以反过来，从整体到细节。

准备一桌酒席，需要几大步：

1. 基础的准备工作，比如打扫后厨，清洗各类用具，等等，在程序中就是 `prepare()`。
1. 基础的环境准备好了，还要去采购烹饪所需的菜、肉、蛋等各种原料，在程序中是 `buyFoods()`。
1. 一切准备就绪之后，就开始烹饪每一道菜肴，在程序中就是 `cooking()`。
1. 这四步工作加起来，就是准备酒席的完整过程，在程序中就是 `startWork()`。

而每一步之间，又是有着互相依赖的关系：

1. 基础环境准备好了，才能做所有后面的工作，所以用 `if(prepare()) {...}` 来进行条件的判定。
1. 采购好的各种原材料，要交给厨师去做菜。所以 `buyFood()` 要 `return foodsList`，然后 `cooking(foodsList)`。
1. 做好了每一道菜之后，客人才能享用，所以在 `cooking()` 中才会有 `return feast`。

整体的流程和互相之间的依赖关系明确了，其实整个程序基本就出来了。