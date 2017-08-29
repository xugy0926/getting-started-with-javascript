//异步
var fs = require('fs');

var dirPathString = '../../../words-from-the-heart';

function scan_callback(err,files) {
    if (err) {
        console.log('读取文件失败');
    }

    if(files.length > 0) {
        console.log(files);
    var filePathString = './liuliyuanAsync.txt';
    var fileContent = files.join("\n");
    fs.writeFile(filePathString, fileContent, write_callback);
    console.log(files.length);
    } else {
        console.log('没有找到任何文件');
    }
}

fs.readdir(dirPathString,scan_callback);

function write_callback (err) {
    if (err) {
        console.log('写文件失败');
    } else {
        console.log('写文件成功');
    }
}
