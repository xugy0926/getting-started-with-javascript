//第6课作业 郎建军
//目的：练习同步及异步对本地文件夹的文件进行读写操作
//作业要求：扫描读取words-from-the-heart项目中的json文件名，整理到一个txt文件中
//此次用同步读取，异步写入来完成作业。如果读取也采用异步，则必须通过编程结构来保证在完成读取后进行写操作，以免出错。

// 引入fs模块
var fs = require('fs');

//指定文件目录
var dirPathString = '../../../words-from-the-heart'

//同步读取该目录下所有文件
var files = fs.readdirSync(dirPathString);

//打印测试读取是否成功
//console.log(files);

//查JS资料，得知readdirSync返回的结果是Array，而Array可根据其元素的index来进行操作，可借助for循环来完成。
var writeFilePath = '../../../filenames_langjianjun.txt'

//调用fs的writeFile函数来写文件.这里借用了caozhen的部分代码，并做了些修改。比如通过去掉文件名的后5个字符来去掉后缀名，
//在\n前加入\r来强行给每个文件名换行，使文件保持较好的可读性。
for (var i = 0; i < files.length; i++) {
    if (files[i].match('\.json$') == null ) {
        console.log('[Warning] ' + files[i]+ ' 不是json,跳过')
    }
    else {
        fs.writeFile(writeFilePath, files[i].substring(0, files[i].length-5)+'\r\n', {flag: 'a'}, callback);
    }
 }
 console.log('写文件成功');  

// 定义一个callback函数，用于接收写文件的返回结果.原先在if后加了else，结果执行时出现了n多次“写文件成功”，于是把callback
//中的else去掉，并将console.log('写文件成功')移到for循环外。当然，这样也会带来一个不好的后果，即如果发生写文件失败，这句也会出现。
function callback(err) {
    if (err) {
      console.log('写文件失败');
    } 
  }