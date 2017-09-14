var fs = require('fs');

var dirPathString = '../../../words-from-the-heart';

var files = fs.readdirSync(dirPathString);

for(var i=0; i < files.length; i++) {
    var filesContent = filesContent + files[i] + '\n\n';
}

var outputPathString ='../../../write_file.txt';

fs.writeFileSync(outputPathString, filesContent);