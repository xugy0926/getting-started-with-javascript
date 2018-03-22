var fs = require('fs');
var filePath = '../words';

// 同步方式将文件名写入文件
var outputPathSync = './file_name_sync.txt';
var fileNames = fs.readdirSync(filePath);
fs.writeFileSync(outputPath, fileNames);

// 异步方式将文件名写入文件
var outputPathAsync = './file_name_async.txt';
function readCallback(err, files) {
  if (err) {
    console.log('获取文件失败');
    return;
  }

  if (files.length > 0) {
    console.log('开始写入');
    fs.writeFile(outputPathAsync, files, writeCallback);
  } else {
    console.log('没有找到任何文件');
  }
}

function writeCallback(err) {
  if (err) {
    console.log('写入文件失败');
  } else {
    console.log('写入文件成功');
  }
}

fs.readdir(filePath, readCallback);
