/*
* 【第六节课作业】帮我整理数据

* 在words-from-the-heart项目中收到了很多同学的心声。我想把这些json的文件名整理到一个txt文件中。但苦于文件里太多。请帮我写个整理文件名的脚本代码。

* 请参考study/lesson6的的代码，共4个文件。

* 关于相对路径的理解请参考：https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84.md  

* 【作业内容】 

* 以自己的名字命名一个js文件。 2.先扫描文件夹，再把读到的文件名写入到某个txt文件。
* 【特别注意】 只提交一个你命名的js文件即可，我只要代码。不要给我txt结果文件。  

* 【提交方式】 
* 请向getting-started-with-javascript项目发起pull request。  https://github.com/xugy0926/getting-started-with-javascript  
* 提交homework/lesson6目录下。
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = '../../../words-from-the-heart';

// 定义要写入的文件路径
var filePathString = './words-from-the-heart.txt';

// 定义一个read_callback函数，用于接收读取文件夹内容并写入txt文件后的结果
function read_callback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
  if (files.length > 0) {
    var fileContent = files;
    fs.writeFile(filePathString, fileContent, wirte_callback2);
  } else {
      console.log('没有找到任何文件');
  }
}

// 定义一个wirte_callback2函数，用于接收写文件的返回结果
function wirte_callback2(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

fs.readdir(dirPathString,read_callback);