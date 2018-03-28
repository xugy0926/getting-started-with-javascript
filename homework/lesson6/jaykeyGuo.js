var fs = require('fs');

var dirPathString = '../../../words-from-the-heart/words';

var filePathString = "../write_words_async.txt"

function callbackForWrite(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}


function callbackForRead(err, files){
  if (err){
    console.log("读取文件失败");
    return;
  }

  if (files.length > 0) {
    fs.writeFile(filePathString, files, callbackForWrite);
  } else {
    console.log("没有找到任何文件");
  }
}

fs.readdir(dirPathString, callbackForRead);
