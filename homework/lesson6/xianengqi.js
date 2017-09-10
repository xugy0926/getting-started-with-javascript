/*
*
*
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。
var dirPathString = '/Users/Administrator/my_project/words-from-the-heart';

// 定义要写入的文件路径

var filePathString = './qi.txt';



// 定义一个name_callback函数，用于接收读取文件夹内容后的结果

function name_callback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }

  if (files.length > 0) {
    var fileContent = files.join('\n');
    fs.writeFile(filePathString, fileContent.toLowerCase(), nameCallback);
  } else {
    console.log('写文件成功');
  }
}

// 定义一个函数用于接收读取写内容后的结果

function nameCallback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

// 调用fs的readdir函数读取所有的文件
fs.readdir(dirPathString, name_callback);
