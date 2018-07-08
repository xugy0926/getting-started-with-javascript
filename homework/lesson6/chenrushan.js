
const fs = require('fs');

const dirPathString = '../../../words-from-the-heart/words';
const filePathString = '../../../test-code/write_file_async.txt';

fs.readdir(dirPathString, function (err, files) {

    if (err) {
        console.error('读取文件失败');
        return;
    }

    if (files.length > 0) {
        fs.writeFile(filePathString, files, function (err) {
            if (err){
                console.error('写文件失败');
            } else {
                console.log('写文件成功');
            }
        });
    } else {
        console.log('没有找到任何文件');
    }
});
