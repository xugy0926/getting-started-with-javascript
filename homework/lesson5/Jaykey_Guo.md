### 基础-第五课

画顺序图，看到顺序图就能翻译出对应的代码。

![](https://ws1.sinaimg.cn/large/006tNc79gy1fpqbbsuh75j30zk0k041a.jpg)

分步骤来拉取数据。

------

![](https://ws4.sinaimg.cn/large/006tNc79gy1fpqbcznltbj30zk0k0428.jpg)

##### 前端的工作，三者之间的关系：

> 1. 用户与HTML的交互
> 2. HTML与JS代码的交互
> 3. JS代码与服务器的交互（数据交互）

##### 函数的调用

输入什么，输出什么，不同函数实现不同的输出。对外界**参数**进行处理。

##### 切分流程，最小的可用单元

用不同的函数来完成最小的工作，组合不同的函数来完成一个较大的任务。小套路的叠加，变成一个大套路。

![](https://ws4.sinaimg.cn/large/006tNc79ly1fpqbi8hqhlj30zk0k041n.jpg)

#### 立刻返回

```javascript
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

//---------------------------------------

// 调用立即函数checkFlightSchedule
var startTime = checkFlightSchedule();
console.log(startTime);
```

##### 回调（间接返回）

```javascript
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

//---------------------------------------
function callback(startTime) {
  console.log(startTime);
}

// 调用函数checkFlightSchedule，并塞一个回调函数以获取结果
checkFlightSchedule(callback);
```

通过callback作为返回通道来反馈，不是通过一个函数直接反馈，而是通过一个媒介来反馈。

*函数中的参数，和外界的参数没有关系。*

##### 异步（回调的一种方式）

![](https://ws2.sinaimg.cn/large/006tNc79gy1fpqbtvjrm4j30zk0k00ue.jpg)

```javascript
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

//---------------------------------------
function callback(startTime) {
  console.log('通过反馈通道获得了信息');
  console.log(startTime);
}

// 执行查询函数
checkFlightSchedule(callback);
```

对异步调用的个人理解：

```javascript
setTimeout(callback, 5000);
```

![](https://ws3.sinaimg.cn/large/006tNc79gy1fpqc2kpfbsj30ai092t98.jpg)

上图中的代码块中function的部分其实就是对应上面代码中callback的部分。

主函数是checkFlightSchedule(callback)，辅函数是callback(startTime)。主函数中定义了对应的参数，也调用对应的辅函数，而辅函数调用了主函数中定义的参数，来实现需要的完成功能。

两个函数之间是交叉的关系，一步一步执行。

------

搜索了之后发现，js的异步调用是由于js的单线程的性质，在调用不同地方的参数的时候会出现堵车，所以通过对应的时间控制来等待前面的数据传输，之后再执行后面的操作。

一个生活的场景转换成代码之后，中间的差距在于对应的方法和方式不同，也就是要在其中找到机器如何理解这个事情，简单的一句“你等一下，我准备好告诉你”，在js中就是异步调用的方法。
