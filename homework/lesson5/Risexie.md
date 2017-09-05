# 第五节课总结

### 代码差异

```js
1. function output(name) {
2.     console.log(name);
3. }

4. var name = 'Hello,JS';
5. output(name);
```

- 第一行的name表示的是`output`这个函数使用了名为name的变量，又因为这个函数的内容是输出name变量的内容。所以从整体来看，`output`函数的作用就是把输入的变量的内容输出出来。无论这个变量的名字是什么。
- 第四行的`name`是内容为“Hello,JS的“一个变量。
- 第五行的`name`是刚刚定义的变量。

```Javascript
1.function output(qwer){
2.    console.log(qwer) ;
3.}

4.var qwer = 'Hello,JS';
5.output(qwer);
```

所以执行以上代码的结果，同样是输出Hello,JS。

### 数组对象

Array数组对象是JS对象中的一种，而这个对象中又内置了很多不同的方法。

###### 例如我们创建一个数组

```javascript
var colors = ['yellow','green','blue','red']
```

###### 我们可以通过不同的方法来对这个数组作不同的处理

1. 增加一个字符串"purp"

```javascript
colors.push('purp')
```

2. 删除数组中的最后一个字符串，也就是purp

```javascript
colors.pop('purp')
```

3. 删除数组中的第一个字符串，也就是yellow

```javascript
colors.shift
```

相关的方法还有很多。



### 间接回调

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
```

以上的代码，在最后要输出start，也就是飞机时间的时候。并没有直接使用`console.log`去输出内容，而是调用了一个名叫callback的函数。将这个函数作为代码传输的通道，把(scheduleInfo.start)给它，并通过这个函数，来输出里面的参数。

* 我觉得可以理解为其实就是在checkFlightSchedule，这个函数里面嵌套了callback这个函数，不知道这个理解是否有问题？



### 回调厨房工作流

##### 体现回调

在执行`startwork`函数的时候，可以看到输出的内容。字符串：“事情准备好了，我先去洗个澡”是在“采购完毕”之前输出的，但是在`startwork`函数中，明明该字符串是在函数的最后一行，怎么会先执行呢？

这其实就是回调的体现，当回调函数B嵌套在一个函数A。执行函数A时，可以先把函数A先干完，回头再调用函数B。这代表我们执行A函数的时候，不会因为需要先执行B函数，而把整个函数A给“卡死”。回到老师的例子当中，`startwork`是A函数，`buyFoods`是B函数。

##### 如何回调

```javascript
function a(callback)   
{      
   alert("我是parent函数a！");   
    alert("调用回调函数");   
    callback(b);   
}   
function b(){   
alert("我是回调函数b");   


```

在函数中使用`callback`这个函数作为参数，并在内容中使用`callback`这就是“callback" 。

