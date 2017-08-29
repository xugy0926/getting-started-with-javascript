### JavaScript Lesson5 学习心得

#### 知识点

- css是对html的美容，用来渲染界面


- 相比同时从服务器拿完数据再显示，分步骤拿数据的方法可以较好地减轻卡顿感


- 前端交互的关注点：

​            用户与html的交互

​            html与js代码的交互

​            js代码与服务器的交互

- 复习函数的三要素：目标--函数名／要求--参数／结果--返回值
- 调用函数的顺序图很重要。每一个函数代表了一个功能模块，用一个调度函数将这些模块按照逻辑汇聚在一起，是我们实现大模块功能的基本思路。


- 一个函数的被调用时，完成了‘参数判断’，‘逻辑处理’，‘返回结果’这三个步骤。返回结果分以下三种做介绍：

​            同步，直接返回（flight_schedule_1.js）

`// 调用立即函数checkFlightSchedule`

`console.log(checkFlightSchedule());`

​            间接返回通道--回调(flight_schedule_2.js)

对于间接返回通道的理解，我想用以下代码来阐述：

**相比直接返回，间接返回通道的存在，让代码变得更灵活，功能也更多样**

``function checkFlightSchedule(feedbackMethod) {`

	console.log('开始查询航班信息')
	var scheduleInfo = {
		start: '8/23 8:00',
		end: '8/23 10:30',
		from: 'beijing',
		to: 'hangzhou'
	};
	
	feedbackMethod(scheduleInfo.start);
`}`
`// 秘书这个函数库，不仅能提供查询信息的服务，还自带了多种返回信息方式的函数`
`function weiXin(startTime) {`
	console.log('微信传来消息'+startTime);
`}`
`function duanXin(startTime) {`
	console.log('短信传来消息'+startTime);
`}`
`function email(startTime) {`
	console.log('邮件传来消息'+startTime);
`}`
`// 老板在调用秘书这个函数库时，需要携带信息定义好他想要的信息反馈等方式，其中可选微信，短信，邮件`

``checkFlightSchedule(duanXin);`

​            异步,属于回调的一种方式(flight_schedule_3.js)

`setTimeout(function() {feedbackMethod(scheduleInfo.start)},5000);`

**在回调的基础上，异步给这个返回通道增加了延时**



#### 作业 对下述代码的理解

- 对name的理解

`function output(name) {`

```markdown
//第一个name是函数output的参数（parameter），它可以任意命名,
//但必须具备可读性，比方说 name1 name2
console,log(name);
//第二个name是函数output的argument（不知道对应的中文怎么说），
//当它和第一个name同名，该函数才有意义
```
`}`

`var name = 'Hello, JS';`
`// 第三个name是一个String变量name，并赋值为'Hello, JS'`
`output(name);`
`// 是函数output的argument，即调用函数output的参数，它的value等效第三个name`

- 对kitchen_workflow_async.js异步函数的理解

  **问题：省去函数命名的环节，到底是让函数更易读还是更不易呢？希望老师解答一下～**

  `function F2(feast) {`

        console.log('----酒席准备好了----');
        for (var i = 0; i < feast.length; i++) 
        {
          console.log(feast[i]);
        }
  `}`

  `function F1(foodsList) {`
    cooking(foodsList, F2);
  `}`
  `// 流程控制函数`
  `function startWork() {`
    var success = prepare();

    if (!success) {
      console.log('还没准备好');
      return;
    }
    buyFoods(F1);

    console.log('事情安排好了，我先去洗个澡');
  `}`

  `// 干活啦~~`
  `startWork();`

  **总共定义了6个函数，**分别是采购函数buyFoods（），准备函数prepare（），做菜函数cooking（）和流程控制函数startWork（），还有2个未命名的函数

  **未命名的2个函数**分别是buyFoods（）和cooking（）的回调通道,前者用来传回foodsList数组，后者用来传回feast数组，并按照顺序打印

  `function (feast) {`

        console.log('----酒席准备好了----');
        for (var i = 0; i < feast.length; i++) {
          console.log(feast[i]);
        }
  `function (foodsList) {`

      cooking(foodsList, function (feast) {
        console.log('----酒席准备好了----');
        for (var i = 0; i < feast.length; i++) {
          console.log(feast[i]);
        }
      });