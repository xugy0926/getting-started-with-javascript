# 小白JS入门不放弃 lesson5

*Focus Question：回调*

## 又爱又恨的“回调”一桌酒席

### 代码难点

* 函数变量

> 函数变量：在JavaScript中，调用者可以把函数赋值给变量，也可以将其作为参数传递给其他函数。

举例：
在```setTimeout(）```中，```function() {}；```便是函数变量，作为参数传递给```setTimeout(）```函数。

又如：
在```startWork()```中，```function (foodsList) {}；```和```function (feast) {}；```都是```startWork()```的变量。

* 匿名函数
>顾名思义，**匿名函数**就是没有名字的函数，它的作用是为了让代码简单化。

举例：在```setTimeout(）```中，```（function() {}；```便是一个匿名函数。function之前的左圆括号是必需的，因为如果不写这个左圆括号，JavaScript解释器会试图将关键字function解析为函数声明语句。使用圆括号JavaScript解释器才会正确地将其解析为函数定义表达式。

又如：在```startWork()```中，出现两次```（function (foodsList) {}；```和```（function (feast) {}；```都是匿名函数。

* 回调函数 callback

Google给出的解释：

>A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.

在“一桌酒席”里，我被回调搞得一脸懵逼，反复查犀牛书和google，仍然不是特别明白。

参考何伟同学总结的回调格式：
>```
>function a(callback) {
>    // do something
>    var data = XXX;
>    // pass data to b
>    callback(data);
>}
>
>funtion b(data) {
>    // do following thing
>}
>
>a();
>b();
>```
我目前理解的是：先执行函数a,而且不会等到a完全执行完才执行函数b, 在a的过程中就执行了函数b，b完成后返回执行callback这个函数。

### 问答题：区分同名的变量

老师给出的例子：
>```
>function output(name) {
>    console.log(name);
>}
>
>var name = 'Hello, js';
>output(name);
>```
其中第一个```name```、第三个```name```和第四个```name```都是变量：第一个```name```是```output()```这个函数声明语句的参数变量；第三个```name```是字符串变量，并被调用者赋值```'Hello, js'```，第四个```name```是```output()```函数的参数变量。
第二个```name```则是输出的字符串。


