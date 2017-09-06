var fs = require('fs')

var dirPathString = '../lesson1'
var txtPathString = './haohu.txt'

function readCallback(err, files) {
    if (err) {
        console.log('读取文件失败')
        return
    }
    if (files.length > 0) {
        writeToTxtFile(files)
    } else {
        console.log('没有找到文件')
    }
}

function writeCallback(err) {
    if (err) {
        console.log('写入文件失败')
    } else {
        console.log('写入文件成功')
    }
}

function writeToTxtFile(filesArray) {
    fs.writeFile( txtPathString, filesArray.join("\n"), writeCallback )
}

fs.readdir( dirPathString, readCallback )
