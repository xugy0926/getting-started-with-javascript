# 图片上的代码，第1行、第5行、第6行的name变量都有什么差异？

```
function output(a){
    console.log(a);
}

var name='Hello,js';
output(name);
```

为了区分name我直接将function中的name改成了a。第一行function中的name是一个形式参量，可以是任何形式的字符串。output(什么)，console.log（什么）

第5.6行的name,第5行，name先是起到一个object的作用，赋予name‘hello，js’的字符串形式，第6行，output中的name，我把它理解程未知数，output这个函数是含一个未知数的多项式，（）中的东西就是这个未知数，而这个未知数的赋值是在之前var的时候进行的，而多项式的定义是function。

因此，output（name）就成了求name='Hello,js'时，求值多项式（function值）的问题。
