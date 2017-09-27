//引入fs模板
var fs = require('fs');
//确认读取文件的相对路径
var dirPathString = '../../my_project/words-from-the-heart';
//确认文件写入的路径
var filePathString = './xiongliyu.txt';
//什么一个变量、一个空盒子来装文件名
var fileList = [];
//建立一个callback用于接受读取的信息结果.调用readdir函数
fs.readdir(dirPathString,function read_callback(err,files){ 
//错误第一原则，判断异步是否有错
	if(err) {
		console.log('文件读取路径错误:' + err);
		return;
	}

	if(files === 0) {
		console.log('没有文件 err！！');
		return;
	}

	console.log('找到指定文件，开始筛选所需文件：')
//筛选非“.json”文件，并把文件复制到 fileList 中
	for(var i = 0; i < files.length; i++) {
		if(files[i].indexOf('.json') != -1) {			
			fileList.push(files[i] );
			console.log(files);
		}
	}
	
});
//调用writeFile函数，建立callback
fs.writeFile(filePathString, fileList,function write_callback(err) {
	if(err) {
		console.log('文件写入失败:' + err);
		return;
	}else {
		console.log('文件写入成功');
	}
});


