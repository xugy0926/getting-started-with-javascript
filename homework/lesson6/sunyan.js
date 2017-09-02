// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹
var dirPathString = './words-from-the-heart-master';

/*
* 同步方案
*/

// 定义要写入的文件路径
var outputPathString = './write_file_sync.txt';

var files = fs.readdirSync(dirPathString);
fs.writeFileSync(outputPathString, files);


/*
* 异步方案
*/

// 定义要写入的文件路径
var filePathString = './write_file_async.txt';

//调用fs的readdir函数读取所有文件
fs.readdir(dirPathString, function (err, files) {
    if (err) {
      console.log('读取文件失败');
    }
  
    if (files.length > 0) {
      console.log('读取文件成功');
      var fileContent = files;

      //调用fs的writeFile函数来写文件
      fs.writeFile(filePathString, fileContent, function callback_write(err) {
        if (err) {
          console.log('写文件失败');
        } else {
          console.log('写文件成功');
        }
      });

    } else {
      console.log('没有找到任何文件');
    }
  });


