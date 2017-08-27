/*
* 扫描某个文件夹的内容,并将内容写入txt文件中
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹
var dirPathString = '../../../words-from-the-heart';

// 调用fs的readdirSync函数来读取文件
var files = fs.readdirSync(dirPathString);
console.log(files);

// 定义要写入的文件路径
var filePathString = './wish_filename.txt';

// 定义文件内容变量
var fileContent = fs.readdirSync(dirPathString);

// 定义一个callback函数，用于接收写文件的返回结果
function callback(err) {
    if (err) {
        console.log('写文件失败');
    } else {
        console.log('写文件成功');
    }
}

// 调用fs的writeFile函数来写文件
fs.writeFile(filePathString,fileContent,callback);











