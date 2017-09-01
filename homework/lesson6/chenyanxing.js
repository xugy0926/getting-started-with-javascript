/*
*第六课作业 陈燕杏
*
*异步方案
*/

//引入fs模块
var fs = require('fs');
//定义要查询的目标文件夹。
var dirPathString = '../../../words-from-the-heart';
//定义要写入的文件路径
var filePathString = './write_file_async_cyx.txt';
//定义一个callback函数，用于接收读取文件夹内容的结果
function read_callback(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    }
    if (files.length > 0) {
        //调用fs的writeFile函数,将读取的内容写进目标文件（这个地方的修改参考Wei同学的作业，实在太cool了!）
        var fileContent = files
        fs.writeFile(filePathString, fileContent, write_callback);
    }   else {
        console.log('没有找到任何文件');
    }
}
//定义一个write_callback函数，用于收写文件的返回结果
function write_callback(err) {
    if (err) {
        console.log('写文件失败');
    }   else {
        console.log('写文件成功');
    }
}
fs.readdir(dirPathString, read_callback);

/*使用异步方案中，参考同学的作业，发现自己写的漏洞随即改了过来：
1.读取文件和收写文件两次callback命名不能用没有意义的名字，比如：函数名+数字1，2。
2.参考老师的教材，原封不动把‘’读取文件‘’和‘’收写文件‘’，单独两部分写在json里，虽然终端可以跑起来，但是却只得到两句话“写文件成功‘’，显然是不合适的，也没有达到作业的目的。
*/

/*
*同步方案
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。
var dirPathString = '../../../words-from-the-heart';

//指定读取后所写入的文件的存放路径，名称和格式
var outputPathString = './write_file_sync_cyx.txt';

//读取内容并赋值给写入文件
var outPutFileContent = fs.readdirSync(dirPathString);

//调用fs的writeFileSync函数来写文件
fs.writeFileSync(outputPathString, outPutFileContent);