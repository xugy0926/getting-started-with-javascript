/*
* 异步方案
*
* 扫描某个文件夹的所有内容
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查哪个文件夹的内容，就修改下面路径字符串。
var dirPathString = '../../homework/lesson2';

// 定义要写入的文件路径
var filePathString = './wengguihua_async.txt';

// 定义一个callback函数，用于接收读取文件夹内容后的结果
function readCallback(err,files){
  if (err) {
    console.log('读取文件失败');
    return;
  }

  if (files.length > 0) {
    console.log(files);
    var fileContent = files;  // 定义文件内容变量fileContent
    fs.writeFile(filePathString, fileContent, writeCallback);  //调用fs的writeFile函数来写文件
  } else {
    console.log('没有找到任何文件');
  }
}

// 定义一个callback函数，用于接收写文件的返回结果
function writeCallback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

// 调用fs的readdir函数来读取文件夹
fs.readdir(dirPathString,readCallback);