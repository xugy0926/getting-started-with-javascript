//A 同步方案

//引入第三方的file system文件系统函数模块
var fs = require('fs');

//指定需要读取的目标文件夹路径
var readPathString = "./words-from-the-heart";

//指定读取后所写入的文件的存放路径，名称和格式
var writePathString = "./heartWordsList.txt";

//读取内容并赋值给filesContent这个变量
var filesContent = fs.readdirSync(readPathString);

//将filesContent变量的内容写入指定目录下的文本文件中
fs.writeFileSync(writePathString,filesContent);



//B 异步方案

//引入第三方的file system文件系统函数模块
var fs = require('fs');

//指定需要读取的目标文件夹路径
var readPathString = "./words-from-the-heart";

//指定读取后所写入的文件的存放路径，名称和格式
var writePathString = "./heartWordsList2.txt";

// 自定义一个文件读取函数rend.
function read(err,files){
    if (err) {
        console.log('读取文件失败');
    }

    if(files.length > 0){
        console.log(files);
        fs.writeFile(writePathString,filesContent,write);

    } else {
      console.log('没有找到任何文件');
    }
}

//将读取的内容赋值给变量filesContent
var filesContent = fs.readdir(readPathString, read);

//自定义一个write函数，用于返回写入内容这个动作的结果
function write(err){
    if(err){
        console.log('写文件失败');
    } else {
        console.log('写文件成功');
    }
}

