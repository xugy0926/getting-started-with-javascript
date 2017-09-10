//引入fs模块
var fs = require('fs');
//要查询的文件夹
var dirPathString = 'words-from-the-heart';
//要写入的文件
var outputPathString = 'jianglin.txt';
var fileContent = new Array();
//查询回调函数。看了别的同学作业结合老师说的原则和推理，才改明白。原来在fs.readdir里的第二个函数参数里，必须要把查询到的内容调出去。也就是说，如果不直接输出的话，得在callback里用一个函数或者别的对象把得到的内容传出去，否则callback没意义。
function dirCallback(err,files){
    if(err){
        console.log('There is an error in reading.');
        return;
    }else{
        if(files.length > 0){
            console.log('Reading is OK.');
           //想添加换行符号，但是没有成功，只是加了空格
            /*for(var i=0;i<files.length;i++){
                files[i]=files[i]+' \n ';
            }*/
            //方法一：终于成功把数组传到全局变量的数组了，果然需要遍历元素的传，不能直接干巴巴的传。
            for(var i=0;i<files.length;i++){
                fileContent[i] = files[i];
            }   
            //方法二：直接在回调函数里写入文件
            //fs.writeFile(outputPathString,files,outputCallback);
        }else{
            console.log('There is nothing.')
        }
    }
}
//写入回调函数
function outputCallback(err){
    if(err){
        console.log('There is an error in writing.')
    }else{
        console.log('Writing is OK.')
    }
}
//读取文件
fs.readdir(dirPathString,dirCallback);
//把得到的数组写入文件
fs.writeFile(outputPathString,fileContent,outputCallback);