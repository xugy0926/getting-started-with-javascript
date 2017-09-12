//1、同步读写，但不能实现写入的全是json文件
var fs = require('fs');

var dirPathString = '../my_project3/words-from-the-heart';

var outputPathString = '../my_project2/rewrite2.txt';

fs.writeFileSync(outputPathString, fs.readdirSync(dirPathString));

//2、异步读，同步写，可实现写入的全是json文件
var fs = require('fs');

var dirPathString = '../my_project3/words-from-the-heart';

var outputPathString = '../my_project2/rewrite3.txt';

var names =[];

function readcallback(err, files) {
    if (err) {
        console.log('读取文件失败');
    }
    
    for (var i = 0; i < files.length; i++) {
        if (files[i].endsWith('.json')) {
            names.push(files[i]);
        }
    }
    fs.writeFileSync(outputPathString, names);
}

fs.readdir(dirPathString, readcallback);

//3、异步读写，应保证异步读在异步写前完成。
var fs = require('fs');

var dirPathString = '../my_project3/words-from-the-heart';

var filePathString = '../my_project2/rewrite.txt';

var names = [];

function readcallback(err, files) {
    if (err) {
        console.log('读取文件失败');
    }
    
    for (var i = 0; i < files.length; i++) {
        if (files[i].endsWith('.json')) {
            names.push(files[i]);
        }
    }
    fs.writeFile(filePathString, names, writecallback);
}

fs.readdir(dirPathString, readcallback);

function writecallback(err) {
    if (err) {
        console.log('写文件失败');
    } else {
        console.log('写文件成功');
    }
}
