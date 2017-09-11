- ##### 第一：作业提交

   [（个人网页）](https://zhanglinalove.github.io/MyPage/)

- ##### 第二：心得体会

  > 1、完成第7次课程，再重新看自己以前做的网页，顿时觉得丑爆了，可是当时也折腾了半天，还是不能解决布局的问题，直到老师手把手的教我们布局这块，一个bootstraps引入，再加div的class属性col-md-n的设置，一个简单的设置就解决了困扰我之前网页搭建痛苦了好久的布局。多么痛的领悟啊，做一个事情，知道怎么做，远比盲目的傻做效率要高太多倍啊！难怪老师反复强调自己教编程的思想，而不是上来就从枯燥地语法开始，教会了我们做事情的方法，浩瀚的JS的星辰大海，需要我们自己去探索。
  >
  > ​
  >
  > 2、GIT HUB:在接触JS课程之前，我之前对于GitHub只停留在听别人说过一次，至于自己用，完全觉得不可能，当时觉得这个东西完全就是深不可测的东西。在JS课程开始以后，因为需提交作业，从git下载、安装、上传遇到冲突解决、到现在几乎成为了每天必备的工具，那些开始记不住的命令，仿佛和打字一样成为了习惯。这个感觉真心是超棒，我试图把这个东西推荐给我的同事，不过他觉得没有意思，就没有用。或许只有用，且经常用的人才知道有多爽！对了，老师之前让我学习写md的文档，完全没有听过是什么鬼？现在我的笔记全部都是md，也不过半个月的时间，哈哈哈，人的适应和学习能力都是很有潜力的。
  >
  > ​
  >
  > 3、JS群里每天都有各种各样的问题，恐怕这个群，目前是我手里最活跃的一个了，没有之一！老师、童鞋们对于回答、解决问题的热情都非常的高。高手太多，总是让我这种小白有着强烈的危机感。因为怕做出来的东西太水，太菜。可现实是总是要从小白开始，然后一点一点的进阶。希望我这小白菜童鞋也能给大家提供到帮助呢。技术还是要分享的，这句老师的话，我记住了，接下来，就是好好践行。
  >
  > ​

- ##### 第三：Coding部分

  ```javascript
  // 引入fs模块
  var fs = require('fs');

  // 引入file json库
  var jsonfile = require('jsonfile');

  // 定义要扫描的目标文件夹
  var pathString = '/Users/zhanglina/ZLNdocument/my_project/words-from-the-heart';

  // 用于存放所有心里话
  var writePathString = '/Users/zhanglina/ZLNdocument/my_project/jsonInfo/all_words.json';

  // 用于存放格式不正确的json文件名
  var errorPathString = '/Users/zhanglina/ZLNdocument/my_project/jsonInfo/error_data.json';

  // 调用fs的readdir函数读取所有文件
  fs.readdir(pathString, function(err, files) {
    if (err) {
      console.log('读取文件失败');
      return;
    }

    //把含有"json"字符的文件名过滤出来,把所有文件保存在jsonFiles数组中
    var jsonFiles = [];
    for (var i = 0; i < files.length; i++) {
      if (files[i].includes('.json')) {
        jsonFiles.push(files[i]);
      }
    }

    //循环读取json文件的内容，并都存在jsonList数组内。读取出错的文件名存在errorFiles数组内。
    var jsonList = [];
    var errorFiles = [];
    for (var i = 0; i < jsonFiles.length; i++) {
      try {
        // 读取json文件
        console.log(pathString + jsonFiles[i]);
        
        var content = jsonfile.readFileSync(pathString + "/"+jsonFiles[i]);
        jsonList.push(content);
        console.log(jsonList);
      } catch (err) {
        // 如果读取错误就把错误的文件名写入到errorFiles数组内
        errorFiles.push(jsonFiles[i]);
      }
    }

    // 将收集到的数据写入到一个json文件中
    jsonfile.writeFileSync(writePathString, jsonList);

    // 将收集到的错误文件写入到一个json文件中
    jsonfile.writeFileSync(errorPathString, errorFiles);

    // 假如收集到的内容（json文件）格式乱怎么办？可以使用visual studio code的代码格式化插件自动调整格式，就会得出你想要的格式想过。
  });
  ```

  ​

  ##### 