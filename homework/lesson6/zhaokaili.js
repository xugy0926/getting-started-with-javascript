/*
异步
*/
var fs = require('fs');

var dirPathString = '../../../words-from-the-heart';

var filePathString = './zhaokailiAsync.txt';

fs.readdir(dirPathString, function(err, files) {
    if (err) {
        console.log('读取文件失败');
    }

    if (files.length > 0) {
        fs.writeFile(filePathString, files.join("\n"), function(err){
            if (err) {
                console.log('写文件失败');
            } else {
                console.log('写文件成功');
            }
        }
);
        console.log(files.length);
    } else {
        console.log('没有找到任何文件');
    }
}
);
//问题一：不知道用什么方法能够筛选带.json的文件
//问题二：尝试用join（"\n"）  files + "\n"  files + "\r\n"  都没有达到每个文件名换行的效果

