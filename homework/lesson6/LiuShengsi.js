// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。
var dirPathString = '../../homework/lesson1';

// 定义要写入的文件路径
var outputPathString = './files_name_disposed_by_liushengsi.txt';

// 定义一个read_file_result函数，用于接收读取文件夹内容后的结果
function read_file_result(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    }

    if (files.length > 0) {
        console.log(files);
        //调用fs的writeFile函数将读取的内容写进目标文件
        var fileContent = files
        fs.writeFile(outputPathString, fileContent, write_file_result);
    } else {
        console.log('没有找到任何文件');
    }
}

// 定义一个write_file_result函数，用于接收写文件的返回结果
function write_file_result(err) {
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
  }

//调用fs的readdir函数来读文件夹下的所有文件
fs.readdir(dirPathString, read_file_result);
