/*
第六课作业
*/

//同步方案

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。
var dirPathString = '../../../words-from-the-heart';

//指定读取后所写入的文件的存放路径，名称和格式
var outputPathString = './wordsFromTheHeartName.txt';

//读取内容并赋值给写入文件
var outPutFileContent = fs.readdirSync(dirPathString);

//调用fs的writeFileSync函数来写文件
fs.writeFileSync(outputPathString, outPutFileContent);

//异步方案

var fs = require('fs');
var readPathString = '../../../words-from-the-heart';
var writePathString = './wordsFromTheHeartName2.txt';

// 定义一个read_callback函数，用于接收读取文件夹内容后的结果
function read_callback(err, files) {
    if (err) {
      console.log('读取文件失败');
      return;
    }
  
    if (files.length > 0) {
        //将读取的内容写进目标文件
        var fileContent = files
        fs.writeFile(writePathString, fileContent, write_callback);
    } else {
      console.log('没有找到任何文件');
    }
  }


//定义一个write_callback函数，用于接收写文件的返回结果
function write_callback(err) {
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
  }
  
  fs.readdir(readPathString, read_callback);
