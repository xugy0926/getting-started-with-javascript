/*
* 间接回调处理案例
*/

<<<<<<< HEAD

<<<<<<< HEAD
// checkFlightSchedule函数的定义者设计了一个通过回调给加过的方案。
// 当函数处理完后，通过调用者设置过来的回调
=======
=======
>>>>>>> upstream/master
// checkFlightSchedule函数的定义者设计了一个通过回调给结果的方案。
// 当函数处理完后，通过调用者设置过来的回调执行输出
>>>>>>> upstream/master
function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  // 模拟构建航班的时间信息
  var scheduleInfo = {
<<<<<<< HEAD
    start: '8/24 8:00',
    end: '8/24 10:30',
=======
    start: '8/23 8:00',
    end: '8/23 10:30',
>>>>>>> upstream/master
    from: 'beijing',
    to: 'hangzhou'
  };

<<<<<<< HEAD
  callback(scheduleInfo.end);
}

//---------------------------------------
function callback(endTime) {
  console.log(endTime);
=======
  callback(scheduleInfo.start);
}

//---------------------------------------
function callback(startTime) {
  console.log(startTime);
>>>>>>> upstream/master
}

// 调用函数checkFlightSchedule，并塞一个回调函数以获取结果
checkFlightSchedule(callback);
