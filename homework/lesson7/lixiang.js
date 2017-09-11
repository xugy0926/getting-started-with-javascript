
// 引入file system模块
var fs = require('fs');
//引入第三方库：file json库
var jsonfile = require('jsonfile');

//定义要扫描的文件夹，这个路径最末尾的/一定不能少，这里卡了很久
var pathString = '/Users/pro/JavaScript/words-from-the-heart/';

//存入符合要求的json文件名
var writePathString = './all_words.json';
//存入义读取错误的json文件
var errorPathString = './error_data.json';

//用第六课所学的知识写读取文件 fs模块的readdir方法 注意第二个参数是直接用函数作为参数，这样做可以减少定义一个函数的步骤
fs.readdir(pathString, function(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
  var jsonFiles = []; //定义一个数组，注意读取出来的是数组文件
  for (var i = 0; i < files.length; i++) {
    if (files[i].includes('.json')) { //老师的sample.js中这里是第一个bug，我们需要找的是json格式的文件
      jsonFiles.push(files[i]); //如果文件名包含.json 则写入到jsonFile这个数组
    }
  }
  var jsonList = [];
  var errorFiles = [];
  for (var i = 0; i < jsonFiles.length; i++) {
    try {
      var content = jsonfile.readFileSync(pathString + jsonFiles[i]); // 第二次写作业才想明白为啥这里是加号
      jsonList.push(content); //这里是老师sample里面的第二个bug。sample代码中定义了一个变量却不用 很诡异
    } catch (err) { // catch和try：大概知道是为了避免出现因小失大 先跳过次要错误 保证整体代码运行。
      errorFiles.push(jsonFiles[i]); //出现问题时把相应文件名加入errorFiles这个数组
    }
  }

  jsonfile.writeFileSync(writePathString, jsonList); 
  jsonfile.writeFileSync(errorPathString, errorFiles);
});

