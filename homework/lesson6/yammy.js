// 引入文件系统模组
var file_sys = require('fs');

// 定义扫描的目标文件夹所在路径
var scan_dir_path_string = "../words-from-the-heart";

// 定义指定的写入文件所在路径
var write_file_path_string = "../achivement.md";

// 定义一个 callback 函数，接受扫描的结果并直接写入文件
function callback1(err, files){
	if (err) {
		console.log("scanning failed\n" + err);  // 如果扫描出现错误，显示扫描错误并打印错误
	} else {
		console.log("scanning successfully"); // 如果扫描成功，打印成功提醒

		if (files.length === 0) {
			console.log("oops! no file exist");  // 如果扫描结果中无内容，打印无内容
		} else {
			console.log(files);  // 扫描结果有内容，打印内容
			var file_content_string = files.join("\n");  // 内容整理成字符串，方便一会儿写入文件
			file_sys.writeFile(write_file_path_string, file_content_string, callback2);  // 写入指定文件
		}
	}
}

// 定义一个 callback 函数，回调查看写入结果
function callback2(err) {
	if (err) {
		console.log("write failed\n" + err);  // 如果写入出现错误，打印错误
	} else {
		console.log("write successfully");  // 如果写入成功，打印写入成功提醒
	}
}

// 调用 fs 的 readdir函数来扫描指定文件夹，并完成写入工作
file_sys.readdir(scan_dir_path_string, callback1);
