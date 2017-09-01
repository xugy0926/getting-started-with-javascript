function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  setTimeout(function() {
    // 模拟构建航班的时间信息
    var scheduleInfo = {
      start: '8/23 8:00',
      end: '8/23 10:30',
      from: 'beijing',
      to: 'hangzhou'
    };

    callback(scheduleInfo.start);
  }, 5000);
}

//---------------------------------------
function callback(startTime) {
  console.log('通过反馈通道获得了信息');
  console.log(startTime);
}

// 执行查询函数
checkFlightSchedule(callback);
