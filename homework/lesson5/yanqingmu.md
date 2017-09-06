# Homework for Lesson 5

## 1.阅读并执行代码

（1）async_fuction.js中```setTime(callback,5000);```是一个内置函数，其中参数```callback```是一个函数名，`5000`表示延迟的时间。这个内置函数的参数形式是已经定义好的，所以`setTime(callback(),5000);`就是不对的。同时，在flight_schedule_3.js中，我们发现可以在setTimeout中直接定义一个函数作为第一个参数，而且不需要函数名。



（2）对于内置函数`console.log()`而言，`()`中是要打印的内容，可以是变量、函数以及具体的值，那么`console.log(startTime);`也可以写成`console.log(checkFlightSchedule());`。



（3）indirect_call.js让我意识到间接调用的强大之处，它可以实现一个功能的整合和拆分。也就是说可以用一个函数来整合其他函数，从而实现更加强大的功能，比如把原来的代码改为如下的形式：

```// 定义函数callback
function teacher() {
  console.log('冲刺');
}

function student() {
  console.log('Yes, sir!');
}

function run(person1,person2) {
  console.log('🏃🏃🏃🏃🏃');
  person1();
  person2();
}

run(teacher, student);
```



（4）关于kitchen_workflow_async.js有几处没有搞懂。

* 流程控制函数中，先声明了一个success，然后判断`prepare()`是否准备好（其中的if语句，只有当prepare函数的return为false或0的时候，才能被执行，这里只是表达逻辑的完整）。但是并没有调用`prepare()`的语句，但是最后准备函数还是被执行了。所以，我的问题是：为什么声明语句`var success = prepare();`起到了调用函数的作用？
* 流程控制函数中，buyFoods的调用又嵌套了一个cooking调用和两个function定义，这样写的好处是什么？其中foodList是函数buyFoods中的局部变量，为什么可以用在cooking函数中，是否跟这种buyFoods的调用形式有关，`function(foodList){…}`替代了原来的callback使得cooking函数可以使用变量foodList？
* 流程控制函数中，`cnsole.log('事情安排好了，我先去洗个澡');`这条打印明明是最后一条语句，却出现在「采购完毕」的前面，这是否跟延迟5s有关呢？

## 2.一起来找茬
需要找茬的代码是这样的：
```
function output(name){
  console.log(name);
}

var name = 'Hello,JS';
output(name);
```
这里一共有4个```name```，它们看起来一个样，但含义却不一样。



（1）我们先来看前两个。

这两个```name```是在一个```function```里的，其中```function```所表达的含义是：你要先给我一个变量作为参数我才运行，运行的结果是把这个变量的值打印出来。

所以前两个```name```是统一的，但这里的```name```只是针对这个```function```所需参数的命名，并不一定需要与5、6行的```name```一致。也就是说代码可以改写成这样：

```
function output(lover){
  console.log(lover);
}

var name = 'Hello,JS';
output(name);
```



（2）我们再来看看5、6行的```name```。

第5行中定义了一个string变量，命名为```name```，同时赋值```'Hello,JS'```。第6行是将第5行中定义的name变量作为参数提供给函数output，并执行函数output。所以第5、6行的name是统一的。这里可以把源代码改为如下形式：

```
function output(name){
  console.log(name);
}

var girlFriend = 'Hello,JS';
output(girlFriend);
```
