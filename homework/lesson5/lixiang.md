# Ideal's Homework (Lesson5)

标签（空格分隔）： 未分类

        
像学英语一样，遇到不会的单词就查词典，遇到不会的语法就查语法书。四行代码，学好久。。。


----------

【function】
---------
**什么是函数？** 
JavaScript的数据类型分为：
 1. **Primitive Type**: 数字、字符串、布尔值、Null、Undefined
 2. **Object Type**：Array、**Function**、Other Classes

一言概之：函数是JavaScript中一种重要的特殊对象
 
---------

 - **函数声明(function declaration)** 

>  - function [name] (parameter) {statements;}

#### 1.function是关键字
#### 2.[name]可以省略，省略后的函数叫做匿名函数（anonymous function）
#### 3.()里可包含0-255个参数（parameter，形参）
#### 4.{}里面的内容叫做函数体（function body）,包含0-多条JavaScript语句，语句的数量不限，每个语句用分号进行分隔 ；花括号是必须的，不可以省略；
#### 5.和var Ideal = "lixiang" 声明一个变量必须以var开头一样，声明一个函数必须以function开头

比如：
```JavaScript
function calculateAdd(x){return x+1;}
//calculateAdd 是函数名；x是形参；return x+1是函数体；
```

 - **函数表达式(function expression)**

> - var 变量名 = function [name] (parameter) {statements;}

函数声明和函数表达式的语法很像，但有一个**重要的区别**：
**声明语句**会“被提前”到顶部，也就是可以被在它出现位置之前的代码调用；
而用**表达式方式定义**的函数在被定义之前无法被调用。

PS: 这也是老师在讲函数调用的时候，为什么有一些代码物理位置出现在比较靠后的位置，但是前面的代码需要它的时候依然可以调用。


----------
【output】
---------

根据上一节的内容,第1行的"output"是一个函数的名字，如果省略了则是匿名函数;

第6行的"output"则是函数调用四种办法的第一种：作为函数调用，第6行是调用表达式。由 函数名+括号+传入的实参值（实参的英文是argument）

----------
【name】
---------

```JavaScript
function output(name){
  console.log(name)；
}
var name =  ‘Hello，JS’；
output(name);
```

#### 第1行的name: 形参
#### 第2行的name: 函数语句，打印函数接收到的值
#### 第4行的name: 定义一个变量 变量名字是name 变量的值是Hello,JS
#### 第5行的name: 调用表达式里面的name是一个实参，接受第四行得到的变量name的值，传入函数，执行，得到最终的结果‘Hello,JS’



