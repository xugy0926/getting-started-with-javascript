/*
* 第6课作业，同步方案
*
* 扫描某个文件夹的所有内容并写入一份txt文件
*/

// 引入fs模块
var fs = require('fs');


// 定义要查询的目标文件夹。如果想查其他文件夹的内容，就修改下面路径字符串。
var dirPathString = '../../../words-from-the-heart';

// 定义要写入的文件路径
var writeFilePath = './write_file_sync.txt';


// 检查所查询的目标文件夹是否存在，返回的true值作为workFlow的参数
function dirPathTest(dirPathString) {
	if(!dirPathString) {
		console.log('参数错误!');
		return false;
	}else if(!fs.existsSync(dirPathString)) {
		console.log('所查询的目录不存在！');
		return false;
	}else {
		return true;
	}
}

//先将查询到的内容赋给filesName变量，再将其中的.json对象输出到目标文件
function collectJsonFilesNameToTxt(dirPathString) {
	var filesName = fs.readdirSync(dirPathString);
	// console.log('filesName的数据类型是 ' + typeof filesName);
	var jsonFileName = [];

	if(filesName.length === 0) {
		console.log('该目录为空！');
	}else {
		for(index = 0; index < filesName.length; index++) {
			if(filesName[index].endsWith('.json')) {
				jsonFileName += filesName[index] + '\n';
			}
		}
		// 最后一次循环导致末尾多一次换行，修掉
		jsonFileName = jsonFileName.trim();
		fs.writeFileSync(writeFilePath,jsonFileName);
	}
	
}

// 按老师课上提到的思路——将整体过程按步骤分到各函数，再用workFlow控制
function workFlow() {
	if(!dirPathTest(dirPathString)){
		return false;
	}else{
		collectJsonFilesNameToTxt(dirPathString);
		console.log('内容写入完毕，请打开write_file_sync.txt查看。');
	}
}

workFlow();

/* 向老师提问
1. 第26行
	}else {
		return true;
	}
    除了return true 以外，还需不需要加别的内容？

2. 第54行
	if(!dirPathTest(dirPathString)){
		return false;
	if 在判断时，是否会执行dirPathTest函数的全部内容？
	我在编写过程中，出现过不加!会执行，增加!后就不执行了。但是按照以上的编写内容，即使我故意制造dirPathTest中的几种错误，也会执行并console.log。
	所以我疑问的核心就是究竟何时会执行一次函数？还是只要有dirPathTest(dirPathString的地方就执行一次？有没有只需要取它的return，而不用再执行一遍的方法？
*/
