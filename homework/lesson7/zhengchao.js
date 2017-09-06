var fs = require('fs')
var jsonfile = require('jsonfile');

var dirPathString = '../../words-from-the-heart/';
var writePath = './write.json';
arrJson = [];

function readOutcome(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    }

    if (files.length > 0) {
        var fileContent = files;

        for (var i = 0; i < fileContent.length; i++) {
            if (fileContent[i].endsWith('.json')) {
                fileContent[i] = dirPathString + fileContent[i];
                console.log(fileContent[i]);
                jsonfile.readFile(fileContent[i], function(err, obj) {
                    if (err) {
                        console.log('err');
                        return;
                    } else {
                        arrJson.push(obj);
                        //console.log(arrJson);
                        jsonfile.writeFile(writePath, arrJson, function(err) {
                            if (err) {
                                console.log('写入失败');
                            }

                        })
                    }
                })
            }
        }
        setTimeout(function() { console.log(arrJson) }, 10000);
    } else {
        console.log('没有找到任何文件');
    }
}
fs.readdir(dirPathString, readOutcome);