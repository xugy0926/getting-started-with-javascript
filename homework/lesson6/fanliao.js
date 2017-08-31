var fs = require('fs');
var dirPathString = './';
function callback(err, files) {
    if (err) {
      console.log('读取文件失败');
    }
  if (files.length > 0) {
      var filePathString = '../xlh.txt';
      var fileContent = files.join("\n");
      fs.writeFile(filePathString, fileContent, call);
    } else {
      console.log('没有找到任何文件');
    }
  }
  fs.readdir(dirPathString, callback);
function call(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
