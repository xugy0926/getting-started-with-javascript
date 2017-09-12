//第6课   小白cuimiao的作业

//引入fs模块
var fs =require('fs');

//定义查询文件的目标文件夹
var dirPathString = '../../../words-from-the-heart';
   
//定义一个callback函数，用于接受读取文件的返回结果
function callback(err,files){
    if (err){
        console.log('文件读取失败');
        return;
    }
    if(files.length>0){
        console.log(files);
    }else {
        console.log('没找到任何文件');
    }
}

//用fs的readdir函数读取全部文件
fs.readdir(dirPathString,callback);


//将读取到的文件名称写到txt文件中
var filePathString = './cmwrite_async.txt';

//定义文件夹内容变量
var fileCount = fs.readdirSync(dirPathString);

//定义一个callback函数用于接受写文件的返回结果
function writecallback(err) {
    if (err) {
        console.log('文件写入失败');
    } else {
        console.log('文件写入成功');
    }
}

//调用fs的writeFile函数来写入文件
fs.writeFile(filePathString,fileCount,writecallback);

//总结
//1.函数如果是自己定义的，要什么参数，自己要弄明白；如果是第三方库提供函数，则要看明白函数的定义，每个参数是做什么的，调用时怎么用参数
//2.参数的名称有时会一样，主要是为了少起名字
//3.有时要加入容错机制，比如作业以及老师课后的代码文档里，当出现err的时候，返回的文字内容，都是容错机制。
//4.老师鼓励我们改代码，都试一试，反正没损失。我这次做作业就尝试了一下，感觉还不错。
//5.内置库我们目前学了  console  setTimeout  typeof
//6.file system  是nodejs环境的内置库
//7.搜索nodejs.api  第一个英文的文档是要阅读的，左侧的就是内置库，比如fs是我们重点学习的并做了作业
//8.犀牛书的前七章是基础，第八九章最重要，要认真反复阅读。
