
【作业内容】
1. 阅读study/lesson5的sample代码
2. 下面代码中，第1行、第4行、第5行的name变量都有什么差异？

```
1. function output(name) {
2.     console.log(name);
3. }

4. var name = 'Hello,JS';
5. output(name);
```

【解答】
第1行的name是函数的形参，是函数体的局部变量。
第4行的name是定义的全局变量，是第5行name的值。
第5行的name是第一行函数的实参，第1行的形参name可以变成abc等，不会影响结果。
> 函数调用会为形参提供实参的值。函数使用它们实参的值来计算返回值，成为该函数调用表达式的值。

【体会】
突然蒙了一下，忘了什么是变量，哈哈。
> 变量是一个值的符号名称，可以通过名称来获得对值的引用。变量的工作机制是编程语言的另一个基本特性。


```
console.log(1);

function output(name) {
  console.log(2);
  console.log(name);
  console.log(3)
}

console.log(4);

var name = 'Hello,js';

console.log(5);

output(name);

console.log(6);
```
按照老师说的比较low的方法来调试，得到的结果是
```
1
4
5
2
Hello,js
3
6
```
这样确实比较容易理解。
