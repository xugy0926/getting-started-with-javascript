# JS已起飞，请调直座椅靠背

我们的JavaScript编程入门，这次发布了一个综合性很强的作业：把一份数据内容呈现到网页上。对于我这个初学者而言，这次的作业是有一定难度的。先后对照了老师提供的代码，同时反复看了近两次的视频回放，总算是基本完成了作业的要求。
## 1
这里先把作业附上：
https://yanqingmu.github.io/my_lesson7/

虽然我的网页还相当粗糙，但是这次的作业让我体验到了从后端的数据处理到前端的网页设计的整个流程。
## 2
我们先是要对已有的数据进行处理。利用node.js把分散的文件内容，整理到一份文件中，这个过程就是后端的内容。虽然老师给出了js文件，但是即使照着修改也是并不轻松。以下是我的js代码：

```
var fs = require('fs');
var jsonfile = require('jsonfile');

var pathString = '../words-from-the-heart/';

var writePathString = './js_words.json';
var errorPathString = './error_data.json';

fs.readdir(pathString, function(err, files){
    if(err){
        console.log('读取文件失败');
        return;
    }

    var jsonFiles  = [];
    for (var i = 0; i < files.length; i++){
        if (files[i].includes('.json')){
            jsonFiles.push(files[i]);
        }
    }

    var jsonList = [];
    var errorFiles = [];
    for (var i = 0; i < jsonFiles.length; i++){
        try{
            var content = jsonfile.readFileSync(pathString + jsonFiles[i]);
            jsonList.push(content);
        } catch (err) {
            errorFiles.push(jsonFiles[i]);
        }
    }

    jsonfile.writeFileSync(writePathString, jsonList);
    jsonfile.writeFileSync(errorPathString, errorFiles);

});
```
这里需要注意的有：
> 1.路径的问题
> 2.过滤文件后缀的问题
> 3.jsonfile的操作命令

整个过程就是在不断的调试和查看相应文档中完成的。
## 3
然后就是要把这些数据发布到网页上了。老师依然给出了html和css文件，我们要做的也依然是在这个基础上修改。

同时老师给了我们两个武器库：vue和bootstrap。虽然这里我们仅仅用到了很少的功能，但是能够尝试使用这两个库本身，已经让我兴奋不已了，因为这很有一点程序猿的样子了不是吗。

这里的重点是：
> vue的数据调用
> bootstrap的布局方案
> css的调整

## 4
最后小结一下：
* 作业中我是把处理好的数据copy到html中的vue代码块下的，而我认为正确的做法应该是用vue直接调用本地的json文件。
* 网页有相当多需要优化的地方，比如对于如此多的数据项，应该增加翻页的功能和搜索的功能。
* 这个作业重点是体会后端数据是如何传递到前端的，以及前后端各自第三方库的强大。
