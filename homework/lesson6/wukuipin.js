var fs = require('fs');

var filePathString = '../write_filename_from_project_words-from-the-heart.txt';

var dirPathString = '../words-from-the-heart/';

function callbackRead(err, files) {
  if (err) {
    console.log('写文件失败');
  }
  if (files.length > 0) {
    console.log(files);
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
fs.writeFile(filePathString, callbackRead, callbackWrite);

// 第一次提交的代码，在思考怎么写时脑中一直想着变量，所以写了看起来奇怪的代码。
