/*
* 异步方案
*
* 将内容写入到文件中
*/

// 引入fs模块
var fs = require('fs');

// 定义要写入的文件路径
var filePathString = './write_file_async.txt';

// 定义文件内容变量fileContent
var fileContent = 'Hello, JS';

// -----------------------------------
// 异步方案

// 定义一个callback函数，用于接收写文件的返回结果
function callback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

//调用fs的writeFile函数来写文件
fs.writeFile(filePathString, fileContent, callback);
