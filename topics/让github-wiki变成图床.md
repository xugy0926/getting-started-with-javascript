### 如何用 github 做图床？

如何用 github 做图床，这是 @mdqsky 在[Issues](https://github.com/xugy0926/getting-started-with-javascript/issues/408)提出的问题。这是一个很好的问题，很快 @xugy0926 在微信群里回复他是如何用 github wiki 做图床的。恰好我当时在现场，马上就根据他们的对话就动手开干！下面是我整理小教程，希望对大家有帮助。

### clone 项目的 wiki

每一个项目都已一个对应的 wiki，clone 下来，然后把要用的图片放到本地wiki项目里面，然后再上传到 github。

![](https://raw.githubusercontent.com/wiki/antarts/getting-started-with-javascript/githubwiki.png)

![](https://raw.githubusercontent.com/wiki/antarts/getting-started-with-javascript/clone.png)

### 图片上传后，如何使用呢？

要记住自己放在wiki里面的图片的文件名，git上传之后，如何使用这些图片呢？这是有个规则的，markdown引用时这样写：

`![](https://raw.githubusercontent.com/wiki/github_userName/github_projectName/pictureName.fileType)`

### 放一张实例图

这是 @xugy0926 的项目中使用wiki中图片的示意图：

![](https://raw.githubusercontent.com/wiki/antarts/getting-started-with-javascript/image_hosting.png)

最后，感谢 @mdqsky 的问题和 @xugy0926 分享！

另外，如果你对教程有疑问，欢迎留言！
