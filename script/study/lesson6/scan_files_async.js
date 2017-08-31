/*
* 异步方案
*
* 扫描某个文件夹的所有内容
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = '../../homework/lesson1';

// -----------------------------------
// 异步方案

// 定义一个callback函数，用于接收读取文件夹内容后的结果
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

//调用fs的readdir函数读取所有文件
fs.readdir(dirPathString, callback);
