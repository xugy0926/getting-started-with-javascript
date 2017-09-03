/*
* 异步方案
*
* 扫描某个文件夹的所有内容
*
* 将扫描的内容写入到文件中
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹，如果你想查询其他文件夹的内容，就修改下面的字符串。
var fileReadPathString = '../../../words-from-the-heart';

// 定义要写入的文件路径
var fileWritePathString = '../../../words-from-the-heart/file_list_async.txt';

//----------------------------------------------------
// 异步方案

// 定义一个read_Callback函数，用于接收读取文件夹内容再将其写入txt文件后的结果
function readCallback(err, files) {
    if (err) {
        console.log('读取文件失败');
    }

    if (files.length > 0) {
       fs.writeFile(fileWritePathString, files, writeCallback);
    } else {
        console.log('没有找到任何文件');
    }
}

// 定义一个writeCallback函数，用于接收写文件的返回结果
function writeCallback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

// 调用fs的readdir函数读取所有文件
fs.readdir(fileReadPathString, readCallback);



/*
        for (var i = 0, j = 0; i < files.length; i++) {
            var index = files[i].lastIndexOf('.');
            var extend = files[i].substring(index + 1);
            var fileContent = [];
            if (extend == 'jason') {
                fileContent[j] = files[i];
                fileContent[j++] = "\n";
                j++;
            }
        }
*/