/*异步读取、写入文件，参考曹振同学的作业*/
// 引入FileSystem
var fs = require('fs');
// 定义要读取的路径
var readDirPath = '/Users/Administrator/learningjs/words-from-the-heart/';
// 方案2:异步读取 异步写入
var writeFilePath = '/Users/Administrator/learningjs/fileNameOfwordsheart2_cuiyuwei.txt';
// 定义读取时的回调函数
function readCallback(err, files) {
    if (err) {
        console.log('读取路径失败');
    } 
	else {
        if (files.length > 0) {
			for (var i = 0; i < files.length; i++) {
                if (!fs.statSync(readDirPath + files[i]).isFile()) {
                        console.log('[Warning] ' + files[i]+ ' 不是文件');
                } 
                else if(files[i].match('\.json$') == null ) {
                        console.log('[Warning] ' + files[i]+ ' 不是json')
                }
                else{
					    fs.writeFile(writeFilePath,files[i]+'\n',{flag:'a'},writeCallback);
				}
            }
			
        }
		else {
            console.log('没有找到任何文件');
        }
    }
}
// 定义写入时的回调函数
function writeCallback(err) {
    if (err) {
        console.log('write error');
    } else {
        console.log('write success');
    }
}
fs.readdir(readDirPath, readCallback);

