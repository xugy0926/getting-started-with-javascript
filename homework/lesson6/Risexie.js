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
//在使用不同的方法获取数据的时候要注意，获取数据的格式是什么
// 例如 fs.writeFile这个方法输出的内容是是一数组。
//所以在下面用了.join这个方法，（.jion）这个方法可以将数组中的所有元素放进一个字符串
//所以输出的file数组，就被.jion方法放进了fileContent。
//.jion这个方法还可以在后面给他指定元素的分隔符，这里用了“\n”。通过空行分割。
//也可以用var = fileContent = files.jion(".")。用.来进行分割
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
//在调用任何函数之前，我们一定要了解清楚函数所需要输入的的参数类型是什么
//例如在下面的函数fs.readdir(path,function(err,files))
//第一个地方是读取文件的路径，第二个是一个回调函数，里面包含错误的信心和files
//也就是读取出来的数组！，一定要注意是数组，这一点非常重要。
//因为我们用写入函数的时候，fs.writeFile这个函数要读取的参数是字符串
//所以我们需要使用别的方法把数组转换成字符串，这样才能被fs.write这个函数使用

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


