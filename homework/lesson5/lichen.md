1.重点观察了`kitchen_workflow_async.js`
通过拆解的方式学到了以下知识点：
![](https://ws2.sinaimg.cn/large/006tKfTcgy1fjbbbmqgzhj30t309dgnd.jpg)

2. 图片上的代码，第1行、第5行、第6行的name变量都有什么差异？请分析差异提交你的结论。
![](https://ws1.sinaimg.cn/large/006tKfTcgy1fjbd9avhhwj30ls09qdh6.jpg)

这个程序的输出：
`Hello,JS`

第1行的`name`是函数的形参
第5行的`name`是定义的变量
第6行的`name`是调用函数的实参

统一写成`name`是为了便于阅读，和尽可能精简对变量的命名

附注：
形式参数：定义函数时函数名后括号中的变量名
实际参数：调用函数时函数名后括号中的表达式

小小观察：
程序里多定义一个变量，但不调用它，看看结果
```
function output(name) {
  console.log(name);
}
var name = 'Hello,JS';
var color = 'blue';
output(name);
```
输出为：
`Hello,JS`

这说明一个变量被定义了但未被使用，这是一种资源的浪费，所以程序需要思考，需要设计，而不是想到哪就写到哪。当然作为小白的我们，趟一趟这些坑也是学习路上必不可少的。