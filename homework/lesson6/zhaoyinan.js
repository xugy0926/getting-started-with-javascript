//引入file system函数
var fs = require('fs');
//定义读取、输出地址
var dirPathString = '../../../words-from-the-heart';
var outputPathString = './titleInfo.txt';
//定义读取、反馈结果函数
function readCallback(err, files) {
	if (err) {
		console.log('读取文件失败');
		return;
	}
	if (files.length > 0) {
		console.log('已读取文件内容');
		//调用写入函数，将files读取的用容传递给它
		fs.writeFile(outputPathString, files, writeCallback);
	} else {
		console.log('没有找到任何文件');
	}
}


//定义写入、反馈结果函数
function writeCallback(err) {
	if (err) {
		console.log('写文件失败');
	} else {
		console.log('写文件成功');
	}
}

// 调用fs的readdir函数来读取文件夹
fs.readdir(dirPathString, readCallback);
