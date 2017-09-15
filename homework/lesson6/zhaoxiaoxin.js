var fs = require('fs');
var dirPathString = '../../../words-from-the-heart';

function callback1(err,files){
    if(err){
        console.log('读取文件失败');
          return;
    };
    if(files.length>0){
        console.log(files);   
    }else{
        console.log('没有文件');    
    };
};


var outputPathString = './zhaoxiaoxin.txt';
var files = fs.readdirSync(dirPathString);

function callback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

fs.writeFile(outputPathString,files,callback)





