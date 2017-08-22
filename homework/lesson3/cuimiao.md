#小白cuimiao的第三节课作业总结

1.老师开课先讲解了一幅流程图，并用微信发消息为实例，讲解数据交互的案例。重点强调了time是服务器给出的，被篡改的可能性小。

2.nodejs是运行环境，是基于v8引擎的JavaScript运行时。运行时是一种面向对象编程语言的运行环境。nodejs就是js的运行环境。
一组代码结合nodejs运行环境，形成一个完整的运行环境。
而软件架构是指系统的设计图。

3.数据类型的价值，不同的数据类型，可以简化计算。比如，直接说小明是18岁，比说小明是1999年出生的，要少一步计算。
不同的数据类型决定了代码执行的效率，效率包括：存储效率，计算效率，传递效率。这体现在了内存的占用及消耗情况。    

4.正确是说法：定义一个变量，并对其赋值。
5.定义了变量，就要使用它，否则它就毫无用处，就是垃圾数据。

6.命名的力量。
6.1让名字包含更多的信息。


6.2 要what 不是how。var inputData   不如  var  employeeData 
完整代表了变量的含义吗？判断的依据是，是否能推导出更多信息。
以问题为导向了吗？是否反映了问题而非解决方案。

7.实操
7.1表达式语句/赋值语句
var age = 18;  注意要有一个英文的分号
表达式语句和表达式是不一样的，表达式指的是    1 + 1；

7.2条件语句   if
if ( age >= 18 ) {
   console.log( '已成年' );
}else{
   console.log( '未成年' );
}
console.log( '\n' );
注释：gae>=18是表达式

7.3条件语句--switch  开关
break 是指处理完这个路径后，就要退出
布尔型只有ture 和false  没有其他情况

7.4 for循环
【编程里有三大结构：顺序，条件，循环】switch很少用
循环语句的三要素
1.循环开始的初始化变量  var i = 0 ;
2.循环条件 i < myLikeColorslist.length ;
3.计数器变量更新  i++;

for ( var i = 0; i < myLikeColorsList.length ; i++) {
   console.log( myLikeColorslist[i] );
}

【注意：  分号“；”是代表一个空语句】

改进：绳子两头收，只需要轮询2次
for (var i = 0, j = myLikeColorsList.length - 1; i < myLikeColorsList.length / 2 ; i++, j--) {
  console.log(myLikeColorsList[i]) ;
  console.log(myLikeColorsList[j]);
}


【我的疑问】 myLikeColorsList.length / 2     这个是什么意思呢？？？？？


7.5 循环语句 while 
var i =0 ;
while ( i < myLikeColorsList.length) {
   console.log(myLikeColorsList[i]) ;
   i = i + 1;  //  i++
}

8 网页交互原理
 浏览器与服务器的交互
8.1获取html文件  8.2 解析html文件  8.3 获取js/css文件  8.4 更新页面/执行js代码

【作业】参考新大登录流程图画出浏览器与服务器之间的流程图

【Q&A】
犀牛书，前七章最基础，是需要认真学习的。w3school  看到break之前。

前端，把后端的数据拿过来去刷新页面，展示网页，把数据更友好的展现给用户。
后端，是指处理数据，跟数据库有关系，后端就是提供数据的服务。

{}  后边有分号是定义一个对象。当是for循环或者if语句时，{}后面是没有分号的。

全桟，老师现在不太喜欢这个词。全桟是对一个工程师无比高的荣誉，不仅可以写前端还可以写服务端，而且还能设计api，做自动化测试，搭服务器，设计数据库，架构等等。只会前端和后端，不叫全桟。