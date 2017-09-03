// 引入文件系统模组
var fs = require('fs');

// 定义扫描的目标文件夹所在路径
var scan_dir_path_string = "../words-from-the-heart";

// 定义指定的写入文件所在路径
var write_file_path_string = "../achivement.md";

// 调用 fs 的 readdir函数来扫描指定文件夹，读取文件名
fs.readdir(scan_dir_path_string, function(err, files) {
    // 如果扫描有错误，打印错误，运行结束
    if (err) {
        console.log("scanning failed\n" + err);
        return;
    }

    // 提示扫描成功
    console.log("scanning successfully");

    // 如果扫描文件中无文件，打印无文件，运行结束
    if (files.length === 0) {
        console.log("oops, no files exist!")
        return;
    }

    // 过滤出以 .json 结尾的json文件，并把数据存在 jsonFilesList 数组中
    var jsonFilesList = [];
    for (var i = 0; i < files.length; i++) {
        if (files[i].slice(-5) === '.json') {
            jsonFilesList.push(files[i]);
        }
    }

    // 把收集到的 json 文件名 list，整理出字符串，方便一会儿写入文件
    var file_content_string = jsonFilesList.join('\n');

    fs.writeFile(write_file_path_string, file_content_string, function(err) {
        if (err) {
            console.log("write failed\n" + err);
        } else {
            console.log("write successfully");
        }
    });
});