var fs = require('fs');

var dirPathString = '../../homework/lesson1';

var outputPathString = './write_lesson1_sync.txt';
var files = fs.readdirSync('../../homework/lesson1')

function callback(err, files) {
    if (err) {
         console.log('读取文件失败');
    }
    else if (files.length >0) {
        console.log(files);
    } else {
        console.log('没有找到任何文件');
    }
}

 function callbackwrite(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

     



fs.readdir(dirPathString, callback);
fs.writeFileSync(outputPathString,files,callbackwrite() );
