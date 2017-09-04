// 引入FileSystem
var fs = require('fs');

// 定义要读取的路径
var readDirPath = '../../../words-from-the-heart/';

// 下面分别使用同步和异步两种方式读取并写入homework/lesson6文件夹

// 方案1:同步读取 同步写入
console.log('方案1-开始');
var writeFilePath1 = './fileNameOfSchema1_caozhen.txt';
if (!fs.existsSync(readDirPath)) {
    console.log('读取路径不存在！请检查读取路径是否正确')
} else {
    var files1 = fs.readdirSync(readDirPath);
    if (files1.length == 0) {
        console.log('读取路径中没有找到任何文件！请检查读取路径是否正确');
    } else {
        for (var index = 0; index < files1.length; index++) {
            if (!fs.statSync(readDirPath + files1[index]).isFile()) {
                console.log('[Warning] ' + files1[index]+ ' 不是文件,跳过');
            } 
            else if (files1[index].match('\.json$') == null ) {
                console.log('[Warning] ' + files1[index]+ ' 不是json,跳过')
            }
            else {
                fs.writeFileSync(writeFilePath1, files1[index]+'\n', {flag: 'a'});
            }
        }
        console.log('方案1-写入完成!');
    }
}

// 方案2:异步读取，异步写入
console.log('方案2-开始');
var writeFilePath2 = './fileNameOfSchema2_caozhen.txt';

function readCallback(err, files2) {
    if (err) {
        console.log('读取路径失败，请检查读取路径是否正确');
        return;
    } else {
        if (files2.length == 0) {
            console.log('读取路径中没有找到任何文件，请检查读取路径是否正确');
        }
        else {
            for (var index = 0; index < files2.length; index++) {
                if (!fs.statSync(readDirPath + files2[index]).isFile()) {
                    console.log('[Warning] ' + files2[index]+ ' 不是文件,跳过');
                } 
                else if (files2[index].match('\.json$') == null ) {
                    console.log('[Warning] ' + files2[index]+ ' 不是json,跳过')
                }
                else {
                    fs.writeFile(writeFilePath2, files2[index]+'\n', {flag: 'a'}, writeCallback);
                }
            }
            console.log('方案2-写入完成');
        }
    }
}
function writeCallback(err) {
    if (err) {
        console.log('写文件时出错啦');
    }
}

fs.readdir(readDirPath, readCallback);
