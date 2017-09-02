var fs = require('fs');

var dirPathString = 'getting-started-with-javascript/homework/lesson1';

function callback(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    }

    if (files.length > 0) {
        console.log(files);
    } else {
        console.log('没有找到任何文件');
    }
}

fs.readdir(dirPathString, callback);

var stringContent = fs.readdir(dirPathString, callback);

var filePathString = 'write_file_async.txt';
    
var fileContent = fs.readdirSync(dirPathString);
console.log(fileContent);


function callback_writing(err) {
    if (err) {
        console.log('写文件失败');
    } else {
        console.log('写文件成功');
    }
}

fs.writeFile(filePathString, fileContent, callback_writing);


/* 
同步扫描and写文件方案

var fs = require('fs');

var dirPathString = 'getting-started-with-javascript/homework/lesson1';

var files = fs.readdirSync(dirPathString);
console.log(files);

var outputPathString = 'write_file_async.txt'

var fileContent = files;

fs.writeFileSync(outputPathString, fileContent);
*/