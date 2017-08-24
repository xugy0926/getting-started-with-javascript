## 分析代码

```sample.js
function output(name){
	console.log(name);
}

var name = "Hello,JS";
output(name);
```

上面的代码，其中：

第1行的 name 是 定义output()这个 function 的参数。
第5行的 name 是 一个独立的变量，赋其值为一个字符串"Hello,JS"。
第6行的 name 是 把第6行的变量 name 作为 output()这个函数的参数，并执行函数。

## 观察代码

1. array

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-23-020022.jpg)

从上图的执行结果可以看出来，第一行是打印出了一个数组，然后是遍历数组并逐个打印，其次是对数组内的元素进行增加或减少，最后是打印出某个元素在数组内的位置索引。

查看了一下 api，发现array 还支持从数组的前面加入元素，比如 `myLikeColorsList.unshift("yellow");`

2. boolean 

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-23-020703.jpg)

从上图可以看出，结果是打印出了 boolean 变量转化成 string 的值。

可以推断，js 的 boolean 类型 变量在申明后，允许改变其绑定的数据类型 boolean 成 string，是一种动态语言。

3. number

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-23-022247.jpg)

从上图可以看出，第一行打印出了 number 类型的变量值，第二行打印出了 number 变量转化成 string 类型后的变量值。

4. object

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-23-022859.jpg)

从上图可以看出，数据类型为对象的变量支持修改、增加和删除对象内变量，同时还支持函数变量。

## kitchen_flow 代码越看越有意思

kitchen_workflow_async.js 这里增加了回调函数，起初看不太懂，只感觉函数中套着函数，不过慢慢的发现只要把 callback 分出来，理清楚，就很容易看懂了，真心觉得老师您教的好，以前看不懂的 js代码，现在来看简直容易多了。

```kitchen_workflow_async.js
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

看这一段代码的时候，我注意到 cooking 函数中少调用了 callback。

另外感觉安排事情的人和具体按流程做事情的人分开来，可能更容易理解。
