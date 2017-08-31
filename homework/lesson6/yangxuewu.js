/**
 * 异步方案
 */

 //引入 file system 模块
var fs = require('fs');
//定义要查询的路径
var dirPathString = '../../../words-from-the-heart/';
//定义要写入txt文件路径
var writePathString = '../../homework/lesson6/file_name.txt';

//定义一个 callback_read 函数，用于接收读取文件结果
function callback_read(err, files) {
    if (err) {
        console.log('------读取文件失败------');
        return;
    }
    if (files.length > 0) {
        var fileName = fileArray(files);
        fs.writeFile(writePathString, fileName, callback_write);
    }
}
//定义一个 fileArray 函数，用于将 files 转为逐行打印的字符串
function fileArray(files) {
    var returnString='';
    for (var i = 0; i < files.length; i++){
        returnString += files[i] + '\n';
    }
    return returnString;
}
//定义一个 callback_write 函数，用于接收写入文件结果
function callback_write(err) {
    if (err) {
        console.log('------写入文件失败------');
    }
    else{
        console.log('------写入文件成功------');
        console.log('文件路径：' + writePathString);
    }
}

fs.readdir(dirPathString, callback_read);