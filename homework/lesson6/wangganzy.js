var fs = require('fs');
var readDir = fs.readdirSync('./');
var filePathString = './write_file_async.txt ';

function weixin(err){
if(err){
    console.log('写文件失败');
  } 
  else {
    console.log('写文件成功');
  }
}
fs.writeFile(filePathString,readDir,weixin);
