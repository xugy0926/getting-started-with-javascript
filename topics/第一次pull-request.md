# 第一次 Pull Request

## 使用说明

编程小白在进行操作之前请注意三点。

1. 文档中的指令前面都有一个 `>` 符号，这个符号**不用输入**，记住，不用输入。

```shell
> git push origin master
```

`>` 符号是从文档层面告诉你 `git push origin master` 是一条终端的指令。

实际在终端输入 `git push origin master` 时，别带前面的 `>`。

指令和代码的对比如下：

```shell
//这是一条终端指令，用 `>` 来凸显这是一条指令，不用输入 `>`
> git push origin master

// 这是一行代码，也不用输入 `>`
var i = 0;
```

2. 指令的构成，该空格的一定要空格，不然很可能出错。

```shell
// 错误
> xcode-select—-install // select后面没有空格

// 正确
> xcode-select -—install // select后面有空格
```

3. 双引号要用英文，不要用中文。编程的时候尽量切换到英文键盘下，需要输入中文的时候也要仔细小心。

```shell
// 错误
> git commit -m “这是一次提交” // 用了中文的引号”“

// 正确
> git commit -m "这是一次提交" // 要用英文""
```

4. 终端常用指令总结

[mac终端](https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/MAC-Terminal-command-list.md)
[win终端](https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/Win-Command-list.md)

## 开始

还记得上一篇[【第一次使用git】](https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%BD%BF%E7%94%A8Git.md)吗？这一次我们来学习发起第一次的 pull request。

当我们要协同工作的时候，一定会有一个人先建立一个新项目（命名为项目 A），其他开发者会 fork 项目 A 到自己的仓库中。

现在假设有一个工程师 fork 了项目 A 到自己的仓库（fork 后的项目暂且叫项目 B）。这个工程师就会把项目 B clone 到本地开始工作，然后把修改提交并推送到远程的项目 B。

工作完成后，这个工程师想把自己提交到项目 B 的内容合并到项目A里，怎么办呢？这时就要发起一次 pull request。

当项目 A 的负责人收到你的 pull request 时，就会进行 merge 操作。

下面就教你怎么进行 pull request。在开始操作之前，请先看一下项目[words-from-the-heart](https://github.com/xugy0926/words-from-the-heart)的项目说明（README.md 文件中的内容）。

### 图解 fork 别人项目和直接 clone 别人项目的区别

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/pull-request-5.png)

1. fork别人项目是先把别人的项目放在自己的远程仓库，这是多人协作的关键步骤。你fork完成后，就可以针对你远程仓库的项目进行clone、修改、提交。最终你完成工作后，就可以向主项目发起一个pull request，以表示想把你的改动合并到主项目里。主项目的作者确认你的pull request是有价值并且是正确的，他就会合并。有一种情况要注意，如果你fork项目后，主项目也在改动，那么主项目的改动如何更新到你fork的项目呢？这个问题参考[文档](https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/%E5%A6%82%E4%BD%95%E4%BB%8E%E4%B8%BB%E9%A1%B9%E7%9B%AE%E6%9B%B4%E6%96%B0fork%E7%9A%84%E9%A1%B9%E7%9B%AE.md)
2. clone别人项目是直接把别人的项目克隆到自己的本地。因为你不是项目的主人，即使你可以修改本地的内容，但进行提交是会不成功。

## 操作

希望通过下面的操作，让我们一起来完成一件有意思的事情。

### 1. fork项目 words-from-the-heart

在项目 [words-from-the-heart](https://github.com/xugy0926/words-from-the-heart) 页面，点击【fork】。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/fork.png)

正在fork时，你会看到下面这个页面。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/forking.png)

### 2. clone项目到本地

fork 成功后，在你的 github 主页会多出一个项目 words-from-the-heart。请注意，这个 words-from-the-heart 项目已经明确是你自己的。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/my-fork.png)

这时，你就可以 clone 你的 words-from-the-heart 项目到本地了。因为是你的 words-from-the-heart 项目，所以请把下面终端命令里的 `<your project url>` 替换成你的项目的 https 的 url。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/words-form-the-heart-url.png)

```shell
// 用 https 的 url
> git clone <your project url>
// 示例，Dream4ever 是 GitHub 中注册的用户名
> git clone https://github.com/Dream4ever/getting-started-with-javascript.git
```

### 3. 修改文件

1. 在 clone 至本地的 words-from-the-heart 项目文件夹中，添加一个 json 格式的文件，文件命名为你的名字，比如:xugaoyang.json。其实，你可以拷贝一份 template.json 后，再修改你拷贝出来的文件名即可，比如你新建（或者拷贝并修改后）的文件名为 abc.json。（千万别直接改我的 template.json，也别修改其他任何文件，否则我会拒绝你的 pull request 请求的。）
2. 用编辑器（建议用 VSCode）修改 abc.json 里的内容。文件里有三个内容需要填写：头像链接，姓名，心里话。只修改双引号里面的内容即可。
3. 头像链接如何获取？你需要把头像上传到网上，对于 Mac 用户，我介绍一款图床软件给你，把图片上传到图床上，就能拿到一个url => [iPic](https://toolinbox.net/iPic/)。

关于图床，实际上QQ空间、百度云盘、微博都可以成为你放图片的地方，只要你懂怎么拿到图片的 url 即可，就是在浏览器中打开这个 url 的时候，会直接显示一张图片，而不是一个网页，这个时候就说明成功拿到了图片的 url。

为了保证我在制作 html 页面时的美观度，建议图片尽量用微信头像。如果你担心隐私问题，也请用和微信头像同样长宽比的图片。

### 4. 查看状态

在终端中执行 `git status` 命令，查看修改状态，每个人只能有一个增加的json文件。否则，我最后会拒绝你的 pull request 请求。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/git-status.png)

```shell
> git status
```

### 5. 添加修改

```shell
> git add -A
```

### 6. 提交修改

```shell
// 这里注意不要用中文的双引号，要用英文的单引号。不太理解的同学，可以百度/谷歌一下如何输入半角的标点符号并在这里实践一下
> git commit -m "你的提交说明"
```

### 7. 推送到自己的远程仓库

```shell
> git push origin master
```

### 8. 发起 pull request

在 GitHub 中，进入你的 words-from-the-heart 项目发起 pull request：选择【Pull requests】标签，点击【New pull request】。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/my-fork.png)

点击【Create pull request】，准备发起一个 pull request。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/pull-request-2.png)

点击【Create pull request】，填写本次 pull request 的基本信息。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/pull-request-3.png)

看到下面的页面，就说明你提交 pull request 成功了。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/pull-request-4.png)

## 结束语

1. 在你提交成功 pull request 之后，我会把符合要求的 pull request 来 merge 到我的项目中。
2. 所有数据将做成一个页面，供我们一起留念。
