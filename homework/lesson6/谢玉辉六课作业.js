/*
* 同步方案
*异步我是思考了几个小时一直搞不定。。。然后看了同学的作业才搞明白。多思考多测试，搞不定再看同学的作业可以立马恍然大悟。

*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = '../../homework/lesson1';
var outputPathString = './write_file_sync.txt';
// ---------------------------------
// 同步方案

var fileContent = fs.readdirSync(dirPathString);
fs.writeFileSync(outputPathString, fileContent);

//--------------------------------------------------------------------------
   //异步处理
//.................................................................//////


// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = '../../homework/lesson1';
var filePathString = './write_file_async.txt';

// -----------------------------------
// 异步方案

// 定义一个callback函数，用于接收读取文件夹内容后的结果
 function c(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }

  if (files.length > 0) {
    var fileContent = files
    fs.writeFile(filePathString, fileContent, callback);
  } else {
    console.log('没有找到任何文件');
  }
  
}
function callback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
  
}


//调用fs的readdir函数读取所有文件
fs.readdir(dirPathString, c);



