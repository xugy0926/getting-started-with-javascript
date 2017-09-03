var fs = require('fs');

var dirPathString = '../../lesson6/words-from-the-heart';

var files = fs.readdirSync(dirPathString);
console.log(files);   
var fs = require('fs');

var outputPathString = './write_file_sync.txt';

var fileContent = fs.readdirSync(dirPathString);

fs.writeFileSync(outputPathString, fileContent);
/*今天的作业作业我的理解就是一个填空题，按照老师给的同步异步代码，换上不同的路径和文件夹进行操作，
我们唯一要做的就是对于两段代码的连接，这是最难的，对吧老师？
我想老师的答案应该有四种结果，分别是
同步扫描对异步写入，
同步扫描对同步写入，
异步扫描对同步写入，异步扫描对异步写入，
最复杂的应该是两个都是异步，因为两个都是异步才是最难的，也最接近现实生活场景的代码解决方案，
老师我理解的对不对啊？☺今天异步对异步我还是没搞明白如何操作，我想我对于异步和值还有变量并没有完全理解清楚，
我的作业给出了最简单的答案，老师给点评下哦。
下面是我对真个课程的学习框架总结，后面慢慢写入细节，框架按照我学习到的东西进行分类
1，git操作，
2，如何在github上完成项目建立，如何协作，
3，js在前端和后端的运行框架，
4，两种交互
5，函数的理解
6，.......
老师我写的框架有没有少的啊？ */