# 第五课 函数的调用
## 理解函数
图片上的代码，第 1 行、第 5 行、第 6 行的 name 变量都有什么差异？请分析差异提交你的结论。以你命名的md文件提交。

```
1 function output(name){
2    console.log(name);
3 }
4
5 var name = 'Hello,JS';
6 output(name);
```

 ![](http://ovdtbcicu.bkt.clouddn.com/15040986488500.jpg)
 
从效果来说，第 1 行、第 2 行的 name 等价；第 5 行、第 6 行的 name 等价，以上代码可以换成：
 
```
1 function output(nameA){
2    console.log(nameA);
3 }
4
5 var nameB = 'Hello,JS';
6 output(nameB);
```
output 为函数， nameA 和 nameB 都是变量，函数用来处理变量。还是用做菜的例子，函数表示的为具体的煎炸煮炒炖的处理手段，而变量只是不同的食材。

**以上的代码替换 ：**

`output(变量)` 的处理手段为`console.log(变量)`。

结合赋值语句，就能得到`output( 'Hello,JS')` 等价于`console.log( 'Hello,JS')`。

## 函数的返回
立即返回 & 异步返回
> 立即返回 return  一个值
> 异步返回 

**例子：立即返回**

```
function checkFlightSchedule() {
  console.log('开始查航班信息');

  // 模拟构建航班的时间信息
  var scheduleInfo = {
    start: '8/23 8:00',
    end: '8/23 10:30',
    from: 'beijing',
    to: 'hangzhou'
  };

  return scheduleInfo.start;
}

// 调用立即函数checkFlightSchedule

var startTime = checkFlightSchedule();
console.log(startTime);
```

**例子：间接返回**

```
function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  // 模拟构建航班的时间信息
  var scheduleInfo = {
    start: '8/23 8:00',
    end: '8/23 10:30',
    from: 'beijing',
    to: 'hangzhou'
  };

  callback(scheduleInfo.start);
}

function callback(startTime) {
  console.log(startTime);
}
// 调用函数checkFlightSchedule，并塞一个回调函数以获取结果
checkFlightSchedule(callback);

```

**例子：异步返回**

```
function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  setTimeout(function() {
    // 模拟构建航班的时间信息
    var scheduleInfo = {
      start: '8/23 8:00',
      end: '8/23 10:30',
      from: 'beijing',
      to: 'hangzhou'
    };

    callback(scheduleInfo.start);
  }, 5000);
}

function callback(startTime) {
  console.log('通过反馈通道获得了信息');
  console.log(startTime);
}

// 执行查询函数
checkFlightSchedule(callback);
```

异步返回拆解一下语句：

`setTimeout(function(){},5000);`

`setTimeout(函数结果，5000)`意味着 5000 ms，即 5 s 后执行函数。

-------
### 拆解 setTimeout 语句
`setTimeout(function(){},5000);`内部的
`function(){},`并非函数的定义语句，而是使用函数的语句。

譬如，我想实现`console.log('结果是200')`，延迟 1 秒输出，所需要的代码为：

```
setTimeout(function(){
        console.log('结果是200');
        },1000)
        
```

同样，我想实现让一个变量延迟 1 秒输出，所需要的代码为：

```
setTimeout(function(){
      var name = '小超哥'；
      name；
        },1000)
```

想了解 setTimeout 以及 JS 的机理，请参考youtube 视频 ，请自行了解**科学上网**。

[Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

> 视频说明：
> 通过浏览器执行编译代码的流程讲解了函数的循环和 `setTimeout` 函数的使用。
> 虽然是纯英文，但是我能看懂视频中的演示文稿的动画，视频最后 6 分钟的内容完全没看懂，也不影响我理解`setTimeout` 函数。

-------


**读` checkFlightSchedule() `函数**

```
function checkFlightSchedule(WeChat) {
  //这里的 WeChat 指的是，我用微信把信息传给你
  console.log('开始查航班信息');

  setTimeout(function() {
    // 模拟构建航班的时间信息， setTimeout内部其实是一个 scheduleInfo 为字典类型变量的赋值，并非真正的函数
  
    var scheduleInfo = {
      start: '8/23 8:00',
      end: '8/23 10:30',
      from: 'beijing',
      to: 'hangzhou'
    };

    WeChat(scheduleInfo.start);

// 这里的难点是，WeChat需要回调function WeChat才能输出

  }, 5000);
}
function WeChat(startTime) {
  console.log('通过反馈通道获得了信息');
  console.log(startTime);
}
// 这里的  startTime 可以换成任何名字，它只表示输出的结果长什么样子而已

// 执行查询函数
checkFlightSchedule(WeChat);
```

去掉回调函数的庐山真面目

```
function checkFlightSchedule() {
 // checkFlightSchedule() 指的是我把信息直接传给你
    console.log('开始查航班信息');
    setTimeout(function() {
      // 模拟构建航班的时间信息
      var scheduleInfo = {
        start: '8/23 8:00',
        end: '8/23 10:30',
        from: 'beijing',
        to: 'hangzhou'
      };
      console.log('通过反馈通道获得了信息');
      console.log(scheduleInfo.start);
    }, 5000);
  }
   
  checkFlightSchedule();
```

现在看`checkFlightSchedule(callback)`的执行步骤：

> 0.所有函数先进入内存等待调用。
> 1.调用 `checkFlightSchedule()` ,参数是  `WeChat `函数。
> 2.进入` checkFlightSchedule() `函数体内，先 `console.log('开始查航班信息')`。
> 3.执行 `setTimeout `, 5 秒后，定义 `scheduleInfo`
> 4.调用 `WeCha`t 函数,目的是获取 `checkFlightSchedule` 函数的参数——`scheduleInfo.start `。

是不是有点晕?

整理一下，一共有三个函数，分别是` checkFlightSchedule() `,`setTimeout `,` WeChat `函数是处理过程，变量的被处理的对象。

用做饭的例子类比，你需要先买菜，再洗菜，最后做菜，函数是买菜、洗菜、做菜的流程，变量是要被处理的菜！

所以我们做的事先执行` checkFlightSchedule() `函数（买菜），再执行`setTimeout `（做菜），做菜的时候回调最洗过的菜` WeChat `。被处理的菜是 `scheduleInfo.start `。

> 补充说一点：
> 变量和函数定义的区别：
> **变量：**先定义后使用
> **函数：**无论在哪定义，使用的时候才调用

**变量的例子**

```
var name = 'xiaochaoge';
console.log(name);
```
会输出 `xiaochaoge`

```
console.log(name);
var name = 'xiaochaoge';
```
会输出 `undefined`

函数的例子在**还能怎么玩**里提的**函数的位置**会提及

## 还能怎么玩
### 函数的位置
所有函数先进入内存等待调用，意味着函数无论写到哪里都不会影响读取执行过程。

在 vs code 中，把 callback 函数写到最前面，也不会影响读取的过程，因为函数是先进入内存等待调用的，**如果一个函数不使用，那么就不会被执行**。

```
function WeChat(startTime) {
  console.log('通过反馈通道获得了信息');
  console.log(startTime);
}

function checkFlightSchedule(WeChat) {
  console.log('开始查航班信息');

  setTimeout(function() {
    // 模拟构建航班的时间信息
    var scheduleInfo = {
      start: '8/23 8:00',
      end: '8/23 10:30',
      from: 'beijing',
      to: 'hangzhou'
    };

    WeChat(scheduleInfo.start);
  }, 5000);
}


// 执行查询函数
checkFlightSchedule(WeChat);
```
## 更友好的交互界面
我希望查询的时候，等待时间出现的是`查询中，请耐心等待`, 不然真的可以能认为电脑卡死了，该怎么办？

在`setTimeout`前执行`console.log('查询中，请耐心等待');`

```
function checkFlightSchedule(WeChat) {
    console.log('开始查航班信息');
    
        console.log('查询中，请耐心等待');
        
    setTimeout(function(){

    var scheduleInfo = {
        start: '8/23 8:00',
        end: '8/23 10:30',
        from: 'beijing',
        to: 'hangzhou'
      };
      WeChat(scheduleInfo.start);
    },5000);
  }
  
  function WeChat(startTime) {
    console.log('通过反馈通道获得了信息');
    console.log(startTime);
  }
  
  checkFlightSchedule(WeChat);
```
### 同样的执行效果，不同样的执行逻辑
我能不能改变航班查询的执行的顺序，但是不改变执行的结果？

我想了一下代码的显示过程：
先看到 **开始查航班信息**，然后是 **查询中，请耐心等待**，最后看到 **通过反馈通道获得了信息 8/23 8:00**


> 0.所有函数先进入内存等待调用。
> 1.打印 **开始查航班信息、查询中，请耐心等待**
> 2.执行 **setTimeout** 5秒后，定义`checkFlightSchedule() `,定义 `scheduleInfo`，回调 `WeChat `函数。
> 3. `WeChat `函数只是打印`checkFlightSchedule` 的一个参数 —— `scheduleInfo.start` 。


```
console.log('开始查航班信息');
console.log('查询中，请耐心等待');

setTimeout(function checkFlightSchedule()  {

    // 模拟构建航班的时间信息
    var scheduleInfo = {
      start: '8/23 8:00',
      end: '8/23 10:30',
      from: 'beijing',
      to: 'hangzhou'
    };

    WeChat (scheduleInfo.start);
  }, 5000);
  function WeChat (startTime) {
  console.log('通过反馈通道获得了信息');
  console.log(startTime);
}
```


为什么没有 ` checkFlightSchedule()`也能执行？
setTimeout 已经执行啦，那么checkFlightSchedule() 中，它已经返回了一个函数`WeChat (scheduleInfo.start);`,所以才能正常执行。

-------

**补充阅读：**

执行一段代码：

```
var i=0;
function test(){
    i+=1;
    console.log(i);
}
setTimeout(test,1000);
```

执行一个函数：

```
var i=0;

setTimeout(function test(){
    i+=1;
    console.log(i);
},1000);
```

setTimeout  在执行时,是在载入后延迟指定时间后,去执行一次表达式,仅执行一次。




setTimeout 在执行时,它从载入后,每隔指定的时间就执行一次表达式。

在 `setTimeout` 中，如果是一个变量,一定是一个指向某函数的变量;如果是个函数,那它的返回值就要是个函数。



