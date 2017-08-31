// 引入fs模块
var fs = require('fs')

//定义要查询的目标文件
var dirPathString = '../../../words-from-the-heart';

//定义要写入的文件路径
var filePathString = './write_file_async.txt';

// 定义一个函数用于接收读取目标的结果和读取到的内容
function readOutcome(err, files) {
	if (err) {
		console.log('读取文件失败');
	}

	if (files.length > 0) {
		var fileContent = files.join('\n');
		fs.writeFile(filePathString, fileContent.toLowerCase(), writeOutcome);
	} else {
		console.log('没有找到任何文件');
	}
}

// 定义一个函数用于接收写入目标的结果
function writeOutcome(err) {
	if (err) {
		console.log('写入文件失败');
	} else {
		console.log('写入文件成功');
	}
}
// 调用fs的readdir函数读取所有文件
fs.readdir(dirPathString, readOutcome);

    	

