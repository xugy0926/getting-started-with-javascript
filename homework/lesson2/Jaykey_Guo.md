### 基础-第二课

##### 命名

一个名字背后包含很多的属性，有不同的描述，对应的数据表的标题和内容。

JS中采用的是山顶式的命名方法：

```Javascript
var userName = "liming";
var isAdmin = true;
console.log(userName);

/*一个很长的名字*/
var myJavaScriptUserName = {
  student: name,
  title: "xxxx",
};
```

需要注意的是，每一个JavaScript命令结束的时候使用**"*;*"**

在每一个属性之后使用的是**","**来分割不同的属性。

###### 程序：处理数据的工具，最终得到的对应的结果。

个人JS学习记录网页：https://jaygjianguo.github.io/js-study-record/

------

小结：

JS的命令格式有自己的特点，需要注意的是结束用分号，一个变量之中的不同属性用逗号，在Node的环境下运行的结果就是对应输出数据。

在变量的添加中，可以直接在原有变量的基础上进行添加，但是必须赋予对应的值，如果只是添加了变量的类型，没有赋予对应值，会出现报错。

JS中的循环与Java类似，都是三个部分完成，*变量；循环长度，递推方式。*
