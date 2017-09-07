
var fs=require('fs');
var dirPathString='./';
var files=fs.readdirSync(dirPathString);
var outputPathString = './write_file_sync.txt';
var fileContent =files;
fs.writeFileSync(outputPathString, fileContent);