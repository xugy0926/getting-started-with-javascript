## 【作业内容】

###第1行、第5行、第6行的name变量都有什么差异？
```
function output(name) {
  console.log(name);  
}

var name = 'xiaohua';
output(name);

> 第一行的'name'可以是一个任意名，它是'形参'。第二行的'name'是把函数output（name）传递给了console.log.第二行的name要与第一行的name保持一致。

> 第五行的'name'可以是一个任意名，声明了一个变量 'name'。 把'xiaohua'这个字符串赋值给了'name' 是'实参'

> 第六行的'name'是被函数output调用了第五行的name，它和第五行一样都是'实参'。 