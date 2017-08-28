## 1. 示例代码分析

**作业示例代码：**

```javascript
function output(name){
    console.log(name);
}

var name = 'Hello,JS';
output(name);
```

**分析：**

示例代码中有四个 name ，但四个 name 的含义却是不一样的。

第 1 行的 name ，是函数 `output()` 的参数，表示在调用 `output()` 函数时，需要给这个函数传入一个参数。

第 2 行的 name 就是函数 `output()` 的参数，所以，第 2 行的 name 和第 1 行的 name 是一样的。

第 5 行的 name 是一个变量，它的值是 `Hello,JS` ，这行代码的意思很明显，定义一个变量 name ，并给它赋值。

第 6 行的 name 就是第 5  行定义的变量，因此第 6 行的 name 就是 `Hello,JS` 。 

**结论：**

示例代码中，第 1 行的 name 表示函数的参数，在调用前没有具体的值，第 5 、 6 行的name 表示变量，并对这个变量赋予了值。

## 2. 函数回调

老师说这部分是 JS 中最难理解的，我觉得因为突然把一个函数的参数变成了另一个函数，所以理解起来比较难。也就是说在 JS 里，函数的参数不仅可以是各种数据类型，也可以是函数，理解起来自然有点绕，那就用例子来分析。代码示例来自课程项目 `/getting-started-with-javascript/study/lesson5/kitchen_workflow_async.js` 

```javascript
// 采购食物的函数
function buyFoods(callback) {
  console.log('我要开始采购食物啦。。。。');
  // 模拟5秒后通过callback返回结果
  setTimeout(function() {
    console.log('采购完毕');
    var foodsList = ['fish', 'egg', 'meat'];
    callback(foodsList);
  }, 5000);
}
// 做准备工作的函数
function prepare() {
  console.log('努力磨刀...努力洗碗...努力打扫...劳动最光荣');
  return true;
}
// 做菜的函数
function cooking(foodsList, callback) {
  console.log('开始做菜啦~~~');
  // 模拟5秒后通过callback返回结果
  setTimeout(function() {
    console.log('今天要做这些菜' + foodsList);
    console.log('大工告成，上菜');
    var feast = ['鸡蛋西红柿', '红烧肉', '红烧鱼'];
    callback(feast);
  }, 5000);
}
//------------------------------------------------
// 流程控制函数
function startWork() {
  var success = prepare();
  if (!success) {
    console.log('还没准备好');
    return;
  }
  buyFoods(function (foodsList) {
    cooking(foodsList, function (feast) {
      console.log('----酒席准备好了----');
      for (var i = 0; i < feast.length; i++) {
        console.log(feast[i]);
      }
    });
  });
  console.log('事情安排好了，我先去洗个澡');
}
// 干活啦~~
startWork();
```
在这个示例代码中，我认为通过从结果到过程的反向阅读代码的方式，能更好理解回调函数在这个示例中的作用。反向阅读中最重要的一段代码就是 `startWork()` 函数，我把我的分析写成注释，加入这个函数。
```javascript
// 流程控制函数
function startWork() {
  var success = prepare();//调用 prepare() 函数，将函数的返回值 true 赋值给 success
  if (!success) {//如果 success 没有得到 true 赋值，则执行 if 语句
    console.log('还没准备好');
    return;//因为 success 值非 true，因此函数终止执行
  }
  /*
  *1. 函数 buyFoods(callback) 有一个 callback 函数，在这里就是 function (foodsList){}
  *   因此，在 JS 里，函数不必一定要写成 function functionName(parameters){} 的形式
  *   还可以写成 function (parameters){} 的形式，在函数中立即调用
  *2. function (foodsList){} 接收一个 foodsList 参数，并将其传递给 cooking(foodsList,callback){}
  *   在这里，callback 函数就是 function (feast){}
  *3. JS 的回调函数很容易让人绕在里面，
  *	  一方面回调函数是函数，它被调用了就是要执行的，
  *   另一方面回调函数应该看作调用函数的参数，
  *	  既然是参数，回调函数的执行时机应根据调用函数要求执行
  */
  buyFoods(function (foodsList) {
    cooking(foodsList, function (feast) {
      console.log('----酒席准备好了----');
      for (var i = 0; i < feast.length; i++) {
        console.log(feast[i]);
      }
    });
  });
  console.log('事情安排好了，我先去洗个澡');
}
```
