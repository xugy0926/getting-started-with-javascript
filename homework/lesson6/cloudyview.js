//引入fs模块

const fs = require('fs');

//定义reddir需要的path

var dirPathString = '../../../words-from-the-heart';

// var dirPathString = './';//调试用的路径

// var dirPathString = '../../homework/lesson1';//调试用的路径2

//定义写入的文件路径和文件名

var filePathString = './cloudyview_file_writing.txt';

//定义函数将信息写入这个函数的files变量里面

function callback(err , files) {
    if (err) {
        console.log('读取文件失败');  
    }
//希望格式上能够好一些，加入分行的符号，结果发现用appendFile会更好些。对格式有强迫症，没办法。。。
//我本来希望能够起2个函数，其中一个函数能够单纯是写文件的。但是没找到将数据通过回调函数输出给写函数的办法。

    if (files.length > 0) {
        console.log('有文件啊！！！')
        for (i = 0 ; i < files.length ; i++ ) {
//            fs.writeFile(filePathString , files[i] , writeCallback); //这样会不断重写文件。
            var fileDate = i + '.\n' + files[i] + ',' + '\r\n' ;
            fs.appendFile(filePathString , fileDate , writeCallback);
        }
        
    }else{
        console.log('没有文件存在！');
    }
}

function writeCallback(err) {
    if (err) {
        console.log('writing files faild!');
    } else {
        console.log('succeed! you just done!');
    }
}


//定义回调函数

function fileListCallback(files) {
    console.log('writing file');
    console.log(files);
}

//执行查询的函数

fs.readdir(dirPathString , callback);

//调用fs的写函数来写入文件

