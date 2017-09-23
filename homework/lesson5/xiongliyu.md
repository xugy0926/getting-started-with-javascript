# 第五节课作业
## 分析名字的不同之处
function output(name){
    console.log(name);
}

var name = 'hello,js';
output(name);
>5：被首先执行。把‘’hello，js‘’赋值给了name。 6：这一行的name调用了第五行的name（因为第五行的name是全局变量）,作为实参，要传入函数名为output的函数中。
第一行的那么是函数output的形参，也是接收器，用于接受实参数据的东西。实参传入后取代形参，
name从未被改变。

### kitchen_workflow_async.js
分析（学习）代码的方法：
我是这样做的：
1. 对着敲代码（读代码），了解每段代码都是干嘛的
2.  找清楚“对象”（比如谁是采购者，谁是厨师、谁是通道）
3. 设置断点调试代码（可以根据我的想法修修改改），通过观察代码的执行顺序（理解整个流程和对象之间的关系）
4. 找关键点，比如callback，结合语法去分析（差语法）
5. 还是搞不懂就画画关系图和时序图

>个人理解：
>1、所有参于调用的函数都必须 除了接受实参以外，还接受一个callback函数（通道）。
> 2、函数中两个setTimeout都是把函数处理过程延迟，其模拟的手段是：延迟5秒再返回结果。
> 3、所有被延迟返回的callback(XX);其中，callback：代表返回通道（微信）。（XX）代表需要被返回的结果。
> 4、函数调用表达式中，以一个函数作为实参,传入后实参并不参与计算，作用：只是告知一个通道，当函数计算完后，callback的返回通道就是当时以实参身份进入的函数。

### flight_schedule_1.js
![笔记在图片里](http://wx1.sinaimg.cn/mw690/be5aedd1gy1fjtdsbixi0j20j60hhwfr.jpg)

### flight_schedule_2.js

![笔记在图片里](http://wx4.sinaimg.cn/mw690/be5aedd1gy1fjtdsc5c6sj20xc0h8tan.jpg)

### flight_schedule_3.js
![笔记在图片里](http://wx2.sinaimg.cn/mw690/be5aedd1gy1fjtdscoi07j20pi0e5ab5.jpg)

### indirect.js

![笔记在图片里](http://wx3.sinaimg.cn/mw690/be5aedd1gy1fjtdsaksd7j20r80hlabg.jpg)





