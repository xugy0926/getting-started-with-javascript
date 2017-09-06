fs = require('fs');

var readfile = ('./words-from-the-heart');
var writefile = ('./words-from-the-heart.txt');

function callback(err, files) {
    if (err) {
      console.log('读取文件失败');
      return;
    }
  
    if (files.length > 0) {
      console.log(files);
      fs.writeFileSync(writefile, files);
    } else {
      console.log('没有找到任何文件');
    }
  }
  
  //调用fs的readdir函数读取所有文件
  fs.readdir(readfile, callback);