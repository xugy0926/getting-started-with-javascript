var fs = require('fs');

var filePathString = '../write_filename_from_project_words-from-the-heart.txt';

var dirPathString = '../words-from-the-heart/';

function callbackRead(err, files) {
  if (err) {
    console.log('写文件失败');
  }
  if (files.length > 0) {
    console.log(files);
    var fileData = [];
    for (var i = 0; i < files.length; i++) {
      fileData[i] = i + 1 + '.'+files[i]+',\n';
    }
    fileContent(fileData);
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

function fileContent(fileContent) {
  fs.writeFile(filePathString, fileContent, callbackWrite);
}

fs.readdir(dirPathString, callbackRead);


// 这是第四版，去掉重复赋值。优化一下显示格式；
