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
        for (var index = 0; index < files.length; index++) {
            if (files[index].indexOf(".json") != files[index].length-5 ) {
                files.splice(index,1);
            };
        }
        fs.writeFile(filePathString, files.join(" \r\n "), function(err){
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

