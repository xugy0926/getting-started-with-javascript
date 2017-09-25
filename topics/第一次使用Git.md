# Git 新人指南

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

## 客户端安装

Git 是目前世界上使用最广泛的现代软件版本管理系统，Github 则是目前世界上最大的开源社区，如果你想利用好 Github，Git 是你必须要掌握的工具。

[git简易指南](http://rogerdudler.github.io/git-guide/index.zh.html)，这个教程很简单，帮你快速了解 git，13 页 PPT 形式的内容覆盖了 git 最基本的操作精华。

[Pro git](http://iissnan.com/progit/)

### Git 客户端下载

可以在 [Git 官网](https://git-scm.com/downloads)下载最新版 Git 客户端。若无法下载，也可以从网盘中[点击下载](http://pan.baidu.com/s/1boMJj7x)，网盘中提供了 mac、win32、win64 不同系统的 Git 客户端。

### 第一次安装 Git

#### Mac

如果你是 mac 电脑，就先别急着单独安装 git。

Mac 电脑自带 Xcode 开发软件，Xcode 中有一款工具叫 Command Line Tools(Xcode 默认不带这个工具)。所以我们需要先安装 Xcode 的 Command Line Tools。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/terminal.png)

(在终端输入，记得 `--install` 前面要有空格)

```shell
> xcode-select —-install
```

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/xcode-select-install.png)

如何判断 Xcode 的 Command Line Tools 是否成功安装了呢？

在终端中再次输入 `xcode-select —-install`，如果出现以下信息，就表明你已经成功安装 Command Line Tools 了。

```shell
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```

Xcode 的 Command Line Tools 安装成功后，意味着 Git 也安装成功了。

检查 Git 是否安装成功，在终端输入 `git —-version`

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/git-check.png)

#### windows

下载 Git SCM，网址：[https://git-scm.com/download/win](https://git-scm.com/download/win)。若无法下载，也可以从网盘中[点击下载](http://pan.baidu.com/s/1boMJj7x)。

#### Linux

(在终端操作)

```shell
> sudo apt-get install git
```

#### 检查 git 的安装情况

安装成功后，在终端执行下面的指令，检查 git 是否安装成功。

(在终端操作)

```shell
// 查看 git 版本
> git --version

//或执行 git，将会看到一堆关于 git 的命令解释内容
> git
```

以上两个命令可以检查你的 git 是否安装成功。

如果提示 Command not found，说明 git 没有安装成功，需重新安装。

## 第一次上手

### 1. 第一次克隆一个项目到你的电脑上

(在终端操作)

```shell
// 创建一个工作用的文件夹，命名为 my_project（你可以命名成你喜欢的名字，这不过是一个文件夹的名字而已）
// 这样做的目的是把你从 git 上下载下来的项目都集中到文件夹 my_project 里，便于后面的管理
> mkdir my_project

// 进入文件夹 my_project
> cd my_project

// 开始克隆项目
> git clone https://github.com/xugy0926/getting-started-with-javascript.git
```

克隆成功后，在文件夹 my_project 下就会有一个项目文件夹 getting-started-with-javascript。

#### 注意

执行 git clone 的时候，请使用 https 的 url/链接，如下图所示。不建议用 ssh 的那个地址。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/https-clone-url.png)

如果你真的要用 ssh 那个 url，可能会出现下面的错误提示。

```shell
Warning: Permanently added the RSA host key for IP address '#{Some IP address}' to the list of known hosts.
```

这是因为你本地电脑没有和 github 建立安全的链接。使用 ssh 连接的配置步骤请参考：[https://help.github.com/articles/connecting-to-github-with-ssh/](https://help.github.com/articles/connecting-to-github-with-ssh/)

为什么选择 https  的url？=> 在以前 https 还没普及时，http 协议承担了大部分网页的数据传输。但 http 并不安全，为了解决 http 不安全的问题就需要用ssh。但是现在 https 已经普及了，而且 ssh 的配置相对来讲很麻烦，所以在使用 github 时可以抛弃掉。

### 2. 第一次改动

通过图形界面进入到 my_project 下的 getting-started-with-javascript 文件夹。

1. 你可以修改 getting-started-with-javascript 里面的文件。
1. 你也可以添加任意格式的图片或文件。

#### 【Tip: 如何通过终端快速打开当前文件夹的图形界面】

```shell
// Mac 终端快速打开 getting-started-with-javascript 文件夹
> cd getting-started-with-javascript

// 注意：open 后面先是一个空格，然后才是一个英文的点号.
> open .
```

```shell
// Windows 终端快速打开 getting-started-with-javascript 文件夹
> cd getting-started-with-javascript

> explorer .
```

#### 【Tip: 查看当前的完整路径】

在 Mac 终端输入 `pwd` 指令可以查看当前的完整路径，依据这个完整路径再通过 finder 找到你的文件夹。
Windows 终端输入 `cd` 指令即可。

### 3. 第一次查看你改动的文件

在终端中操作。

```shell
// 确保你当前的终端进入到了项目 getting-started-with-javascript 中
> cd getting-started-with-javascript

// 查看文件的变化状态
> git status
```

执行 git status 后，在终端会显示你改了哪些文件，改动过的文件名会显示为红色。（改动包含：增加文件、删除文件、修改文件）
如果红色的文件中，有一些不是你想要改的文件，而被不小心改动了，这时你就要注意咯。

撤销这种误操作的方法请参考：[https://github.com/xugy0926/getting-started-with-javascript/issues/150](https://github.com/xugy0926/getting-started-with-javascript/issues/150)

### 4. 第一次把改动在本地做一次提交

在终端中操作。

```shell
// 【注意】如果你执行 git status 之后，确认了所有被改动的文件都是你的确需要改动的，就执行这个，否则不要执行这一步。
// 添加所有修改过的文件，添加到哪？被自动添加到了你本地仓库的缓冲区域。
> git add -A

// 【注意】如果你改动了别人的文件，而你又不想恢复那个文件，那么只添加你改动的文件即可。
> git add your_file

// 把被添加的文件做本地提交
// -m 后面一定要带一段双引号的描述内容，这段描述你可以任意写，目的是说明你这次提交的日志信息。-m与双引号之间一定要有空格。
> git commit -m "代码提交的日志信息"
```

### 5. 第一次把提交到本地仓库的代码推送到远程（服务器）仓库

(在终端操作)

```shell
> git push origin master
```

【注意】

1. 因为getting-started-with-javascript.git 项目是我创建的，由于你默认没有修改的权限，所以按照上面的代码进行推送，就一定会失败。如果想推送成功，参考步骤6，在 github 上新建一个自己的项目，然后再参照上面的 1~5 步，执行对应的操作。

1. 第一次往自己的项目推送时，会提示输入 github 的账号和密码。你只要按照提示来操作即可。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/password-request.png)

```shell
// 设置你注册 github 的邮箱，注意 user.email 和后面双引号之间的空格
> git config --global user.email "you@example.com (mailto:you@example.com)"

// 设置你注册 github 的用户名，同样要注意 user.name 和后面双引号之间的空格
> git config --global user.name "your name"
```

设置完上面的信息之后，再执行 `git push origin master`。

### 6. 第一次在 github 上创建一个项目

进入 [https://github.com/](https://github.com/)，注册一个账号并登录，然后点击网页右上角的加号，在弹出的下拉列表中点击 `new repository`。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/new-repository.png)

项目创建以后，在自己的项目中 **参照性地** 重复步骤 1~5 的操作。（注意：很多同学在重复步骤 1~5 时，用的还是前面文档给出的 url。这是不对的，我是希望要让你用自己项目的 url 去执行 git clone，要注意区分 clone 的究竟是自己的项目还是我的项目。）

最终执行 `git push origin master` 后，提示信息显示 `Everything up-to-date`，就表示你的推送成功了。

## 结束语

如果前面的步骤你都走通了，说明你对于Git最基本的操作已经可以搞定了。

## 基本操作

- 从Github上克隆一个项目仓库到本地项目仓库：`git clone url`，注意，这里的 `url`，是指前面某处提到的 https 的 url，而不是让你输入 `url` 这三个字。
- 修改项目。
- 添加修改到本地仓库的缓存区域：`git add -A`。
- 把缓存区域的修改提交到本地仓库：`git commit -m "some logo"`。
- 将本地仓库的提交推送到远程仓库：`git push origin master`。

善用 Github 会对我们的学习和工作有很大帮助，除了学习编程之外，还可以把 Github 当做保存文档的远程硬盘，你不妨试试把自己的日记也放在 Github 上来存。注意，Github 上的项目默认都是公开的，所以如果不想让自己写的东西让他人看到，则不建议保存到 Github 的公开项目中。这里所说的把日记放到 Github 上来保存，是让大家感受一下它的特性。
