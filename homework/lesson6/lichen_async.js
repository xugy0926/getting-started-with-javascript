/**
* 异步方案
*/

//引入 file system 模块
var fs = require('fs');
//定义要扫描查询的路径
var dirPathString = '../../../words-from-the-heart';
//定义要写入txt文件路径
var writePathString = '../../homework/lesson6/write_name.txt';

//定义一个 callbackScan 函数，用于接收读取文件结果
function callbackScan(err, files) {
    if (err) {
        console.log('Caution: 读取文件失败!');
        return;
    }
    if (files.length > 0) {
        var fileContent = fileArrayToString(files);
        fs.writeFile(writePathString, fileContent, callbackWrite);
    } else {
        console.log('Alert: 没有找到任何文件!');
    }
}
//定义一个 fileArray 函数，用于将 files 转为逐行打印的字符串
function fileArrayToString(files) {
    var returnString = [];
    // var returnString = '';
    for (var i = 0; i < files.length; i++){
        returnString += i + 1 + '. ' + files[i] + '\n';
    }
    return returnString;
}

//定义一个 callbackWrite 函数，用于接收写入文件结果
function callbackWrite(err) {
    if (err) {
        console.log('Caution: 写入文件失败!');
    }
    else{
        console.log('Success: 写入文件成功!');
        console.log('文件路径：' + writePathString);
    }
}

// 第一步一定是先读取dirPathString下的所有文件，将内容返回给callbackScan
fs.readdir(dirPathString, callbackScan);