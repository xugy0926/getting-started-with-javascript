var fs = require('fs');
var dirPathString = './';
var files = fs.readdir(dirPathString, callbackScanFiles);
//定义一个接收函数，用于接收读取文件夹内容后的结果
function callbackScanFiles(err, files){
    if (err){
        console.log('------这个文件需要放在所查询文件内------');
        console.log('oh,读取文件失败，请检查文件是否放在当前文件内');
        console.log('------调整位置，在来一次--------');
    }
    if (files != undefined){
        callbackWriteFiles(files);
    }else{
        console.log('读取的是空文件');
    }
};
//定义一个写文件函数，用于存储读取文件的返回结果
function callbackWriteFiles(files){
    if (files != undefined){ 
    var outputPathString = './Write_file_async.txt';
    fs.writeFileSync(outputPathString,files);
    console.log('写文件成功')
    console.log('打开查询文件夹查看.txt文档');
    }else{
        console.log('写文件失败');
    }
};
//点用scanFiles函数来读写文件
console.log('正在检索中...');
callbackScanFiles();