//引入
var fs = require('fs');
// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = '/JavaScriptzt/GitHubxgy/getting-started-with-javascript/homework/lesson1';
//定义写入文件
var filePathString = 'heart.txt';
// -----------------------------------
// 异步方案
// 定义一个callback函数，用于接收读取文件夹内容后的结果
function callback1(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    }
    if (files.length > 0) {
        console.log(files);
        //将读取的文件写入
        fs.writeFile(filePathString, files, callback);
    } else {
        console.log('没有找到任何文件');
    }
}

//调用fs的readdir函数读取所有文件
fs.readdir(dirPathString, callback1);


// 定义一个callback函数，用于接收写文件的返回结果
function callback(err) {
    if (err) {
        console.log('写文件失败');
    } else {
        console.log('写文件成功');
    }
}