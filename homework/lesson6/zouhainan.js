var fs = require('fs');

var dirPathString = '../files/my_project/words_from_the_heart/words-from-the-heart';

var outputPathString = './fileNames_async.txt';

fs.readdir(dirPathString, function (err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    }
    if (files.length > 0) {
        console.log('到这里都没有问题');
        console.log(files);
        fs.writeFile(outputPathString, files, function (err) {
            if (err) {
                console.log('写文件失败');
            } else {
                console.log('写文件成功');
            }
        });
    }
    else {
        console.log('没有找到任何文件');
    }
});
