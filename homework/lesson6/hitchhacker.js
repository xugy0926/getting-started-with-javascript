var fs = require('fs');

//同步方案
var dirPathString = './';
var files = fs.readdirSync(dirPathString);
console.log(files);
var outputPathString = './write_file_sync.txt';
fs.writeFileSync(outputPathString, files);

//异步方案
outputPathString = './write_file_async.txt';

// 定义一个callback函数，用于接收读取文件夹内容后的结果
function callback(err, files) {
    if (err) {
      console.log('读取文件失败');
      return;
    }
  
    if (files.length > 0) {
      console.log(files);
      //读完后写文件
      fs.writeFile(outputPathString, files, callback2);      
    } else {
      console.log('没有找到任何文件');
    }
  }

// 定义一个callback2函数，用于接收写文件的返回结果
function callback2(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
//异步回调之实现
setTimeout(function(){
    fs.readdir(dirPathString, callback);
},3000)
console.log("hahaha");

