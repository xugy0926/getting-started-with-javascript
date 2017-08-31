/*
* 同步方案
* 扫描某个文件夹的所有内容
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹
var dirPathString = '../words-from-the-heart';

var files = fs.readdirSync(dirPathString);
console.log(files);

// 定义要写入的文件路径
var outputPathString = '../baoguoqiang.txt';

// 定义文件内容变量fileContent
var fileContent = '.....';

// 调用fs的writeFileSync函数来写文件
fs.writeFileSync(outputPathString,fileContent);




// 异步方案

// 引入fs模块
var fs = require('fs');

//定义要查询的目标文件夹。
var dirPathString = '../words-from-the-heart';

//定义一个callback函数，用于接受读取文件夹内容后的结果
function callback(err,files) {
    if (err) {
        console.log('读取文件失败');
    }

    if (files.length > 0) {
        console.log(files);
    } else {
        console.log('没有找到任何文件');
    }
}

// 调用fs的readdir函数读取所有文件
fs.readdir(dirPathString,callback);

// 定义要写入的文件路径
var filePathString = '../baoguoqiang.txt';

// 定义文件内容变量fileContent
var fileContent = '.....';

// 定义一个callback函数，用于接受写文件的返回结果
function callback(err) {
    if (err) {
        console.log('写文件失败');
    } else {
        console.log('写文件成功');
    }
}

//调用fs的writeFile函数来写文件
fs.writeFile(filePathString,fileContent,callback);

