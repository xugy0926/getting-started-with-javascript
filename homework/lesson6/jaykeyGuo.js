//引入FileSystem
var fs = require('fs');
//定义读取路径
var dirPathString = '../../../words-from-the-heart/words';
//定义写出路径
var filePathString = "../write_words_async.txt"
//定义写出回调函数
function callbackForWrite(err) {
  //检查
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
//定义读取路径
function callbackForRead(err, files){
  //检查读取路径
  if (err){
    console.log("读取文件失败");
    return;
  }

  if (files.length > 0) {
    //调用写入
    fs.writeFile(filePathString, files, callbackForWrite);
  } else {
    console.log("没有找到任何文件");
  }
}

fs.readdir(dirPathString, callbackForRead);
