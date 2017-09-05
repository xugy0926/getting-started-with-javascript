var fs = require('fs');

var files = fs.readdirSync("../../../words-from-the-heart");
console.log(files);

function callback(err, files) {
    if (err) {
        console.log('文件写入失败');
    } else {
        console.log('成功');
    }
}
var OutPutPathString = './write_file_sync.txt'
fs.writeFile(OutPutPathString, files, callback)