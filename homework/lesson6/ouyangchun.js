
//同步方法：引入fs模块
var fs = require('fs');
//定义要查询的目标文件夹。
var dirPathString = '../words-from-the-heart';
var filePathString = '../js.txt';
var files = fs.readdirSync(dirPathString);
 fs.writeFileSync(filePathString,files);

 //异步
 var fs = require('fs');//引入FS模块
 var dirfile = '../words-from-the-heart';//要查询文件路劲
 var xierufile = '../js.txt';//要写入的文件路劲
 function callback(err,files){
   if (err){
     console.log('读取文件失败');
     return false;//退出当前循环
   }
   if(files.length>0){
     console.log(files);
    } else{
     console.log('没有找到文件');
    
   }
 };//定义回调函数
 fs.readdir(dirfile,callback)//调用FS模块
 var files = fs.readdirSync(dirfile)
 function writecallback(err){
   if(err){
     console.log('写入文件失败');
   }else{
     console.log('写入文件成功');
   }
 };
 fs.writeFile(xierufile,files,writecallback);
