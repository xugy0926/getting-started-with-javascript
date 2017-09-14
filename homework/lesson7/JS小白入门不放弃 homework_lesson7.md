# JS小白入门不放弃 homework_lesson7

### 提交作业

项目地址：https://github.com/Wei02320/words_collection

网站地址：https://wei02320.github.io/words_collection/

## 反思

### 学习最怕的不是不懂，而是傲慢。
这几天不管是在看回放还是做作业上都有些懈怠，反思一下：作业难度增加，完成没之前那么顺利，正向反馈减低，花时间变得更少，更难完成，走进死循环。一看日期，明天便是最后一节课，想起第一次课的JS小白不放弃里所说，放下傲慢。拿起键盘就是干！

### 作业要点和难点
* 使用filejson这个库，把同学们的json文件汇总到一个json文件中。
* 用vue实现一个html，把json文件的内容展示出来。

### 思路
其实老师在作业里都有留下sample，我们需要对代码进行修改和调试，大大地降低了难度。做的时候我也在想，不参考代码我能不能写出来。

**不过，不花时间还想一步登天，做梦呢！**

1.在github上新建一个项目：words_collection

2.先使用filejson这个库，安装package.json，引入第三方库。在这里犯了一个大错误，将*npm install*输成*npm install package.json*，以致于下一步一直报错。好在英俊潇洒的徐老师及时指出错误，并丢过来一个问题：

>为什么*npm install package.json*也可以执行？

*npm install*可以命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。而package.json文件本质上是一个对象，*npm install package.json*相当于单独安装package.json，所以报错？

3.把同学们的json文件汇总到一个json文件中。代码偷懒参考老师的sample：

需要注意的是，有三处需要修改哦！

```
var pathString = '../words-from-the-heart/';
```

```
  var jsonFiles = [];
  for (var i = 0; i < files.length; i++) {
    if (files[i].includes('.md')) {
      jsonFiles.push(files[i]);
    }
  }
```

```
var jsonList = [];
  var errorFiles = [];
  for (var i = 0; i < jsonFiles.length; i++) {
    try {
      // 读取json文件
      var content = jsonfile.readFileSync(pathString + jsonFiles[i]);
      jsonList.push(jsonFiles[i]);
    } catch (err) {
      // 如果读取错误就把错误的文件名写入到errorFiles数组内
      errorFiles.push(jsonFiles[i]);
    }
  }
```
请开动脑筋找出来！

4.之后便是用vue实现一个html，然后把读取的json数据展示到网页上。新建index.html文件，copy徐老师的index.html（下一步想加一些新的东西玩玩，装修一下网页），并复制粘贴包含style.css和vue.min.js的public文件夹。

5.部署到自己的github项目的页面上。

*大功告成！明天结课前我要完成第9课，不多写了，看回放去了！*


