

var fs = require('fs');

var dirPathString = '../../../words-from-the-heart';

var filePathString = './info.txt';

function readCallback(err, files) {
    if (err) {
      console.log('读取文件失败');
      return;
    }
    if (files.length > 0) {
      console.log(files);
      var fileContent = files;
      fs.writeFile(filePathString,fileContent,writeCallback)
    
    } else {
      console.log('没有找到任何文件');
    }
  }

function writeCallback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
fs.readdir(dirPathString, readCallback);

