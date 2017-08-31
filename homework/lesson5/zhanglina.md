---
2017-08-28 第5次作业补交  —-create by zhanglina
---

1. ##### 作业回答：

   ```javascript
   1. function output(name) {
   2.     console.log(name);
   3. }

   4. var name = 'Hello,JS';
   5. output(name);
   ```

   ```sql
   第1行的name:声明一个output的函数，该函数有一个为name的形参
   第4行的name:定义了一个叫name的变量，并给其进行赋值操作，或者叫做初始化的操作
   第5行的name:将第4行初始化name，传给函数进行调用
   ```

   ​

2. ##### 课程理解：

   ```
   函数的三要素：参数判断，逻辑处理，返回结果
   参数判断：主要进行了函数有效性的判断，如果传入的值符合程序的规则，才会执行后续程序，保证了代码的完整性。
   逻辑处理：是程序的核心的，该部分是通过程序语言，将PM的需求通过代码的方式实现
   返回结果：程序处理完成之后，给出一个执行结束的标致。
   ```

   ​

3. ##### 代码改写：

   ```javascript
   function checkFlightSchedule() {
       console.log('开始查航班信息');
     
       // 模拟构建航班的时间信息
       var scheduleInfo = {
         start: '8/23 8:00',
         end: '8/23 10:30',
         from: 'beijing',
         to: 'hangzhou'
       };
     
       return scheduleInfo.start + " "+ scheduleInfo.end + " " + scheduleInfo.from + " " + scheduleInfo.to;
     }
     
     //---------------------------------------
     
     // 调用立即函数checkFlightSchedule
     var infomation = checkFlightSchedule();
     console.log(infomation);

   =====================差点没有看懂老师的代码=======================
   // 定义函数callback——修改前
   function callback() {
     console.log('我跑完了');
   }

   // 定义函数run，run接收一个函数类型的参数，当执行完动作后，调用该函数。
   function run(cb) {
     console.log('🏃🏃🏃🏃🏃');
     cb();
   }

   // 调用函数run，并把函数callback当参数传过去
   run(callback);

   // 定义函数callback——修改后
   function callback() {
       console.log('我跑完了');
     }
     
     // 定义函数run，run接收一个函数类型的参数，当执行完动作后，调用该函数。
     function run(cb) {
       console.log('🏃🏃🏃🏃🏃');
       callback();
     }
     
     // 调用函数run，并把函数callback当参数传过去
     run(1);


   代码都执行一遍，还有一个kitchen_workflow_async.js没有看懂呢，回去继续看
   ```

   ​

4. ##### 难点总结：

   ```JavaScript
   1、关于异步的定义：(百度)
   在计算机领域，同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。

   2、个人理解：(结合老师的讲解)
   老师以老板和秘书之间的交互举例：间接返回、异步处理方式，老师和秘书，都可以各做各的事情，而不是老板傻傻地在线等。待秘书查好航班信息后，可将结果反馈给老板。

   3、代码的实现：
   由于第一次接触函数传参时，传入的参数同样是一个函数的情况，开始老师讲的这样方式，第一：表示奇怪，第二：理解起来有点弯。直到老师讲到一句话，间接返回，就是定义函数时，不让其直接返回，让其按照某种指定的规则和通道返回，忽然有种打通了任督二脉的感觉。通过课上理解和结合代码的实现，渐渐找到了些为什么要定义间接返回的方式和异步这种的场景的理解。不过我觉得要更深层次的理解，仍需要在实际编程，应用的时候，返回再次来思考，或许能够理解的更透彻。

   回调函数，间接返回，异步，这些概念啊，第一次见到他们的时候，十分懵逼。

   ```

   ​





