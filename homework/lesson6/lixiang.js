
 
var fs = require('fs'); //引入fs模块
var dirPathString = './'; // 定义要查询的目标文件夹为当前文件
var outputPathString = './lixiang.txt'; // 定义写入文件夹的路径和文件名
var names = []; // 这一步研究了两个小时，到底如何把读取出来的数组文件，转换为字符串写入新文件

// ---------------- 分割线以上 引入模块 及 定义变量，分割线以下定义函数
// 定义一个回调函数，筛选只有json后缀名的文件，这一步也花了差不多2小时
// 这里的callback (err,files)完全就是照搬模板，目前无法做到知其所以然，只知道这是一个回调函数，有两个参数
function callback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
  for (var i=0; i<files.length; i++) // 课上学到关于循环的知识能懂，但从看懂到会用，简直就像牛郎和侄女之间的距离
    if (files[i].endsWith('.json')){
      names.push(files[i]);
    }
  else {
    continue;
  }
}
fs.readdir(dirPathString,callback);
fs.writeFile(outputPathString,names,callback2);


// 这里为什么需要出现这样一个回调参数，真心只是套模板，知道how就已经很辛苦，知道why估计要勤加练习！
function callback2(err){
  if(err) {
    console.log('写入文件失败');
  }
  else {
    console.log('写入文件成功');
  }
}
