#第五课作业
##作业题目
1. 阅读study/lesson5的sample代码，并执行观察结果。
2. 图片上的代码，第1行、第5行、第6行的name变量都有什么差异？请分析差异提交你的结论。以你命名的md文件提交。
##我的解答
```javascript
function output(name){
    console.log(name);
}

var name = 'Hello,JS';
output(name);
```

- 第1行name是自定义函数output用来传递的参数，通过它可以函数外部数值传递给函数内部，也就是第2行里的name。
- 第5行name是新声明的变量，并且给它赋值。
- 第6行name是自定义函数用于计算的变量，它调用的外部第5行name变量的值。