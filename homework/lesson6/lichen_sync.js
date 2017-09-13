/*
* 同步方案
*
* 扫描某个文件夹的所有内容
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = '../../../words-from-the-heart';

// 定义要写入的文件路径
var writePathString = '../../homework/lesson6/write_name.txt';


var files = fs.readdirSync(dirPathString);

function fileArrayToString(files) {
    var returnString = [];
    // var returnString = '';
    for (var i = 0; i < files.length; i++){
        returnString += i + 1 + '. ' + files[i] + '\n';
    }
    return returnString;
}
// ---------------------------------
// 同步方案

//调用fs的writeFileSync函数来写文件
fs.writeFileSync(writePathString, fileArrayToString(files));
console.log('Success: 写入文件成功!');
console.log('文件路径：' + writePathString);