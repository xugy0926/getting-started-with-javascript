//同步方案
var fs = require('fs')

var dirPathStiring = '../my_project/words-from-the-heart';

var files = fs.readdirSync(dirPathStiring);
console.log(files)

var outputPathString = './zhanggaoyang.txt';

var fileContent = files

fs.writeFileSync(outputPathString, fileContent);

//异步方案
var fs = require('fs');

var dirPathString = '../words-from-the-heart/'

function callback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }

  if (files.length > 0) {
    var fileContent = files
    fs.writeFile(filePathString, fileContent, callback2);
  } else {
    console.log('没有找到任何文件');
  }
}

fs.readdir(dirPathString, callback);

var filePathString = './write_file_async.txt';


function callback2(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
//在观察同学们的作业时
//发现在一个简单的“扫描文件，写入文件”的代码上，根据编程水平的不同，每个人看到的问题，遇到的坑也不同。
//小白们往往是照搬模仿成功就已经‘谢天谢地’了。
//高手则能够看到各种细节。还能找出不同的方法应对。
//作为小白，应该学习那些‘高手’们在各种细节上下功夫的态度。
