var fs = require('fs');

// 最简单的实现，为了确保正确执行，应将此文件放在 words-from-the-heart 项目的 script 文件夹下（编码约定）
var dirPathString = '../words';
var filePathString = './words_file_names.txt';

var fileNames = fs.readdirSync(dirPathString);

if (fileNames.length > 0) {
  // 异步写入返回值 err 可以明确判定写入是否成功，而同步写入只返回了 undefined，意义不明，所以采用异步写入
  fs.writeFile(filePathString, fileNames, function (err) {
    if (err) {
      console.log('文件写入失败');
    } else {
      console.log('文件写入成功');
    }
  });
} else {
  console.log('读取文件失败');
}
