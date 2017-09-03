
/* 同步方案 */
// 读取

var fs = require('fs');

var dirPathString = './words-from-the-heart';

var files = fs.readdirSync(dirPathString);
console.log(files);


// 写入

var outputPathString = './worksFromTheHeart.txt';

var fileContent = files;

fs.writeFileSync(outputPathString, fileContent);



/* 异步方案 */
//读取
var fs = require('fs');

var dirPathString = './words-from-the-heart';

function callback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }

  if (files.length > 0) {
    console.log(files);
  } else {
    console.log('没有找到任何文件');
  }
}

fs.readdir(dirPathString, callback);


//写入
var filePathString = './wordsFromTheHeart01';

var fileContent = fs.readdirSync(dirPathString);

function callbackforwrite(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

fs.writeFile(filePathString, fileContent, callbackforwrite);