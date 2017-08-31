### 姜琳第二次课总结

#### 课程总结：编程中为什么会有丰富化的数据格式

#####多样化的数据格式用于不同的情况和操作

- 数字：用于计算；
- 文本：（字符串）用于表示是什么；
- 布尔：是/否，用于表示是非的逻辑；
- 对象：用于表示一个集合，包含各种属性或者变量的信息，可用于复杂的调用；
- 数组：用于表示一组变量，调用时可以以数组的形式依次调用。数字、文本、布尔、对象、数组）

##### 为什么会有丰富的数据格式

我的理解是在写程序的时候，需要实现不同的功能，就会用到不同的数据类型。就像常用的Excel表格中，会有单元格格式的不同，比如日期格式、文本格式、货币格式等，都是为了更好的服务于使用者。在定义变量的时候就想好这个变量的使用场景，就能确定这个变量的类型（虽然在用var定义时看不出来）。

买的指南还没到，目前只看了一些百度google的浅显内容，随着学习和实践，理解会更深刻。



#### 静态网页布置

https://andreajiang.github.io/html02/

好简陋，没增加内容，只做了一些替换。



#### 问题

1. Git的终端和win自带的终端有区别吗？操作指令看起来都是一样的。

2. 在运行sample_code.js时，一开始我怎么都运行不出来，总是报错：

   >C:\Users\JL\my_project\sample_code.js:10
   >
   ><<<<<<< HEAD
   >
   >^^
   >
   >SyntaxError: Unexpected token <<
   >
   >​        at createScript (vm.js:74:10)
   >​        at Object.runInThisContext (vm.js:116:10)
   >​        at Module._compile (module.js:533:28)
   >​        at Object.Module._extensions..js (module.js:580:10)
   >​        at Module.load (module.js:503:32)
   >​        at tryModuleLoad (module.js:466:12)
   >​        at Function.Module._load (module.js:458:3)
   >​        at Function.Module.runMain (module.js:605:10)
   >​        at startup (bootstrap_node.js:158:16)
   >​        at bootstrap_node.js:575:3

后来各种查和试，在sample_code.js里把最开头附近的

`<<<<<<< HEAD`

`=======`

`>>>>>>> upstream/master`

这三行，删了或变成注释，再运行，才好了。但是不明白原理是什么。麻烦老师解答。

3. 在静态网页布置的时候，一开始我用老师的文件布置了一个，然后按照课上讲解的直接在GitHub上改动Html文档，但是改动了之后，点击原来的网址，网页没有更新内容，这是为什么呢？



#### 笔记

##### 部署一个静态网页

- 在项目里加入html的文件
- setting   ——>   GitHub Pages   ——>   Source（master branch）save

##### 一切以命名开始

先命名，再生小孩，再关联

属性，关系。名字和目标的关联：名字不代表这个具体的目标，而是代表属性和关系的集合。

程序的目的是什么：处理数据，得到结果。

var是js唯一的变量属性。var output="Hello,JS";

变量，要先声明再定义。

JS里单引号和双引号一样。

对象变量：定义用冒号，而不是等号。对象变量是包含各种变量、数组的集合（自己理解的概念）。

先用写代码的软件写好代码，再用node执行。

`>node simple.js`

