###第三课摘录

不同的数据类型决定了代码执行的效率。效率包括:`存储效率，计算效率，传递效率`

`运行时`是一种面向对象编程语言的运行环境。

`node.js`是一种运行环境。

一个整型可以转化为字符串。一个字符串也可以转化成整型，仅限于数字，是为了传递效率更方便

命同时兼顾简洁和精准，能够推导出更多的信息，能够反映问题（是什么what）而非解决方案(how)

表达式语句不是表达式

`1 + 1;` 是表达式

`Var age = 18;` 是表达式语句

`if (age >= 18)`里的`age >= 18`就是表达式

编程里面三大结构：`顺序、循环、条件`

一个分号`;`结束就是一条语句


####针对以下代码做改变实验：
for (var i =0, j = myLikeColorsList.length - 1; i < myLikeColorsList.length /2 ; i++, j--) {

  console.log(myLikeColorsList[i]);

  console.log(myLikeColorsList[j]);

}

**改变后能成立的例子：**

var i = 0, j = myLikeColorsList.length - 1;

undefined

for(; i < myLikeColorsList.length / 2; i++, j--) {

... console.log(myLikeColorsList[i]);

... console.log(myLikeColorsList[j]);

... }

blue

write

green

black

undefined


**改变后不能成立的例子：**

var i = 0, j = myLikeColorsList.length - 1;

undefined

while(i < myLikeColorsList.length / 2; i++, j--) {

... console.log(myLikeColorsList[i]);

... console.log(myLikeColorsList[j]);

... }

//无结果


####浏览器和HTTP摘录

浏览器其实就是一个APP。

HTTP是一种超文本传送协议（HyperText Transfer Protocol）,是一套计算机在网络中通信的一种规则。在TCP/IP体系结构中，HTTP属于应用层协议，位于TCP/IP协议的顶层。

HTTP是一种无状态的的协议，意思是指 在Web 浏览器（客户端）和 Web 服务器之间不需要建立持久的连接。整个过程就是当一个客户端向服务器端发送一个请求(request)，然后Web服务器返回一个响应(response),之后连接就关闭了，在服务端此时是没有保留连接的信息。

HTTP 遵循 请求/响应(request/response) 模型的，所有的通信交互都被构造在一套请求和响应模型中。
