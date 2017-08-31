/*
* 同步方案
*
* 扫描某个文件夹的所有内容
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = '../../homework/lesson1';

// ---------------------------------
// 同步方案

var files = fs.readdirSync(dirPathString);
console.log(files);
