var fs = require('fs');

var filePathString = '../write_filename_from_project_words-from-the-heart.txt';

var dirPathString = '../words-from-the-heart/';

function callbackRead(err, files) {
  if (err) {
    fileContent(err);
  }
  if (files.length > 0) {
    console.log(files);
    var fileData = [];
    for (var i = 0; i < files.length; i++) {
      fileData[i] = i + 1 + '.'+files[i]+',\n';
    }
    fileContent(fileData);
  } else {
    fileContent('没有找到任何文件');
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


// 这是第五版，使用不同的参数多次回调函数。哈哈哈，这是老师留的 bug，处理错误忘记return或回调，大部分的新手对这个问题视若无睹，我就是其中一位。现在对这个问题有一点点概念，我离高手又近了一步！