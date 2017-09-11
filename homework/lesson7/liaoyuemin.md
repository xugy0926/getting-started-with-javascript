## Summary of Lesson 7

[网页地址](https://chaoshengluchi.github.io/My_first_web/)  
[项目地址](https://github.com/Chaoshengluchi/My_first_web.git)

### Jsonfile  
```
var fs = require('fs');
var jsonfile = require('jsonfile');
var pathString = '/Users/chaoshengluchi/JS/words-from-the-heart/';
var writePathString = './all_words.json';
var errorPathString = './error_data.json';
fs.readdir(pathString, function(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
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
json文件的筛选，在第六课作业里已经完成了，所以在找老师设置的bug上没有花太多时间。一个是17行，筛选的是json文件，所以把”md“换成”json“，第二个是第26行，我们需要得到的包含所有json文件内容的一个数组，而jsonFiles[i]只是数组里面的一个元素，所以参数应该改成content。  

除了老师设定的两个bug，还有个地方自己把自己坑了：  
> var content = jsonfile.readFileSync(pathString + jsonFiles[i]);

通过pwd得到的路径/Users/chaoshengluchi/JS/words-from-the-heart，我直接拷进去了，然后怎么都得不到想要的结果。检查了很多遍，才发现路径后面少了个“／”。就因为这个“／”，差不多多花了一半的时间。深刻感受到代码的严谨性，只是微小的错误都能导致整个代码都不能正常运行。  

另外还有一个地方我纠结了很久的，就是我一直以为像readFileSync这种方法是nodejs本身就有的方法，所以一直想不明白第三方库引用有啥用。虽然我知道第三方库是一个可以直接拿过来用的代码块，但是是怎么实现的完全是懵的。后来自信看了说明文档，才知道这个库就相当于定义了一种方法，如果我不引入这个库，我就不能使用readFileSync这个方法来读文件内容。想明白的那一刻真的是又气愤又高兴，气愤的是这么简单的东西居然想了那么久才想明白，高兴的是总算想明白了，哈哈。  

### Vue
这个东东困扰了我好久。我真的想不明白vue是个啥。  
比如老师说“设置一个锚点，好让初始化vue的时候来依据这个锚点构建映射关系”，这句话真的不是普通小白能听懂的。首先我就在想什么是锚点？其次初始化vue是什么意思？构建映射关系又是什么意思？只是一句话我就有三个问题。  
老师在视频里还详细地讲了怎么用vue来实现数据更新，但是听完我也是懵的，因为我知道一个步骤但是却不知道为什么要这样做，也就是说依葫芦画瓢可以，但是让我自己写的话会完全不知道从哪里下手。  
然后反复看视频，反复看代码，反复查资料，才终于明白了vue的作用。。。。  

讲一下我对vue的理解。就是你有很长一段代码的时候，你想更改其中的一部分内容，直接去改很容易出错，vue要做的事情就相当于把你需要更改的部分框起来（在div后面加上id="app"，id名字和vue的el参数保持一致），标明这部分是我可以控制的。然后需要vue来完成更新的部分，需要打个标记（  {{ item.name }}），要不然vue怎么知道要更新哪些数据呢？两个瓜括号里面的内容对应vue里面的data参数。遇到需要做数据更新的时候，就不需要所有的代码都check一遍再去更改，只需要更改vue里面的data的内容就可以了。这就好比一个机器的一个零件坏掉了，不需要把整个机器拆了再来修，而是直接修这个零件，只要你告诉它在哪儿（定义ID），然后告诉它那个东西是什么（{{ item.name }}），vue就可以帮你把它修好，并且完全不影响你整个代码的运行。
顺便说下，这段时间做梦都是在写代码，vue就是在做梦后想通的。。。也是醉了。  

页面上那首诗也是想用vue的，但是发现变量是一个简单的字符串好办，但是如果设计到换行排版又不会做了。。。  
这个下来还要再研究研究

### Bootstrap
还不是很明白，只是明白它是一个CSS框架，就是用他可以实现很多页面布局效果。不过还不太会用

### 其他  
搞明白jsonfile和vue后，要做一个网页，发现html／css的知识必不可少。之前利用业余时间在网上也看了一点相关的课程，这次为了这个作业又把剩下的课程看完了，了解了一个大概。感觉老师的课程就是这样，给你画个框，然后内容要自己填。不会填怎么办？去学。而在学一个知识点的过程中又发现需要其他知识。感觉就是养树的过程，最开始只是一根小苗，然后慢慢长出很多枝桠，最后变成参天大树.  
div真的快把我弄疯了，div太多了，有时改也不知道多删了个还是少删了个，然后运行后就发现各种错乱，网页都是东拼西凑凑出来的。。。。。  
有疑问的地方：  
1. 页面左右两边留白各1格，中间6+4格，居中，container应该也有居中的效果，但是还没想明白，目前使用的的新加一个空白格的笨办法。。。。
2. 中间4格区域想分成上下两个模块，目前使用的是百度出来的方法，还不是很明白，勉强实现了。

### 学习感受
快歇菜了！好难啊，没有愁过工作，天天就愁JS作业怎么做。还要给自己加油打气，生怕一时偷懒放弃了。  
切实感受到老师说的“课程结束才是真正的开始”的含义。开始上课那会儿，同事让我出去玩儿啥的，我都是说的“等我课程结束再约你”，现在的感觉是我约不约你跟课程有没有结束没有关系，反正不做作业我就没兴致约。。。
虽然很困难，很着急，很心累，但是还是要熬个鸡汤。群里的小伙伴一直都有在打卡学习，好几个同学之前进度掉一大截的都赶上来了。别人行没道理自己不行。我只是从开始到顿悟有点慢，并非不能学会。
谢谢老师和同学们的陪伴。
继续加油！