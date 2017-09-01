##课程问题
* 第1行的name表示output函数需要输入参数，name只是个名字，用其他名字都可以如class、name1。
* 第5行是将字符串Hello，JS赋给变量name。
第6行中的name是output的参数，此时值为'Hello,JS'。



##疑问






*  作业中的function output（name）中name并没有定义，但是可以运行。但是对flight_schedule2.js中，checkFlightSchedule中如果键入未定义的内容，比如name，则会报错：undefined。这是为什么？





1. **老师说，异步函数帮助在等待获取数据时和用户进行交互。那么如果使用直接返回，那么浏览器在函数运行时就不能显示loading页面吗？
异步函数以及间接返回和直接返回最根本的区别是什么？老师讲的区别是是否经由另一选定通道返回。经由其他通道返回和能否同时运行loading页面之间是什么关系？**






* 课后，我对flight_schedule_2.js代码进行了一些小更改后查看了效果：
 - 定义checkFlightSchedule时，如果不设置参数，直接接checkFlightSchedule（），最后运行一样可以运行。
随意定义任意一个新的函数、或者变量，将函数名或者变量输入函数checkFlightSchedule，都可以得到和原来一样的结果。
 - 所以说，老师在设置时，后面括号内不是必要的吧？但是在（）内加入了callback，就说名参数必须是函数，但因为callback不传入任何数据，所以只要在参数内输入一个自定义的函数名，结果都是一样的。
 - 如果在原代码基础上，将最后调用的函数内参数去掉，为什么会提示错误，这又是什么原因：
>callback(scheduleInfo.start);
  ^

>**TypeError: callback is not a function**
>
    at checkFlightSchedule (C:\Users\Zou HN\my_project\my_project2\getting-started-with-javascript\study\lesson5\flight_schedule_2.js:19:3)   
    at Object.<anonymous> (C:\Users\Zou HN\my_project\my_project2\getting-started-with-javascript\study\lesson5\flight_schedule_2.js:29:1)   
    at Module._compile (module.js:573:30)        
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)  
    at Function.Module._load (module.js:462:3)                                        
    at Function.Module.runMain (module.js:609:10)
    at startup (bootstrap_node.js:158:16)
    at bootstrap_node.js:598:3
