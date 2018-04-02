## 第五课总结

### 函数立即返回（在函数中 return 一个结果）
生活中例子映射立即返回函数：
1. 老板打电话给秘书，要求查一下明天早上最早一班从北京飞上海的飞机时间，并嘱咐秘书此事比较着急，不挂电话，马上查询航班信息，查到后将结果告诉他；
2. 秘书收到通知后，马上查询航班信息，将查询到的航班信息告诉老板；
3. 老板与秘书挂断电话。

代码事例：
```
function checkFlightSchedule() {
  console.log('开始查询航班信息');

  var scheduleInfo = {
    start: '8/23 8:00',
    end: '8/23 10:30',
    from: 'beijing',
    to: 'shanghai',
  };

  return scheduleInfo.start; // 立即返回函数结果
}

var startTime = checkFlightSchedule();
console.log(startTime);
```
### 回调函数(间接返回)
生活中例子映射回调函数：
1. 老板打电话给秘书，要求查一下明天早上最早一班从北京飞上海的飞机时间，并嘱咐秘书此事比较着急，不挂电话，马上查询航班信息，查到后将结果通过***微信***发送给他；
2. 秘书收到通知后，马上查询航班信息，将查询到的航班信息通过微信发送给老板；
3. 老板与秘书挂断电话。

代码事例：
```
function checkFlightSchedule(callback) { // callback 这个函数做为参数传入
  var scheduleInfo = {
    start: '8/23 8:00',
    end: '8/23 10:30',
    from: 'beijing',
    to: 'shanghai',
  };

  callback(flightSchedule.startTime); // 函数内并没有通过 return 将结果直接返回
}

function callback(startTime) {
  console.log(startTime);
}

checkFlightSchedule(callback); // callback 是函数结果返回通道，通过此通道获取函数最终结果
```
callback 函数 === 微信 === 间接返回信息的通道。

### 异步
生活中例子映射回调函数：
1. 老板打电话给秘书，要求查一下明天早上最早一班从北京飞上海的飞机时间，查询航班信息，查到后将结果发送给他, 挂掉电话；
2. 秘书收到通知后，查询航班信息，将查询到的航班信息通过微信发送给老板；
代码事例：
```
function checkFlightSchedule(callback) {
  setTimeout(function() {
    var scheduleInfo = {
      start: '8/23 8:00',
      end: '8/23 10:30',
      from: 'beijing',
      to: 'shanghai',
    };

    callback(flightSchedule.startTime);
  }, 5000);
}

function callback(startTime) {
  console.log(startTime);
}

checkFlightSchedule(callback); // callback 为函数结果返回通道，通过此通道获取函数最终结果
```
setTimeout(); 函数为 JS 内置函数；
运用 setTimeout() 函数模拟老板与秘书通完电话后，双方各自处理自己事情场景，5秒钟后构造 scheduleInfo 变量，并调用 callback 函数获取 startTime 值(60-67行代码)；

### 变量提升简单总结
1. 所有声明都会被提升到作用域顶端；
2. 同一个变量只能声明一次，其他声明会被忽略；
