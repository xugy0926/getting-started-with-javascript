
//同步
var fs=require('fs');
var dirPathString='./';
var files=fs.readdirSync(dirPathString);
var outputPathString = './write_file_sync.txt';
var fileContent =files;
fs.writeFileSync(outputPathString, fileContent);

//异步
var fs = require('fs');
var dirPathString = './';
function callback(err, files) {
  if (err) {
    console.log('读取文件失败');
  }
  if (files.length > 0) {
    var fileContent = files;
    fs.writeFile(filePathString, fileContent, callback1);
  } else {
    console.log('没有找到任何文件');
  }
}
fs.readdir(dirPathString, callback);
var filePathString = './write_file_async.txt';
function callback1(err) {
  if (err) {
    console.log("写文件失败");
  } else {
    console.log('写文件成功');
  }
}
