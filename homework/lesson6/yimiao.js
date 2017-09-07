// 同步方案
var fs = require('fs');

var files = fs.readdirSync('./');

var outputPathString = './yimiao.txt';

fs.writeFileSync(outputPathString,files);

// 异步方案
var fs = require('fs');

var dirPathString = '../../homework/lesson6';

// ------

function callback(err, files) {
  if (err) {
    console.log('fail to read the document');
    return;
  }

  if (files.length > 0) {
    console.log(files);
  } else {
    console.log('can not find any');
  }
}
// writh 部分
fs.readdir(dirPathString, callback);

var filePathString = '.ym_async.txt';
var fileContent = callback();

function callback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

  fs.writeFile(filePathString, fileContent, callback);
