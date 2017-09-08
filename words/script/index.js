// 引入fs模块
const fs = require('fs');

// 异步方式读取words-from-the-heart的所有文件
fs.readdir('../', function(err, files) {
  if (err) {
    console.log('readdir error.');
    return;
  }

  console.log('----read begin----');
  console.log(files);
  console.log('----read end----')

  //把含有json的文件名过滤出来
  var jsonFiles = [];
  for (var i = 0; i < files.length; i++) {
    if (files[i].includes("json")) {
      jsonFiles.push(files[i]);
    }
  }

  console.log('----filter begin----');
  console.log(jsonFiles);
  console.log('----filter end----');
});
