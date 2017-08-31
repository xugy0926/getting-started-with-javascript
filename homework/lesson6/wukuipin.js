var fs = require('fs');

var filePathString = '../write_filename_from_project_words-from-the-heart.txt';

var dirPathString = '../words-from-the-heart/';

function callbackRead(err, files) {
  if (err) {
    fileContent(err);
  }
  if (files.length > 0) {
    console.log(files);
<<<<<<< HEAD
<<<<<<< HEAD
    fs.writeFile(filePathString, files, callbackWrite);
=======
    fileContent(files);
>>>>>>> upstream/master
=======
    var fileData = [];
    for (var i = 0; i < files.length; i++) {
      fileData[i] = i + 1 + '.'+files[i]+',\n';
    }
    fileContent(fileData);
>>>>>>> upstream/master
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
function fileContent(files) {
  fileContent = files;
=======
function fileContent(fileContent) {
>>>>>>> upstream/master
  fs.writeFile(filePathString, fileContent, callbackWrite);
}

fs.readdir(dirPathString, callbackRead);


<<<<<<< HEAD
<<<<<<< HEAD
// 这是第三版，期待点评！
>>>>>>> upstream/master
=======
// 这是第四版，去掉重复赋值。优化一下显示格式；
>>>>>>> upstream/master
=======
// 这是第五版，使用不同的参数多次回调函数。哈哈哈，这是老师留的 bug，处理错误忘记return或回调，大部分的新手对这个问题视若无睹，我就是其中一位。现在对这个问题有一点点概念，我离高手又近了一步！
>>>>>>> upstream/master
