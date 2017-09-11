

终端输入：

git checkout master

出现：

$ git checkout master
homework/.DS_Store: needs merge
error: you need to resolve your current index first



#lesson5代码分析

>// 模拟异步处理的手法



// 定义函数callback

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



// 定义一个函数，函数名为callback

function callback () {

  console.log('我终于被调用了');

}

// 5秒钟后调用callback函数

setTimeout(callback, 5000);



> 直接返回结果

function checkFlightSchedule() {

  console.log('开始查航班信息');

  // 模拟构建航班的时间信息

  var scheduleInfo = {

​    start: '8/23 8:00',

​    end: '8/23 10:30',

​    from: 'beijing',

​    to: 'hangzhou'

  };

  return scheduleInfo.start;

}

//---------------------------------------

// 调用立即函数checkFlightSchedule

var startTime = checkFlightSchedule();

console.log(startTime);

> 间接回调处理

// checkFlightSchedule函数的定义者设计了一个通过回调的方案。

// 当函数处理完后，通过调用者设置过来的回调

function checkFlightSchedule(callback) {

  console.log('开始查航班信息');

  // 模拟构建航班的时间信息

  var scheduleInfo = {

​    start: '8/23 8:00',

​    end: '8/23 10:30',

​    from: 'beijing',

​    to: 'hangzhou'

  };

  callback(scheduleInfo.start);

}

//---------------------------------------

function callback(startTime) {//形参，不具有实际意义。

  console.log(startTime);

}

// 调用函数checkFlightSchedule，并塞一个回调函数以获取结果

checkFlightSchedule(callback);

> 模拟一个异步函数

function checkFlightSchedule(callback) {

  console.log('开始查航班信息');

  setTimeout(function() {

​    // 模拟构建航班的时间信息

​    var scheduleInfo = {

​      start: '8/23 8:00',

​      end: '8/23 10:30',

​      from: 'beijing',

​      to: 'hangzhou'

​    };

​    callback(scheduleInfo.start);

  }, 5000);//构建一个setTimeout函数需要内部参数为一个函数和时间

}

//---------------------------------------

function callback(startTime) {

  console.log('通过反馈通道获得了信息');

  console.log(startTime);

}

// 执行查询函数

checkFlightSchedule(callback);

> 匿名函数的用法

function run(back){

​    console.log('跑完用时');

​    setTimeout(function(){var totaltime='10mins';

​    back(totaltime);},1000)

}

function back(totaltime){

​    console.log(totaltime);

}

run(function(){var totaltime='10mins';

​    back(totaltime);})//这就是一个匿名函数



> 回调异步的用法



// 采购食物的函数

function buyFoods(callback) {

  console.log('我要开始采购食物啦。。。。');

  // 模拟5秒后通过callback返回结果

  setTimeout(function() {

​    console.log('采购完毕');

​    var foodsList = ['fish', 'egg', 'meat'];

​    callback(foodsList);

  }, 5000);

}

function callback(foodsList){

  console.log(foodsList);

}

// 做准备工作的函数

function prepare() {

  console.log('努力磨刀...努力洗碗...努力打扫...劳动最光荣');

  return true;

}

// 做菜的函数

function cooking(foodsList, callback) {

  console.log('开始做菜啦~~~');

  // 模拟5秒后通过callback返回结果

  setTimeout(function() {

​    console.log('今天要做这些菜' + foodsList);

​    console.log('大工告成，上菜');

​    var feast = ['鸡蛋西红柿', '红烧肉', '红烧鱼'];

​    callback(feast);

  }, 5000);

}

//------------------------------------------------

// 流程控制函数

function startWork() {

  var success = prepare();

  if (!success) {

​    console.log('还没准备好');

​    return;

  }

  buyFoods(function (foodsList) {

​    cooking(foodsList, function (feast) {

​      console.log('----酒席准备好了----');

​      for (var i = 0; i < feast.length; i++) {

​        console.log(feast[i]);

​      }

​    });

  });

  console.log('事情安排好了，我先去洗个澡');

}

// 干活啦~~

startWork();



# 代码分析

> 1. function output(name) { 
> 2. console.log(name);
> 3. }
>
> 4. var name = 'Hello,JS';
> 5. output(name);

1//name在这里是函数function的参数名，这个参数名是用于接收别人调用时给的参数。按照先声明，定义，赋值的顺序。这里声明一个参数通道，定义它的名字叫name.这个通道可以有各种名命，就像快递的包裹的内容多种多样，书，风扇，手机，接口转换器，等等，最终它们都被快递到目的地。

2//这里的name是输出这个参数通道里的数据。

4//重新定义了一个变量名，这里可以是任意的名称，比如input，name1，等等合法的变量名。就像是快递包裹上名字可以多中多样一样。

5//输出上面定义的那个变量名所带代表的变量数据。快递终于送到目的地。

# 阅读代码的收获

间接返回代码例子：

>function callback () {
>
>  console.log('我终于被调用了');
>
>}
>
>// 5秒钟后调用callback函数
>
>setTimeout(callback, 5000)//内置库调用setTimeout()函数，此函数有两个参数，第一个是一个函数返回值的参数，第二个后置时间的参数。



> function callback(){ 
>
>    console.log('我跑完了')；
>
> }
>
> //定义函数run，run接收一个函数类型的参数，当执行完动作后，调用该函数.
>
> function run(e){
>
>  console.log('🏃🏃🏃🏃')
>
> e();
>
> }
>
> run(callback);

直接返回的例子：

> function checkFlightSchedule() {
>
> console.log('开始查航班信息');
>
>   // 模拟构建航班的时间信息
>
>   var scheduleInfo = {    
>
> start: '8/23 8:00',  
>
>  end: '8/23 10:30',   
>
>  from: 'beijing',  
>
>  to: 'hangzhou' 
>
> };
>
>  return scheduleInfo.start;
>
> }//---------------------------------------// 调用立即函数checkFlightSchedule
>
> var startTime = checkFlightSchedule();
>
> console.log(startTime);