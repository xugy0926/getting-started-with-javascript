//同步
var fs =require('fs');
var dirPathString='../../words';
var files=fs.readdirSync(dirPathString);
var outputPathString = './limu.txt';
fs.writeFileSync(outputPathString,files);
//异步
var fs = require('fs');
var readPathString = '../../words';
var writePathString = './limu.txt';
function read_callback(err,files){
    if(err){console.log('读取文件失败');
    return;
}
if(files.length>0){
    var filescontent=files;
    fs.writeFile(writePathString, fileContent, write_callback);}
    else{
        console.log('没有找到文件');}

}

function write_callback(err){
if(err){
console.log('写文件失败');}
else{console.log('写文件成功');
}
}
fs.readdir(readPathString,writePathString)