/*
* 异步方案
*
* 扫描'words-from-the-heart'文件夹的所有内容
*并将内容写入到上机目录test文件中
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。
var dirPathString = '../../../words-from-the-heart';

// 定义要写入的文件路径
var filePathString = '../../../test.txt';

// -----------------------------------
// 异步方案

// 定义一个read函数，用于接收读取文件夹内容后的结果
function read(err, files) {
    if (err) {
        console.log('读取文件失败！')
        return;
    }

    if (files.length > 0) {
        console.log(files);

        // 调用fs的writeFile函数来写文件
        fs.writeFile(filePathString, files, write);
    } else {
        console.log('没有找到任何文件！')
    }
}

// 定义一个write函数，用于接收写文件的返回结果
function write(err) {
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
  }

//调用fs的readdir函数读取所有文件
fs.readdir(dirPathString, read);