// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = '../../../words-from-the-heart';

// ---------------------------------
// 同步方案

var files = fs.readdirSync(dirPathString);
// console.log(files);
fs.open('words-from-the-heart', 'w+', function (err, fd) {
  for (i in files) {
    // console.log(files[i]);
    if (files[i].indexOf('json') != -1)
      fs.writeSync(fd, files[i] + '\n');
  }
})
//fs.writeFileSync('words-from-the-heart', files);
