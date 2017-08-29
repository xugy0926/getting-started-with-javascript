
var fs = require('fs');

var dirPathString = '../../my_work/words-from-the-heart';

var files = fs.readdirSync(dirPathString);

//console.log(files);

var outputPathString = '../my_test/jsonFileName.txt';

var fileContent = files;

fs.writeFileSync(outputPathString,fileContent);


//问题一：函数回调的方法没有憋出来。
//问题二：把所有文件的名字都写进入了，怎么把非json文件名去除掉啊？
