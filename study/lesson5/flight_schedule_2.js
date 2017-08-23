/*
* 间接回调处理案例
*/


// checkFlightSchedule函数的定义者设计了一个通过回调给加过的方案。
// 当函数处理完后，通过调用者设置过来的回调
function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  // 模拟构建航班的时间信息
  var scheduleInfo = {
    start: '8/24 8:00',
    end: '8/24 10:30',
    from: 'beijing',
    to: 'hangzhou'
  };

  callback(scheduleInfo.end);
}

//---------------------------------------
function callback(endTime) {
  console.log(endTime);
}

// 调用函数checkFlightSchedule，并塞一个回调函数以获取结果
checkFlightSchedule(callback);

