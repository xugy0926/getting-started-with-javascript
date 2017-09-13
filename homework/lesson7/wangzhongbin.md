网页地址：https://wangzhong2014.github.io/javascript/

项目主页：https://github.com/WangZhong2014/javascript

## 第7次作业总结

第七次的作业是分为2部分。
一部分是用js，把同学们的心里话筛选出来，放到json文件里面。
然后再把这一部分的json内容更新到自己的主页上。

#### 第一部分
第一部分做得很顺，如果不是自己一开始搞得乌龙的话，真得是不用几小时就做出来了。
然而，搞了一个乌龙，浪费了一天。（解决后，回过头来看，感觉自己简直是zz……）

**这次写代码最大收获是，你认为错的地方，不一定错了。
反而是那些没考虑过的地方，错了。**

其次，一定要相信cmd反馈回来的信息，它们能帮你找到错误。
最后，要敢于问，善于问，如果真得遇到了自己解决很困难的问题， 就勇敢地去提问。
我总是担心浪费别人的时间，每次遇到问题时，满脑子想的是百度或google，很少会截图去群里面问。
(但这次出错的地方并不是很难的，如果去群里面问了，反而可能会立刻解决)

事情是这样的……(⊙﹏⊙)b，记录一下。
这一次代码一开始我觉得，做得满顺利的，运行时，修复了一些问题。
但就卡在最后一步，一直出错，不论怎么改，都是出现：
```
PS D:\my_project\my_article> node wangzhongbin.js
D:\my_project\my_article\wangzhongbin.js:81
});
 ^
SyntaxError: Unexpected token )
    at createScript (vm.js:74:10)
    at Object.runInThisContext (vm.js:116:10)
    at Module._compile (module.js:533:28)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
    at Function.Module.runMain (module.js:605:10)
    at startup (bootstrap_node.js:158:16)
    at bootstrap_node.js:575:3
```

我当时怀疑是不是电脑的nodejs出问题了，因为我的代码只有80行，
但它居然说我81行有问题……
我调整了很多语句，但执行后，一直说是（我写的代码行数+1）的那一行出错了
> 即永远是你没写到的那一行有问题，且永远是“})”错了，语法错误。

然而我都找不到这两个代码……

无语。
我怀疑jsfile库安装不正确。
就又重新敲了一遍 npm install --save jsfile。
果然看到 err ，我觉得应该是jsfile有问题了。*（然而我错了）*

就百度如何重装第三方库。
通过npm cache clean --force 强制删除。
后来重装。

但是，重装后，运行代码，依然错！还是同样的错误。
抓狂，继续想，是不是我的jsonfile名写错了？
因为老师后来在read_a_json和另一个文件里的jsfile引用，一开始是写成了jsonFile的，区分大小写。
老师是不是挖了坑……*（虽然理智告诉我，不太可能，但万一呢……之前老师说埋了2个bug呢。）*
以防万一，我改了，然而依然还是最开始屏幕的话……好吧，再改回。

不过这时我，依然坚定地认为，是jsonfile库装错了。
因为我用的是sublime编辑器，
然后最开始两行，引用jsonfile库的时候，jsonfile的字体颜色是黄色的，但引用fs时，颜色是白色的……
我猜，这是不是有区别……(⊙﹏⊙)b（好吧，我的脑回路是有些清奇）
就一直在百度，想确认jsonfile是不是装成功了。

直到我百度到用npm ls，来查看装的modules，看到了有jsonfile库之后，我才开始明白：

>哦，原来它装对了。
>但到底哪里错了呢……

于是采用笨方法，先把一段段代码变成注释，然后逐步运行。   
确定出，就是for语句之后出错了。   
然而我实在是想不出，哪一行错了。

后来，我表哥来电话了，就和他聊了十几分钟。
回来后，开始莫名其妙地开始数for语句的括号了……

一数之下，
我发现……

我少写了一个花括号！！！！
！！！

我的for语句，是抄袭了老师的那一段，因为是抄袭老师的，就潜意识以为，应该不会出错吧，
应该不会出错吧？！！

然而我错了！！！！
我少抄了一个花括号！！
也许是，我删代码时多删了一个！
总之，就是少了一个花括号！！

然后我又加了一个，再运行，居然成功了！！
喜极而泣……

现在一想，感觉这个错误好弱智，不应该出错的，/(ㄒoㄒ)/~~。
不过cmd返回的反馈，也是让我有些懵，因为出错的行数，我根本就没写到那里。
虽然它的意思是，让我在那一行补上一个括号，但这种反馈很容易造成误导，因为是整个模块的错误。
这也让我判断错误，（好吧，我在为错误找借口）
不过简而言之，还是有些收获的……至少完成了作业。

#### 第二部分
第二部分是把json的内容更新到网站上。
我一开始想的是，如何把我筛选好的json文件里面的同学们的心里话，写入到html文件里面。
但这里有两个难点：
1. 如何把json文件里面的内容写入到html中，我查了是通过jquery，但具体的还不是很清楚，估计要花很大的功夫。
2. 心里话写入到html中，是放到了```<script>```标签中，还是但又如何把它们一个个展示出来，毕竟不可能一个个自己添加，需要引入一个循环的函数，遍历css和html固定的样式才行。

然后再看老师的代码，发现是直接把同学的心里话放到了```<script>```标签中，然后循环历遍样式，是用v-for来进行列表的渲染，虽然不是很理解，但决定先根据老师的来，把自己能掌控的做出来。


###### bootstrap框架理解
我下载了bootstrap的生产环境工作，然后看到里面是一个bootstrap的css和字体还有vue。   
但还是不知道怎么才是加载了它们。   
不过看了老师是把css和vue都放在了public文件夹中，然后在html的head中引用就行了。   
我觉得bootstrap，可以通过网站的那一串字符引入css样式：
```javascript
<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```
也可以通过加载在public里面的内容，感觉bootstrap就是一些css和字体还有vue的定制成的工具。

随后就开始扒东西，在bootstrap上看网站案例，都不满意，后来找着觉得，就bootstrap的精选案例网站的框架不错，很简洁，直接就用了。

这里克服了2个难点。
1. 如何设计好框架。框架是需要先用栅格系统，定好栅格之后，再进行细化。不过可以直接右键-查看网站的源代码，看到网站的框架是什么,然后再右键-检查，查看某个框架具体的css样式。
2. 如何让logo鼠标悬停时，旋转起来，我经过大量的实验，以及各种copy，发现是通过transform属性，最终实现实现了让logo旋转的效果。让transform旋转有两个注意点。
首先是先设定，旋转后的图片属性，是旋转了180度还是360度。还是移动到了某个点。
其次是设定动画的时间，达到最终的图片效果，需要如何的时间。

```css
.logoimg img {

  transition: transform 0.4s ease-out; // 旋转的动画时间控制

}

.logoimg img:hover{
  transform: rotate(180deg);   // fransform的rotate属性，能控制元素旋转
}


```



总结这一次课程，对于vue和bootstrap有了初体验。
不过对于使用还是需要多多练习才行。



