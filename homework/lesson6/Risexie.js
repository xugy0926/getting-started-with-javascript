// 引入fs模块
var fs = require('fs');
//定义读取文件的路径
var dirPathString = '../../../../words-from-the-heart'


//异步方案

//定义一个callback函数，
function callback1(err,files){
    if(err){
     console.log('读取文件失败');
    }
 
    if(files.length > 0) {
        console.log(files);
 //把files里面的文件赋值给fileContent       
       var fileContent = files.join("\n")
//不知道应该如何把files给到fs.writeFile函数，所以在这里卡了很久
//除了把函数嵌套进来之外还有别的方法吗？

        fs.writeFile(FilePathString,fileContent,callback2)
    } else {
     
     console.log('没有找到文件');
    }
    
}

//调用fs的readdir函数，并输出文档。
fs.readdir(dirPathString,callback1)



//定义要写入的文件路径
var FilePathString = './write_file_asyne.txt';

function callback2(err){
  if (err) {
      console.log('写文件失败');
  } else {
      console.log('写文件成功');
  }
}


