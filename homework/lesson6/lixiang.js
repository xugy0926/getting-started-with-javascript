
var fs = require('fs');  // 引入fs模块
var dirPathString = './';  // 定义当前文件夹
var outputPathString = './lixiang.txt';  // 指定输出路径
var names = [];  // 定义一个数组变量

function callbackWrite(err){ // 定义一个写文件的callback函数
  if(err) {
    console.log('写入文件失败');
  }
  else {
    console.log(names); 
  }
}

function callbackRead(err, files) { //定义读取文件的callback函数
  if (err) {
    console.log('读取文件失败');
    return;
  }
  for (var i=0; i<files.length; i++)
    if (files[i].endsWith('.json')){
      names.push(files[i]);
      fs.writeFile(outputPathString,names,callbackWrite);
    }
  else {
    continue;
  }
}
fs.readdir(dirPathString,callbackRead); // 用fs.readdir调用fs.write

