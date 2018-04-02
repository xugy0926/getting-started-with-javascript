var fs         = require('fs');
var filePath   = '../words'; // 该脚本文件在 script 目录下
var outputPath = 'out_put_async.txt';

fs.readdir(filePath, function(err, files) {
  if (err) {
    console.log('获取文件失败');
    return;
  }

  if (files.length <= 0) {
    console.log('没有找到任何文件');
  } else {
    console.log('开始写入');
    fs.writeFile(outputPath, files, function(err) {
      if (err) {
        console.log('写入文件失败');
      } else {
        console.log('写入文件成功');
      }
    });
  }
});
