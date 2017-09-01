// ---------------------------------
// 同步方案

function scan_write_files_sync(dirPathString,outputPathString)
{
    // 引入fs模块 
    var fs = require('fs');

    // 读文件名
    var files = fs.readdirSync(dirPathString);

    // 写文件名
    fs.writeFileSync(outputPathString,files);
}

scan_write_files_sync('../../../words-from-the-heart','./write_sync.txt');


// ---------------------------------
// 异步方案

// 引入fs模块 
var fs = require('fs');

var dirPathString = '../../../words-from-the-heart';
var filePathString = './write_async.txt';

var name="panyong";
function write_callback(err) {
   
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
} 

function read_callback(err,files){
    if(err){
        console.log('读取文件失败');
        return err;
    }

    if (files.length > 0) {
        fs.writeFile(filePathString, files, write_callback);
    } else {
        console.log('没有找到任何文件');
    }
}

//调用fs的readdir函数读取所有文件
fs.readdir(dirPathString, read_callback);


console.log(name);