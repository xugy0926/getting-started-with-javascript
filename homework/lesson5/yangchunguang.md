#第五节课：分析代码

##1.indirect_call.js 

```
间接返回，是指第一段先定义出结果“我跑完了”，但是不打印输出。接着再运行“🏃🏃🏃🏃🏃”的代码，最后把定义的结果“我跑完了”通过run回传给“cb”（其实可以是ab，sb等任何字母，只不过为了便于理解和维护，和callback对应，才写了cb），回传之后console.log('🏃🏃🏃🏃🏃'),然后再通过cb（），输出“我跑完了”。
之所以是最简单的返回，就是通过定义callback，然后通过run把callback回传给cb，而不是直接输出结果，所以是间接返回。
```

##2.async_function.js // 最简单模拟异步的技巧

这里其实不是异步，只是时间延迟5秒。异步是并不立即返回结果，而是过了一小段时间后才出结果。

##3.flight_schedule_1.js // 立即返回案例

立即返回：就是发出指令后立即执行，并返回结果。

代码中，先发出查询航班信息指令，接着构建查询航班模型，然后return结果，到最后console.log(heckFlightSchedule);输出结果，中间并没有停滞，所以是立即返回。

##4.flight_schedule_2.js // 间接返回案例

间接返回：就是在直接返回的基础上，增加间接传输渠道。

本案例中，先把航班信息给callback，再通过checkFlightSchedule(callback)回传给callback(scheduleInfo.start);，最后通过console.log(startTime);输出。

##5.flight_schedule_3.js // 异步处理案例

异步：就是发出指令后，该干嘛干嘛，然后由后台执行，执行出结果后，再返回结果。

本案例没有看太明白，看到有5s的延迟，

##6.kitchen_wordflow_async.js // 异步实现一桌酒席

先定义function buyFoods、function prepare、function cooking三个步骤，然后通过流程控制实现做菜的流程，并在流程中增加判断功能，如果某一步骤没有准备好，则return（‘还没准备好’）。过程就是定义函数，确定流程，然后执行。

##代码分析：

![](C:\Users\ycg\Desktop\代码分析.jpg)

第一行和第二行代码为同一个name，第五行和第六行是同一个name，上下两个name可以不一样，但是上下有哪些关系就不清楚了。