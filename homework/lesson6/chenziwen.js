// # 扫描某个文件夹的所有内容 #

/* =====================================同步方案Start */


// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。
var dirPathString = '../../../words-from-the-heart';

// 调用fs.readdirSync()方法读取目录内容，并把结果赋值给files，打印files
var files = fs.readdirSync(dirPathString);
console.log(files);

/* =====================================将内容写入到文件中 */




// 定义要写入的文件路径
var outputPathString = './write_file_sync.txt';
// 定义文件内容变量fileContent
var fileContent = files;

//调用fs的writeFileSync函数来写文件
fs.writeFileSync(outputPathString, fileContent);



/* =====================================同步方案End */


