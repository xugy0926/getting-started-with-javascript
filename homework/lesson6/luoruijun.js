var fs = require('fs');
var dirPathString = '../../homework/lesson1';
var filePathString = './write_file_async.txt';
function callback(err, files) {
  if (err) {
    console.log('读取文件失败');
  }

  if (files.length > 0) {
    console.log(files);
        fs.writeFile(filePathString, files, callback1);
  } else {
    console.log('没有找到任何文件');
  }
}

function callback1(err) {
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
  }

function scanAndWriteFiles_async(callback){
    fs.readdir(dirPathString, callback);
}

scanAndWriteFiles_async(callback);
