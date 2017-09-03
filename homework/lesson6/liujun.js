

var fs = require('fs');

var dirPathString = '../../../words-from-the-heart';

function callback(err, files) {
    if (err) {
      console.log('读取文件失败');
      return;
    }
  
    if (files.length > 0) {
      console.log(files);
    } else {
      console.log('没有找到任何文件');
    }
  }
  
  fs.readdir(dirPathString, callback);


var filePathString = './liujun.txt';

var fileContent = 'Hello, JS';

function callback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

fs.writeFile(filePathString, fileContent, callback);


