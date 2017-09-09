/*看了好多同学的作业，我收获很大，这次作业交地时间晚，
一方面是学习节奏没跟上，另一方面看到那么多好作品，所以自己不愿意将就写。
无奈水平有限，只能临摹一个自己还能接受的版本吧。*/
//同步读写
var fs = require('fs');//引入nodejs API文件使用

var writeDirPath = './wufan.txt';//声明定义写入的目录路径，当前的文件位置

var readDirPath = '../myproject/words-from-the-heart/';//声明定义读取的目录路径，一定是相对路径
 
var files = fs.readdirSync(readDirPath);

var fileData = [];
for (var i = 0; i < files.length; i++) {
    if (!fs.statSync(readDirPath + files[i]).isFile()) {
        console.log('[Warning] ' + files[i] + ' 不是文件跳过');
    } else if (files[i].match('\.json$') == null) {
        console.log('[Warning] ' + files[i] + ' 不是json跳过')
    } else {
        fileData[i] =files[i] + '\n';
    }
}


fs.writeFileSync(writeDirPath, fileData);


//-----------------------------------------

//异步读写

var fs = require('fs');//引入nodejs API文件使用

var writeDirPath = './wufan.txt';//声明定义写入的目录路径，当前的文件位置

var readDirPath = '../myproject/words-from-the-heart/';//声明定义读取的目录路径，一定是相对路径

function readCallback(err, files) {//读取的回调函数，按照API文档的语法规则去写
  if (err) {
    console.log('写文件失败');
  }
  if (files.length > 0) {//第一次出来都是大堆拥挤在一起，分d行写入好看多了,曹振写的很好。
    console.log(files);
    var fileData = [];
    for (var i = 0; i < files.length; i++) {
      fileData[i] = files[i]+',\n';
    }
   fs.writeFile(writePath, fileData, write);
  } else {
    console.log('没有找到任何文件');
  }
}

function writeCallback(err) {//写入的回调函数
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

fs.readdir(readDirPath, readCallback);

//---------------------------------------------
/*以下的代码输出的txt里面是undefined，到底哪里出了问题？
就在该使用回调函数的时候，用了直接函数，因为调用的异步读取书写函数，
所以应该使用回调函数的*/
//---------------------------------------------
var fs = require('fs');//引用API文件

var readPath = '../myproject/words-from-the-heart';//声明读取文件的相对路径

var writePath = './write_files.txt';//声明写入文件的相对路径

function read(err, files) {//定义读取文件的函数read
  if (err) {
    console.log('什么时候才能输出这个句子呢？程序出错时看到了。。。');
  }

  if (files.length > 0) {
    console.log(files);
    fs.writeFile(writePath, files, write);//错误版本没有的内容,这是回调read函数时会执行的.
  } else {
    console.log('这里没有你要的文件');
  }
}

function write(err) {//定义写入文件的函数write
  if (err) {
    console.log('写入失败！');
  } else {
    console.log('写入成功！');
  }
}

fs.readdir(readPath, read);//执行文件
/*错误版本中，这样写就成了直接调用函数，而不是回调了。
var files = fs.readdir(readPath, read);
console.log(files);
fs.writeFile(writePath, files, write);*/
//----------------------------------------------

/*我的疑惑是，如何把txt文件列表中的","消除，在添加序号的时候 
/fileData[i] =i + 1 +files[i]+',\n';/这句出来的结果也不是按照123的顺序出来，因为开头中间又不是json文件的。
编程需要很多思考，思考的时间占据了80%的编程时间。*/