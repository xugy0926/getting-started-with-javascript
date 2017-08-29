/*
* 同步方案
*
* 将内容写入到文件中
*/

// 引入fs模块
var fs = require('fs');

// 定义要写入的文件路径
var outputPathString = './write_file_sync.txt';

// 定义文件内容变量fileContent
var fileContent = 'Hello, JS';

// ---------------------------------
// 同步方案

//调用fs的writeFileSync函数来写文件
fs.writeFileSync(outputPathString, fileContent);
