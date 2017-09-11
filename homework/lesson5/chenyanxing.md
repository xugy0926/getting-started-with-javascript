分析代码

下面代码中，第1行、第4行、第5行的name变量的差异：

    function output(name) {     // 定义函数output，output接收一个函数类型的参数name，当执行完动作之后，调用该函数。
         console.log(name);
     }
     var name = 'Hello,JS';   // 定义函数变量name,并且赋值'Hello,JS'
     output(name);   // 调用函数output，并把函数name当参数传过去
    

观察代码

1.type_array

数组的样式：['中括号内容并排']; 

遍历数据：挨个数组元素查一遍

for (循环开始的初始化变量 var i = 0; 循环条件 i < myLikeColorList.length; 计数器变量更新 i++) {

	console.log(myLikeColorsList[i]);

}

2.type_boolean_sample.js

    var student = false;
    
    //虽然student是一个boolean类型的变量，但可以调用toString()方法，并输出string类型的值。
    console.log(student.toString());

toString() 方法可把一个逻辑值转换为字符串，并返回结果。

返回值：根据原始布尔值或者 booleanObject 对象的值返回字符串 "true" 或 "false"。

3.type_number

https://ws1.sinaimg.cn/large/006tNc79gy1fj3b745f8dj30n307gwfq.jpg

把Number对象转换成字符串，并返回此字符串。

从上图得到的结果可以看出，第一行打印出了 number 类型的变量值，第二行打印出了 number 变量转化成 string 类型后的变量值。

4.type_object

从例子看出，数据类型为对象的变量支持修改、增加和删除对象内变量，同时还支持函数变量。

https://ws2.sinaimg.cn/large/006tNc79gy1fj3brp9ufuj30ei0jdgod.jpg

再一次打印config时，内嵌的run函数变量只是显示 run: [Function] ，赋值的函数表达式不用打印出来❓

    { height: 170,
      weight: 120,
      sex: 'woman',
      bloodType: 'A',
      run: [Function] }

5.type_string

https://ws1.sinaimg.cn/large/006tNc79gy1fj3c1r54lej30c00kywgc.jpg

从上图可以看出，根据游标访问字符串的单个字符和通过字符串的长度属性循环访问单个字符，的打印结果虽然是一样的，但是用途却不同。前者更适合调用name的单个字符，而后者是循环访问单个字符。

通过游标切割字符串：

    console.log(name.substring(0, 4));

定义与用法：substring() 方法用于提取字符串中介于两个指定下标之间的字符。

注意：语法

    stringObject.substring(start,stop)

  参数   	描述                                      
  start	必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。
  stop 	可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。

说明：substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。

如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。

提示：substring() 不接受负的参数。

indirect_call（最简单的间接返回）

https://ws3.sinaimg.cn/large/006tKfTcgy1fj4f9d10z3j30el0a3wfw.jpg

从上图可以看出，前面function定义的函数都是存到内存去的，执行第14行run(callback);先调用函数run，再间接返回调用callback。

async_function（最简单模拟异步的技巧）

从上图可以看到，使用了setTimeout这个内置的方法，我们可以直接调用它，作用是模拟延时的一种实际场景，第一个参数：callback被调用的代码，第二个参数：时间，5秒。待5秒之后，调用函数callback的结果就打印出来了。

flight_schedule_1（立即返回案例）

https://ws4.sinaimg.cn/large/006tKfTcgy1fj4gawufptj30n60j93zt.jpg

https://ws2.sinaimg.cn/large/006tKfTcgy1fj4g0rjfqwj30b70eo0ug.jpg

老板不挂电话，秘书直接查起飞时间告诉老板。调用立即函数checkFlightSchedule，return一个结果。

flight_schedule_2（间接返回案例）

https://ws1.sinaimg.cn/large/006tKfTcgy1fj4gpu7r9vj30mp0ipabk.jpg

https://ws2.sinaimg.cn/large/006tKfTcgy1fj4hv63x66j30dq0hnju3.jpg

调用函数checkFlightSchedule，通过回调执行callback函数输出航班时间信息。

一开始对定义函数callback那里是有疑问的，为什么又设置了一个变量startTime❓通过老师举的例子，明白了这里函数定义的变量和上面传进去的变量是截然不同的，但值是一样的，scheduleInfo.start把值赋值给了startTime，就算startTime的函数名不同也是可以执行的。老师，这样理解对么？

flight_schedule_3（异步处理案例）

https://ws3.sinaimg.cn/large/006tKfTcgy1fj4zzcnp0vj30k80iw3zp.jpg

https://ws1.sinaimg.cn/large/006tKfTcgy1fj502oazmrj30bi0gsjtj.jpg

从上图可以看出，与上个例子间接返回不用的是老板在调结果的时候，直接安插一个回调的通道，秘书处理完后直接通过通道告诉老板结果，这里使用了setTimeout来模拟这样一个异步情景。

kitchen_workflow_async（异步实现一桌酒席）

可以看到顺序图的强大，老师墙裂推荐把流程用时序图的方式画出来。不止是后面的课程会大量用到，甚至是以后的工作中都会经常用到，get新技能。

让我深刻的是，写函数的步骤其实就类似我们的生活，做事的流程一步一步转化成为代码，我想编程的意义大概就是把我们所想的东西，去学习去掌握怎么结合具体的语法，把它实现出来。

https://ws4.sinaimg.cn/large/006tKfTcgy1fj50hqar7ej30kd0ivwgj.jpg

https://ws3.sinaimg.cn/large/006tNc79gy1fj5espqijoj30ih0zkjtf.jpg

一开始我的思绪是混乱的，觉得老师的顺序打印出来怪怪的，跟组员交流之后，发现是我想错了，没搞懂流程的顺序。理了下思路之后，有恍然大悟的感觉。

厨房做菜流程这里我们首先要学会把任务拆解，把流程分几步，把步分好，前面把函数prepare()、buyFoods()、cooking()给定义好，最后在startWork()函数，我们只需要调这个调那个，把事情搞定就是这样。



分析函数变量【表达式函数定义法】——在 startWork()里用了两层（参考lipeng同学作业）

第一层，买菜，调buyFoods()的时候

     buyFoods(function(foodsList) {
        cooking(foodsList, function(feast) {
          console.log('----酒席准备好了----');
          for (var i = 0; i < feast.length; i++) {
            console.log(feast[i]);
          }
        });
      });

这里function(){} 当成 buyFood 的回调函数变量:

    buyFood(function() {}); 

给回调函数添加参数 foodList, 目的要把foodList传到下一流程:

    buyFood(function(foodList) {}); 

最后，把买完菜之后要执行的代码，也就是做菜函数，cooking() ， 放在{}花括号里：可以看到，cooking() , 有两个参数，也就是foodList和 回调函数变量。

第二层，做菜，cooking()的回调函数变量

把function(){} 当成 cooking() 的回调函数变量:

    cooking(foodList, function(){});

给cooking的回调函数添加参数 feast, 目的要把feast传到下一流程:

    cooking(foodsList, function (feast) {});

然后把做好菜之后要执行的代码，也就是console.log('----酒席准备好了----') 和做好的菜式，放在{}花括号里:

    cooking(foodsList, function (feast) {
          console.log('----酒席准备好了----');
          for (var i = 0; i < feast.length; i++) {
            console.log(feast[i]);
          }
    });

最后，把第二层构建的做菜代码，放在买菜回调函数花括号里{}

从这样：

    buyFood(function(foodList){
        cooking(foodList, function(){});
    });

变成这样：

     buyFoods(function (foodsList) {
        cooking(foodsList, function (feast) {
          console.log('----酒席准备好了----');
          for (var i = 0; i < feast.length; i++) {
            console.log(feast[i]);
          }
        });
      });

总结

回调的基本格式：

    function caller(callback) {
      // do something
      var data = XXX;
      // pass data to callee
      callback(data);
    }
    
    function callee(data) {
      // do following thing
    }
    
    caller(callee);


