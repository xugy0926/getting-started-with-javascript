很开心利用JS进行实际操作了。
描述好像不是很准确，很开心能用JS做与工作比较相关的内容了。

今天的作业感觉不是很难，毕竟老师把文件扫描和文件写入的代码都给我们了。而且每个步骤都给了两种方法。只需要拼接一下就好了。

我感觉这次作业的难点在于相对路径这个概念的理解。
既然是相对，就涉及到两个内容.下面是我的理解。希望老师点评。

已网上的一个例子为说明，假设现在有一个页面index.htm,在这个页面中联接有一张图片photo.jpg。他们的绝对路径如下：
  c:/website/index.htm 
  c:/website/img/photo.jpg
已知页面index.htm的路径，如何用相对路径来找到图片photo.jpg呢？

一个原则是：两者重复的路径都可以省略。
一个自己领悟的重点是：所为当前目录也好，上级目录也好，上上级目录也好，这些都是针对已知的那个内容来说的。比如例子中的index.htm.

自己总结的三步：
1、比较已知内容与需表示的内容的路径，找出相同的路径，然后忽略。比如例子中的c:/website/
2、查看剩余内容，需表示的内容用来作为查找对象，比如例子中的img/photo.jpg；
3、查看剩余内容，已知内容的剩余部分用来表示路径。比如例子中，已知内容的剩余部分为index.htm 。则说明两者在同一个文件夹下。
最后相对路径为：img/photo.jpg

相同的方法
c:/website/web/index.htm
c:/website/img/photo.jpg
步骤3，已知内容的剩余部分为web/index.htm ，说明index.htm 的上一级目录和photo.jpg相同。
photo.jpg的相对路径可以表示为：../img/photo.jpg

c:/website/web/xz/index.htm 
c:/website/img/images/photo.jpg 
步骤2，需表示的内容剩余部分为img/images/photo.jpg；
步骤3，已知内容的剩余部分为web/xz/index.htm ，说明index.htm 的上一级上一级目录和photo.jpg相同。
photo.jpg的相对路径可以表示为：../../img/images/photo.jpg

c:/website/web/xz/index.htm 
c:/website/web/img/photo.jpg 
photo.jpg的相对路径可以表示为：../img/photo.jpg

回到老师的作业
在myproject中clone了项目words-from-the-heart；
代码文件作为作业保存的路径为已知路径，为
myproject/getting-started-with-javascript/homework/lesson6/zhaoxiaoxin.js
需要表示的路径为
myproject/words-from-the-heart/xx.json
words-from-the-heart文件的相对路径可以表示为：../../../words-from-the-heart



（1）增加了callback函数，相对于增加了一个对结果的判断，根据每一种反应给出一个反馈。
运行错误，也能得到反馈，让整个代码更具包容性。
也让代码对各种情况都有了一个反馈性。
这里的callback,感觉相当于老师讲的程序三步骤里的，参数验证，起这个作用
（2）写代码的过程中，突然有个疑问，什么时候函数名要加括号？
在异步写入时，callback是作为参数使用的，我写的时候加了括号。
什么时候加括号？
我的理解是，函数执行的时候需要加括号。函数作为参数引入别的函数时，不用加括号。
（3）老师给的scan-files-async.js里，貌似漏了files的定义。
但好像没有影响代码的执行。





