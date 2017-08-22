
function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  // 模拟构建航班的时间信息
  var scheduleInfo = {
    start: '8/23 8:00',
    end: '8/23 10:30',
    from: 'beijing',
    to: 'hangzhou'
  };

  callback(scheduleInfo.start);
}

//---------------------------------------

function callback(startTime) {
  console.log(startTime);
}

// 调用间接函数checkFlightSchedule
checkFlightSchedule(callback);

