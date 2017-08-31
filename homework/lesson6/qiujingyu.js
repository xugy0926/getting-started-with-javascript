//同步方案
var fs = require('fs');

var dirPathString = '../../../words-from-the-heart/';

var files = fs.readdirSync(dirPathString);

var outputPathString = './write_file_sync.txt';

fs.writeFileSync(outputPathString, files);

//异步方案
var fs = require('fs');

var dirPathString = '../../../words-from-the-heart/';

var filePathString = './write_file_async.txt';

function callback(err, files) {
  if (err) {
    console.log('读取文件失败');
  }

  if (files.length > 0) {
    console.log(files);
    fs.writeFile(filePathString, files.join("\n"), callback2);
  } else {
    console.log('没有找到任何文件');
  }
}

fs.readdir(dirPathString, callback);

function callback2(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
