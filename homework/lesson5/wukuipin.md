### 第五课作业

代码分析：
```
function output(name) {
  console.log(name);
}

var name = 'Hello, JS';
output(name);
```

第一行、第五行、第六行都有变量name。第五行的name是新申明定义的变量（这是一个全局变量），并给它赋值一个字符串‘Hello, JS’;那么，定义一个变量就得使用才行，不然就是垃圾代码，所以第六行代码就来调用第五行定义的变量(name)。同时，第六行也在调用第1~第3行定义的output函数，而output函数内部也有一个变量，恰好名字也是name（也就是第1行的name，这是一个局部变量），真是好巧啊！真所谓无巧不成书嘛！当然，它要是叫什么阿猫阿狗也行的，可偏偏他老爹也喜欢name这个名字，我们现在知道他也叫name，不过要清楚一点，这里的name和第5行的name是两个不同的变量，只是他们恰好叫同样的名字（name）而已。

第6行在调用函数和变量时，name变量的值会赋值给第1行的变量name，函数再把得到的值打印出来。最后结果会得到：Hello, JS
如下图：
![](https://ws4.sinaimg.cn/large/006tNc79gy1fiw94a35aoj30pd0770sx.jpg)
