var fs = require('fs');
var readPath = './words-from-the-heart';
var writePath = './write_files.txt';

function write(err){
    if (err){
        console.log('写入失败！');
    } else {
        console.log('写入成功！');
    }
}

var files = fs.readdirSync(readPath);
console.log(files);

fs.writeFile(writePath, files, write);

/*
尝试默写代码：
用异步的方式完成作业。
以下的代码输出的txt里面是undefined，到底哪里出了问题？

//先声明fs，从而调用内部函数的功能
var fs = require('fs');

//声明读取文件的相对路径
var readPath = './words-from-the-heart';

//声明写入文件的相对路径
var writePath = './write_files.txt';

//定义读取文件的函数read
function read(err, files){
    if (err){
        console.log('什么时候才能输出这个句子呢？程序出错时看到了。。。');
    }
    
    if (files.length > 0){
        console.log(files);
    } else {
        console.log('这里没有你要的文件');
    }
}

//定义写入文件的函数write
function write(err){
    if (err){
        console.log('写入失败！');
    } else {
        console.log('写入成功！');
    }
}

//执行文件
var files = fs.readdir(readPath, read);
console.log(files);

fs.writeFile(writePath, files, write);
*/
