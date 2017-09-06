## JavaScript编程入门_lesson7

网页地址:https://babysodme.github.io/homework_lesson7/

项目地址：https://github.com/babysodme/homework_lesson7.git


## 自我感觉网页的小亮点

1.照片每次刷新会随机排序。

2.配色风格延续新大主站色调。


## 作业心得
1.复制粘贴就是干。太多编程知识需要去开拓。

2.当听到老师讲我们学完课程后完全可以找份前端工作做着，第一反应我是怀疑的；啥都不会儿呢咋整。可是通过这次作业按照老师讲的在bootstrap上找组件，看到好看的网站就把样式拿过来，网页从上到下逐一完成导航、巨幕、面板、缩略图、内容填充、页脚。每个细节都会遇到一箩筐的问题，想起老师说过我们遇到的问题肯定别人都解决了去搜索去github上找就好，问题就这样一个个的解决掉，兴奋的20个小时没睡觉把网页搭建出来，对html文件引用css、js文件也有了更多的认知。

3.javascript函数对前端好比摄影中的光影；太太重要了，似乎体会到为什么老师花这么多时间来讲函数。


## 新见识的代码听老师讲随时存上以后可以拿来直接用
1.数组随机排序方法：

arr.sort(function(){return Math.random()-0.5;})

网上很多前辈认为这个方法不是正真的随机，这个问题留着以后进阶了回来看。

2.将一个数组平均分为若干个数组的小方法：。

function split_array(arr, len) {
arr.sort(function(){return Math.random()-0.5;});
var a_len = arr.length;
var result = [];
for (var i = 0; i < a_len; i += len) {
result.push(arr.slice(i, i + len));
}
return result;
}

3.瀑布流bootstrap缩略图+Masonry插件


## 待解决问题

1.想让每个缩略图有阴影效果，这样立体感更强，同时鼠标放上去有悬浮效果。


2.网站需要增加登录系统。

3.划分精品区域根据点赞+评论数排序。

4.按钮上可以显示点赞数和评论数。

5.按钮根据点击次数提示不同信息。

这几个问题留着进阶后回头来搞

6.强化javascript函数方法的理解及使用。

6.新大主页和登录页会动的背景视频一定要“偷”出来用。

7.隔壁队伍的队长那晚说去抽根烟到底是去做了、想了什么？


