var fs = require('fs');

var filePathString = '../write_filename_from_project_words-from-the-heart.txt';

var dirPathString = '../words-from-the-heart/';

function callbackRead(err, files) {
  if (err) {
    console.log('写文件失败');
  }
  if (files.length > 0) {
    console.log(files);
    fs.writeFile(filePathString, files, callbackWrite);
  } else {
    console.log('没有找到任何文件');
  }
}

function callbackWrite(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

fs.readdir(dirPathString, callbackRead);

/*
* 觉得以上这种写法，后期不好维护代码
*/

/* 下面这种写法容错可能就差一点
*
* var fs = require('fs');
*
* var filePathString = '../write_filename_from_project_words-from-the-heart.txt';
*
* var fileContent = fs.readdirSync('../words-from-the-heart/')
*
* function callback(err) {
*  if (err) {
*    console.log('写文件失败');
*  }else {
*    console.log('写文件成功');
*  }
* }
*
* fs.writeFile(filePathString, fileContent, callback);
*/
