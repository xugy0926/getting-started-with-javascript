/*
* 尝试用同步读取文件名，用异步的方式写入文件名
* 此js文件放在words-from-the-heart文件夹下
*/

var fs = require('fs');

var dirPathString = './';
var filePathString = './words-from-the-heart.txt';

var fileContent = fs.readdirSync(dirPathString);

fs.writeFile(filePathString, fileContent,function(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
);
