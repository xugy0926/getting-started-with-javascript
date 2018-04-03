### 基础-第七课

课程内容：

vue有什么作用？如何使用vue。

答：vue处理的是前端的数据刷新的问题。

#### 第一个小作业的代码：

```javascript
var fs = require('fs');

var jsonfile = require('jsonfile');
//引入fs & jsonfils

var writeFilePath = './all_words_info.json';

var errorPathString = './error_files_data.json';

var readFilePath = '../../../words-from-the-heart/words/';
//定义路径

fs.readdir(readFilePath, function(err, files){
  if(err){
    console.log("读取文件夹失败");
    return;
  }
  //第一个bug，需要更改对应的字段，将markdown变为json
  var jsonFiles = [];
  for (var i = 0; i < files.length; i++) {
    if (files[i].includes('.json')) {
      jsonFiles.push(files[i]);
    }
  }

  var jsonList = [];
  var errorFiles = [];
  for (var i = 0; i < jsonFiles.length; i++) {
    try {
      var content = jsonfile.readFileSync(readFilePath + jsonFiles[i]);
      jsonList.push(content);
    } catch (err) {
      errorFiles.push(content);
    }
  }

  jsonfile.writeFileSync(writeFilePath, jsonList, {spaces: 2, EOL: '\r\n'});

  jsonfile.writeFileSync(errorPathString, errorFiles, {spaces: 2, EOL: '\r\n'});


});
```

案例代码中的两个bug的解法：

![](https://ws1.sinaimg.cn/large/006tKfTcly1fpyg924k6vj30ka0gnmz7.jpg)

第二日更新：

第二个bug不是对应的格式的正确，而是写入对应的文件内容

![](https://ws2.sinaimg.cn/large/006tNbRwgy1fpzb18yblaj30na08zmya.jpg)

------

#### 第二个作业：

[心里话汇总网站](https://jaygjianguo.github.io/study-quote/)

[Github代码](https://github.com/JayGJianGuo/study-quote)

###### 遇到的问题：

在提取数据的时候遇到问题，没法通过简单的路径改变读取对应的json文件。最后的解决办法是将数据直接写在html里。

![](https://ws2.sinaimg.cn/large/006tNbRwgy1fpzb0wrk7nj315i12raj3.jpg)

上群问了，需要找到对应的解法，有待研究：

[用vue读取json文件](https://github.com/xugy0926/learn-vue-sample/blob/master/task/index2.html)
