/*
* 异步方案
*/

var fs = require('fs');

var dirPathString = '../../../words-from-the-heart';

var filePathString = './write_file_name.txt';



function callback(err, files) {
  if (err) {
    console.log('读取文件失败');
      
  }
  
  if (files.length > 0) {
    fs.writeFile(filePathString, files, write_callback);  
  } else {
    console.log('没有找到任何文件');  
  }
}




function write_callback(err) {
  if (err) {
    console.log('写文件失败');  
  } else {
    console.log('写文件成功');  
  }  
}

//调用fs的readdir函数读取所有文件
fs.readdir(dirPathString, callback);

