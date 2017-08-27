/*
 * 第6课作业 李朋
 * 
 * 异步方案
 */

// 引入fs模块
var fs = require('fs');

// 定义要读取的文件夹路径
var dirPathString = '../../../words-from-the-heart/';

// 定义要写入的文件路径
var outputFilePathString = './persons.txt'

// 定义回调函数，用来处理扫描文件夹的结果
function readCallback(err, files){

    if(err){
        console.log('读取文件夹失败');
    }

    if(files.length >0){
        // 调用fs的writeFile函数写文件
        fs.writeFile(outputFilePathString,files,writeCallback);
    }else{
        console.log('没有找到任何文件');
    }
}

// 定义回调函数，处理写文件返回结果
function writeCallback(err){
    if(err){
        console.log('写文件失败');
    }else{
        console.log('写文件成功');
    }
}

// 调用fs的readdir函数来读取文件夹
fs.readdir(dirPathString,readCallback);