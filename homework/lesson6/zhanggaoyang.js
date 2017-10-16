
var fs = require('fs')

var dirPathStiring = '../my_project/words-from-the-heart';

var files = fs.readdirSync(dirPathStiring);
console.log(files)

var fs = require('fs')

var outputPathString = './zhanggaoyang.txt';

var fileContent = files

fs.writeFileSync(outputPathString, fileContent);
