

//同步方案
//引入fs模块
var fs = require('fs');
//定义要查询的目标文件夹。
var dirPathString = '../JavaScript learning/words-from-the-heart';
var files = fs.readdirSync(dirPathString);
console.log(files);

//将内容写入到文件中
//定义要写入的文件路径
var OutputPathString = './heart_words_files.txt';
//定义文件内容变量fileContent
var fileContent = fs.readdirSync(dirPathString);

//1.同步方案：
//调用fs的writeFileSync函数来写文件
//fs.writeFileSync(outputPathString, fileContent);

//2.异步方案：
// 定义一个callback函数，用于接收写文件的返回结果
function callback(err) {
    if (err) {
        console.log('写文件失败');
    } else {
        console.log('写文件成功');
    }
}
// 调用fs的writeFile函数来写文件
fs.writeFile(OutputPathString,fileContent,callback);