代码中第1行、第4行、第5行的name变量有什么差异？
```javascript
function output(name){
    console.log(name);
}

var name = 'Hello, JS';
output(name);
```
第4行 变量名为name。
第1行定义函数为name,也可以是其他的名称，比如name1，相应的第二行也要改为name1。
第5行，name为执行对象。输出name的值。
