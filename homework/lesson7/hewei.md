# 第七课作业

## 团队概况

- 何伟：[https://github.com/Dream4ever/](https://github.com/Dream4ever/)
- 王颖：[https://github.com/MaggieWong27/](https://github.com/MaggieWong27/)
- 王沙沙：[https://github.com/shashawang](https://github.com/shashawang/)
- 谢泓升：[https://github.com/Risexie/](https://github.com/Risexie/)

## 作业地址

- 仓库地址：[https://github.com/Dream4ever/JavaScript](https://github.com/Dream4ever/JavaScript/)
- 网页地址：[https://dream4ever.github.io/JavaScript/lesson7.html](https://dream4ever.github.io/JavaScript/lesson7.html)

## 整体思路

最开始是想做一个里程碑式的效果，来展示大家的心里话，就是类似下图的这种效果。

![网页里程碑效果图](https://raw.githubusercontent.com/Dream4ever/Pics/master/milestone-webdesign-vertical.jpg)

但是在后面做网页的过程中，发现大家的心里话字数不一致，想要做出来预期中的效果，就要对原来的设计方案进行更改。而且工作和生活上的事情也不少，没有足够的时间来做出自己希望中的效果，只好作罢。

作业的基本内容倒是完成了，但是离自己期望中的样子还差很远，还要付出更多的努力才行。看着身边的同学一个个进步神速，自己心里那个焦虑啊。

下面就来讲讲本次作业的整体流程和遇到的问题。

### 一、后台读取 `json` 文件内容

后台读取各个 `json`　文件内容的基本流程如下：

> 1. 先用 `fs.existPath()` 检查保存心里话的文件夹路径是否正确，正确则继续，否则就中止程序。
> 1. 接着用 `fs.readdir()` 读取文件夹中的所有文件及文件夹至 `files` 这个数组中。
> 1. 在读取完成之后，只保留其中的 `json` 文件，删除所有扩展名不是 `json` 的文件以及所有文件夹。并且将 `files` 数组中的每个元素，由原来只是保存 `json` 文件名，改为保存各 `json` 文件的完整路径。
> 1. 用同步读取的方式 - `fs.readdirSync()` - 将每个 `json` 文件的内容读取至 `fileContent` 数组中，并将读取失败的文件名保存至 `errorFiles` 数组中。
> 1. 最后，将成功读取到的所有 `json` 文件的内容保存到 `content.json` 文件中，并将所有读取失败的文件名保存至 `error.json` 文件中。

### 二、前台读取 `json` 内容

前台读取 `json` 文件内容的方法很简单，因为用的都是现成的库的功能，所以几行代码就搞定了，也没遇到什么问题。

> 1. 在第一阶段，已经把大家的心里话都保存到了 `content.json` 文件中，然后在终端中将该文件上传至 GitHub 的仓库里：[content.json](https://raw.githubusercontent.com/Dream4ever/JavaScript/master/public/lesson7/content.json)。这样就可以用 `ajax` 请求来获取仓库上的内容，从而开始最基本的前后端交互。
> 1. 在 `main.js` 文件中，采用 `ajax` 请求来获取上面的 `content.json` 文件的内容。如果读取成功，则用 `JSON.parse(data)` 来解析返回的数据，并将解析后的数据与 `Vue` 实例 `vm` 中的数据项 `words` 进行绑定。这样，就可以在前端页面中使用读取到的内容了。

### 三、浏览器页面渲染数据

在获取到数据之后，就要开始对数据的渲染了。因为有了 `Vue` 这个强大的前端框架，以前很多需要用 `jQuery` 来手动操作的部分，现在都不需要考虑了，只要把主要精力集中在页面样式和业务逻辑上就可以了。说一下在做这个简单页面过程中的几个关键点。

> 1. 如何让大家的心里话依次在左边和右边进行展示？这里当然要用数组，将下标为偶数的元素 0、2、4…… 在左侧显示，将下标为奇数的元素 1、3、5…… 在右侧显示。那么如何能够获取到数组的下标呢？这就需要稍微深挖一下 `Vue` 中的 `v-for` 这个指令了。`v-for` 这个指令的第二个参数用来表示当前项的索引，这刚好就是我们所需要的。在前端页面中，用 `v-for="(word, key) in words"` 这条指令，来获取每一个元素 `word` 及其索引 `key`。这样就可以根据每个元素的索引值，来决定是让它在左边显示还是在右边显示了。
> 1. 在获取到元素及其索引之后，就需要为左侧和右侧的元素分别设置不同的样式了。经过一番研究，发现可以用 `Vue` 中的条件渲染来实现这个需求：对于索引分别为偶数和奇数的元素，利用 `Vue` 中的条件渲染这个功能，用 `v-if="key % 2 == 0"` 这个条件进行判断，然后分别用 `<template>` 元素进行包装，这样就方便我们为不同的元素设置不同的样式了。
> 1. 接下来，就可以用 Bootstrap 的栅格系统来实现基础的布局，结合 `col-md-X` 和 `col-md-offset-X`，便可让元素在指定的位置显示了。

### 存在问题

虽然页面的基本效果做出来了，但是在这个过程中，发现了两点问题。

> 将屏幕分辨率设置为 `1280 x 800` 时，通过 Bootstrap 的栅格系统设置的样式发生了错位（见下方第一张图）。一方面，可以从图片的位置看出来，奇数行最右侧图片的右边缘，与偶数行最左侧图片的左边缘已经交叉了。而将分辨率设置为 `1440 x 900` 时，这种现象就消失了。另一方面还可以看到，偶数行的文字，全都跑到了下一行，似乎是因为偶数行最左侧的图片占据了过多的宽度。

![发生错位的情况](https://raw.githubusercontent.com/Dream4ever/Pics/master/bootstrap-grid-go-wrong.png)

↑发生错位的情况

![正常显示的情况](https://raw.githubusercontent.com/Dream4ever/Pics/master/bootstrap-grid-all-right.png)

↑正常显示的情况

下面就尝试着分析一下问题的原因：

在 `1280 x 800` 分辨率下，对于每一行来说，不包括边距的宽度为 `1168.8px`，那么其一半的宽度就是 `584.4px`。

奇数行的文本占据 5 列，含边距的总宽度为 `456.984 + 30 = 486.984px`。

奇数行的图片占据 1 列，宽度为 `style.css` 中指定的 `100px`。

这样奇数行左侧的内容占据的总宽度就为：`486.984 + 100 = 586.984px`，这个宽度已经超过父元素的半宽 `584.4px` 了。

再来看偶数行。

偶数行图片左侧的 `col-md-offset-6` 占据的宽度为 `584.391px`，这个宽度没有超过父元素的半宽，说明 Bootstrap 本身的栅格系统是没问题的。

偶数行的图片占据 1 列，宽度为 `style.css` 中指定的 `100px`。

这样偶数行图片右侧的位置为 `584.391 + 100 = 684.391px`。这个宽度是否超过了 Bootstrap 栅格系统 7 列的宽度呢？我们来计算一下 7 列的宽度：`1168.8 / 12 * 7 = 681.8px`，这个宽度是小于偶数行图片右侧的距离的。

经过上面的计算，问题的根源已经找出来了：在 `style.css` 中设置图片的尺寸为 `100px * 100px`，而之前显示器的分辨率设置为 `1440 x 900`，这个时候，`100px` 的宽度不会超过 Bootstrap 栅格系统一列的宽度，所以当时没有看出来问题。而这次把显示器分辨率调低之后，`100px` 这个宽度已经超过了 Bootstrap 栅格系统中一列的宽度了，所以出现了错位问题。既然这样，就不能用 `px` 来指定图片的尺寸了，用 `bootstrap responsive image max size` 作为关键字进行 Google，发现应当设置图片的 `max-height` 属性的值为 `100%`，这样不管怎样更改分辨率，都不会出现错位的问题了。

但是在查看页面的时候，发现对于 `img` 地址错误的元素，其高度坍缩成 0 了。而当初正是为了让这样的元素也能占据和普通图片元素相同的宽高，才设置的 `px` 值。这样一来，虽然解决了新问题，但是老问题又回来了，哈哈，真是辛辛苦苦三十年，一夜回到解放前呐。

嗯，这个问题先记录下来，后面再慢慢解决吧，作业都布置了一个多星期了，还没交上呢，焦虑啊！

参考资料：

[Constraining image height with bootstrap responsive image?](https://stackoverflow.com/a/21859493/2667665)
