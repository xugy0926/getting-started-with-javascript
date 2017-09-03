# 提高代码兼容性&可读性的操作实践
本文是完成lesson6作业后，对作业过程的思路总结；希望能帮助到代码经验较少的小白同学们。
## 通过模仿sample代码完成基本功能
徐老师给了我们四段sample代码，分别实现了同步／异步读取文件路径，以及同步／异步向文件写入内容。
通过模仿，我们可以完成lesson6作业的基本要求。下面分别给出两个代码示例：
### 同步读取+同步写入
```javascript
// 引入FileSystem
var fs = require('fs');
// 定义要读取的路径
var readDirPath = '../../../words-from-the-heart/';
// 方案1:同步读取 同步写入
var writeFilePath = './fileNameOfSchema1_caozhen.txt';
var files = fs.readdirSync(readDirPath);
fs.writeFileSync(writeFilePath, files);
```
### 异步读取+异步写入
```javascript
// 引入FileSystem
var fs = require('fs');
// 定义要读取的路径
var readDirPath = '../../../words-from-the-heart/';
// 方案2:异步读取 异步写入
var writeFilePath = './fileNameOfSchema2_caozhen.txt';
// 定义读取时的回调函数
function readCallback(err, files) {
    if (err) {
        console.log('读取路径失败');
        return;
    } else {
        if (files.length > 0) {
            // 异步写入
            fs.writeFile(writeFilePath, files, writeCallback);
        } else {
            console.log('没有找到任何文件');
        }
    }
}
// 定义写入时的回调函数
function writeCallback(err) {
    if (err) {
        console.log('写文件失败');
    } else {
        console.log('写文件成功');
    }
}

fs.readdir(readDirPath, readCallback);
```
### 得到的结果
上面两个方案输出的txt文件内容是这样的：

![](http://opkslf6o7.bkt.clouddn.com/js-lesson6-result1.png)

### 观察结果后的思考 
重点来了，我们得到的结果是老师想要的么？上图显示的结果至少有以下几个问题：
- 发现输出结果中有隐藏文件，比如`.git`
- 发现输出结果中有文件夹，比如`script`
- 发现输出结果中有非json文件，比如`xx.json.txt`
- 一大堆结果挤在一起，看着好丑

除此之外，还有哪些地方存在问题？或者说，老师的这个作业中给我们预留了多少坑等我们去踩呢？

## 分析到底有哪些地方存在问题（坑）？
**思考这个问题的关键在于，把自己代入成使用者，即**：如果我现在正使用这段代码，我可能会进行哪些操作？遇到什么问题？
- 可能给出了一个根本不存在的路径
- 可能给出了一个路径，但里面没有文件
- 可能给出了一个路径，里面不仅有文件，还有文件夹（而文件夹并不是我们想要的）
- 可能给出了一个路径，里面存在一些不满足要求的文件（即不是.json的文件，也不是我们想要的）

以上问题（坑），都是我们在代码开发时需要关注并处理的。
即老师上课时提到的：**通过异常处理，提高代码的兼容性**
此外，针对上面提到的“一大堆结果挤在一起，看着好丑“，怎么改善呢？
- 我们更希望每个文件名一行，整齐排列

即：**提高代码执行结果的可读性**

## 如何解决这些问题？
### 基本思路
- 先踩一下坑看看，会导致什么结果
- 思考解决问题的方案，以及可能需要用到的功能
- 在库中寻找这个功能对应的函数，及其定义
- 模仿&实现在我们的代码中
### 下面举几个实操案例
#### 案例1-处理不存在路径
**先踩一下坑看看，会导致什么结果**

我们给出一个不存在路径，比如
```javascript
var readDirPath = '~/test'; //备注：该路径不存在
```
运行一下，出现错误

![](http://opkslf6o7.bkt.clouddn.com/js-lesson6-err1.png)

**思考解决问题的方案及可能需要用到的功能**

思考：如果我们在代码中判断一下路径是否存在，问题就解决了嘛！即老师课上提到的**参数检查**。

**在库中寻找这个功能对应的函数及其定义**

上面提到的关键功能是**判断路径是否存在**，我们去库里找一找，有没有函数可以实现这个功能？
在nodejs documentation中搜索关键词`exist`,看！找到了！
![](http://opkslf6o7.bkt.clouddn.com/js-lesson6-existsSync.png)

看一下文档描述，学习一下用法，就可以模仿着在自己的代码中实现了。

**模仿&实现在自己的代码中**
```javascript
var readDirPath = '~/test/'; // 故意给一个不存在的路径

if (!fs.existsSync(readDirPath)) {
    console.log('读取路径不存在！请检查读取路径是否正确')
} else {
    xxx xxx // 执行后续代码
}
```
下面再举一例

#### 案例2-处理文件夹
**我们已经知道运行结果了，直接来思考怎么办，此步骤省略**

**思考解决问题的方案及可能需要用到的功能**

思考：
- 我们得到的`files`是一个object，里面有很多文件名，需要一一判断 —— **要用到循环语句for**
- 判断是文件还是文件夹 —— **要去库中找找用什么方法实现**
- 如果不是文件就不输出了，是文件才输出到txt —— **要用到条件语句if**
- 如果文件名不是json格式，也不满足条件不输出 —— **同样要去找找怎么实现**

**在库中寻找上述功能对应的函数及其定义**

我们去库里找一找，有没有函数可以实现`判断是文件还是文件夹`这个功能？
搜索关键词`isfile`试试，我们找到了以下内容！
![](http://opkslf6o7.bkt.clouddn.com/js-lesson6-isfile.png)
    
根据描述，我们发现它是从`fs.stat()`中来的，再去看看
![](http://opkslf6o7.bkt.clouddn.com/js-lesson6-statSync.png)

----------分界线---------

（此处只是给出一种实现方式，如果感觉陌生请跳过，并不影响后续内容的理解）
如何判断文件名是否是.json结尾呢？我们可以使用`正则表达式`
```
维基百科：正则表达式，（英语：Regular Expression，在代码中常简写为regex、regexp或RE），是计算机科学的一个概念。正则表达式使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串。
```
Google搜索“javascript中的正则表达式用法”，去模仿一下用法即可。

----------分界线结束----------

**模仿&实现在自己的代码中**
```javascript
for (var index = 0; index < files.length; index++) {
    if (!fs.statSync(readDirPath + files[index]).isFile()) {
        console.log('[Warning] ' + files[index]+ ' 不是文件,跳过');
    } 
    else if (files2[index].match('\.json$') == null ) {
        console.log('[Warning] ' + files[index]+ ' 不是json,跳过')
    }
    else {
        fs.writeFileSync(writeFilePath, files[index]+'\n');
    }
}
```

执行一下，成功！
![](http://opkslf6o7.bkt.clouddn.com/js-lesson6-judgefile-output.png)

再看看输出txt文件，诶，有问题！
![](http://opkslf6o7.bkt.clouddn.com/js-lesson6-wrong-txt.png)

奇怪，为什么txt中只有一个文件名？如果再运行几次，得到的结果一样；再仔细观察，发现是最后一个文件名。思考一下原因：
- 很可能是在for循环中，每次执行`fs.writeFileSync`都会清空之前的数据，重新写入
- 所以每写入一个新名称，前面的内容都被清除了，最终只能留下最后一个名称

怎么解决？还是要去文档中找答案！我们仔细看看`fs.writeFileSync`的说明：
![](http://opkslf6o7.bkt.clouddn.com/js-lesson6-writefilesync.png)

发现里面还有一个`option`参数，默认取值是`w`，在文档中搜搜看这表示什么意思？我们搜到了如下结果：
![](http://opkslf6o7.bkt.clouddn.com/js-lesson6-flag-desc.png)

通过学习我们发现，`a`是可以追加写入的，因此我们把参数进行修改
```javascript
fs.writeFileSync(writeFilePath, files[index]+'\n', {flag: 'a'});
```
终于大功告成啦！

### 总结
由于平时工作任务较多，本文零零散散竟然写了三天，惭愧！
写此文的目的是，很多同学以前没有写过代码，面对vscode这个黑窗口可能大脑一片空白，不知道应该如何整理思绪。
这次刚好以lesson6作业代码为主题，把自己完成作业时的所思所想梳理成文字，希望能从以下方面对小白同学有所帮助：
- 遇到问题很正常，踩的坑越多提高才越快
- 遇到问题不要懵，要学会下面的思维方式
- 完成思考解决方案-搜索可用功能-模仿官方文档-写出可用代码的全过程
- 通过实战不断提高

欢迎到lesson6文件夹查看我的最终代码`caozhen.js`，指出错误，共同进步！











