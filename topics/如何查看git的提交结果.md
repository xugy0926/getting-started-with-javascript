## 背景
对于初学者来说，当自己将内容push到github，或者pull request到master（即老师的GitHub）后，不知道如何判断是否提交成功，再加上英语不好犹如雪上加霜，面对一大片英文更是一脸懵逼。为了解决初学者的这个疑问，故此进行了总结，如有错误还望指出。
再次也提醒小白，**一定要抓住关键字**，尤其是自己认识的关键字。

## 如何查看提交是否成功
首先说明有两种情况：
- 将本地代码push到自己的GitHub上
- 将自己GitHub上的代码pull request到老师的GitHub上

这两种情况均有两种方法可以参考

### 一、将本地代码push到自己的GitHub上
我们通过终端将本地代码推到GitHub上，使用的命令如下：
```
> git push origin master
```
这就涉及到终端和GitHub，所以我们可以从这两处来查看

方法1：在终端执行*git push origin master*命令后，若终端出现下图即为成功

![image.png](http://upload-images.jianshu.io/upload_images/7306283-e702405cac425638.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

方法2：在GitHub上点击【commits】，可以查看历史记录，如下图

![image.png](http://upload-images.jianshu.io/upload_images/7306283-dc1a95c1801a06fd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](http://upload-images.jianshu.io/upload_images/7306283-36cdeee4146fc558.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

注：上图红框中出现的描述，如：**添加图片**，是在使用*git commit -m* 命令时所添加的描述，此处也是我初学时抓住的关键字

### 二、将自己GitHub上的代码pull request到老师的GitHub上
pull request这个操作是在GitHub上完成的，所以在GitHub上查看

方法1：在GitHub上进行pull request后会直接出现结果，若出现下图即为成功

![image.png](http://upload-images.jianshu.io/upload_images/7306283-d18843c0ca045055.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

注：pull request后会自动跳转到老师的仓库中，并显示本次pull request的情况

方法2：进入老师的GitHub上的项目，点击【Pull requests】，可以查看所有pull request的所有记录，如下图


![image.png](http://upload-images.jianshu.io/upload_images/7306283-846f515a5e14c09a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


注：**修改学习JS的心里话**是我本次pull request的内容；此处不光可以看自己的pull request的记录，还能其他人的记录


看到这里不知道大家是否清楚了，快去试试吧。
