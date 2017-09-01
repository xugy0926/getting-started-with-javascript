下面代码中，第1行、第4行、第5行的name变量都有什么差异？

```
1. function output(name) {
2.     console.log(name);
3. }

4. var name = 'Hello,JS';
5. output(name);
```

【回答】

针对上面的整个，我是这么理解的。就像是一道数学题。

第一行：建立一个函数  F(x)
第二行；输出这个函数  =x

第五行：告知X的具体值，这里面叫赋值  x=Hello,JS
第六行：输出整个函数f(x)具体值，也就是 Hello，JS


在我看来，第一行Name, 是函数未知变量，可以是某个值，也可以是运行后的值
         第四行Name, 是赋值，赋值给第一行Name 的一个具体值
         第五行Name, 是输出值，相当于问 F(x)的结果