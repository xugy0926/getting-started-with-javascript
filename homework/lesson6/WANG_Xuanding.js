var fs = require('fs');

var dirPathString = 'C:/Users/MSI/my_project/getting-started-with-javascript/words-from-the-heart';

var outputPathString = './quming.txt';

var outPutFileContent = fs.readdirSync(dirPathString);

fs.writeFileSync(outputPathString, outPutFileContent);

var fs = require('fs');
var readPathString = 'C:/Users/MSI/my_project/getting-started-with-javascript/words-from-the-heart';
var writePathString = './quming.txt';

function read_callback(err, files) {
    if (err) {
      console.log('读取文件失败');
      return;
    }
  
    if (files.length > 0) {

        var fileContent = files
        fs.writeFile(writePathString, fileContent, write_callback);
    } else {
      console.log('没有找到任何文件');
    }
  }


function write_callback(err) {
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
  }
  
  fs.readdir(readPathString, read_callback);
