#第五节课作业：

**代码中第1行、第4行、第5行的name变量有什么差异？**

```javascript
function output(name){
    console.log(name);
}

var name = 'Hello, JS';
output(name);
```

第一行的name是function函数中的变量(形参)。调用函数时，函数体用形参进行逻辑处理（计算），之后再将实参传入形参，得出结果。

第四行声明了一个变量，变量名为name，随后赋值给它"Hello,JS"

第五行的name是第四行的变量，此时，name是作为一个实参传给函数去做处理。


**从作用(性质)上来看：**

第一行：函数的变量(名),形参(parameter)

第五行：变量(名)

第六行：变量(名)，作为实参传入函数。

**从值来看：**

第一行：只是形参，内部没有数据，需要被赋值。

第五行：变量值="Hello,JS"

第六行：变量值="Hello,JS"