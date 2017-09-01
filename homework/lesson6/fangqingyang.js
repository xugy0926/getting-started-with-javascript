var fs = require('fs');//导入这个模块
var outputPathString = './name.txt';//要写入名字的文件，如果没有则自动创建一个
var inputPathString = '../../homework/lesson1';//这里是要导入的文件名的位置

var files = fs.readdirSync(inputPathString);

//让写入的名字分行
if(files.length > 0){
    for(var i = 0;i < files.length; i++){
        files[i] = files[i] + '\n';
    }
}

//回调函数，作用是告诉调用者，写文件的结果
function callback(err) {
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
  }

fs.writeFile(outputPathString,files,callback);


