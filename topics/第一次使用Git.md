## 使用说明

编程小白在进行操作之前请注意三点。

1. 文档中的指令前面都有一个>符号

```
> git push origin master
```

`>` 符号是从文档层面告诉你`git push origin master`是一条终端的指令。
你在终端输入`git push origin master`时，别带`>`。

指令和代码的对比如下

```
//这是一条终端执行，用`>`来凸显这是一条指令
> git push origin master

// 这是一行代码，不带`>`
var i = 0;
```

2. 指令的构成，该空格的要空格。

```
// 错误
> xcode-select—install // select后面没有空格

// 正确
> xcode-select —install // select后面有空格
```

3. 双引号要用英文

```
// 错误
> git commit -m “这是一次提交” // 用了中文的引号”“

// 正确
> git commit -m "这是一次提交" // 要用英文""
```

4. 终端常用指令总结

[mac终端](https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/MAC-Terminal-command-list.md)
[win终端](https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/Win-Command-list.md)

## 开始

Git 是目前世界上被最广泛使用的现代软件版本管理系统。Github是目前世界上最大的开源社区，如果你想利用好Github，Git是你必须要掌握的工具。

[git简易指南](http://rogerdudler.github.io/git-guide/index.zh.html)，这个教程很简单，快速帮你了解git，13页PPT形式的内容就说明了git最基本的操作精华。

[Pro git](http://iissnan.com/progit/)

## 第一次安装 Git

#### Mac

你既然是mac电脑，别急于单独安装git。

Mac电脑自带Xcode开发软件，Xcode有一款工具叫Command Line Tools(Xcode默认不带这个工具)。所以我们先安装Xcode的Command Line Tools即可。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/terminal.png)

(在终端操作)

```
> xcode-select —install
```

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/xcode-select-install.png)

如何判断xcode的Command Line Tools呢？
在终端再次输入`xcode-select —install`， 如果终端出现以下信息表明你已经安装完Command Line Tools了。
```
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```

Xcode的Command Line Tools安装成功后，Git也意味着安装成功了。

检查Git命令是否成功，在终端输入`git —version`

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/git-check.png)

#### windows

下载 Git SCM, https://git-scm.com/download/win

#### Linux

(在终端操作)

```
> sudo apt-get install git
```

#### 检查git的安装情况

安装成功后，在终端执行下面指令检查git的安装状态。

(在终端操作)

```
// 查看git版本
> git --version

//或执行git，你会看到一堆关于git的命令解释内容
> git
```

以上两个命令可以检查你的git是否安装成功。

如果提示Command not found，说明git没有安装成功。

## 第一次上手

#### 1. 第一次克隆一个项目到你的电脑上

(在终端操作)

```
// 创建一个工作用的文件夹，命名为my_project（你可以命名成你喜欢的名字，这不过是一个文件夹的名字而已）。
// 这样做的目的是把你从git上下载下来的项目都规整到文件夹my_project里。
> mkdir my_project

// 进入文件夹my_project
> cd my_project

// 开始克隆项目
> git clone https://github.com/xugy0926/getting-started-with-javascript.git
```

克隆成功后，在文件夹my_project下就会有一个项目文件夹getting-started-with-javascript。

【注意】

git clone的时候请使用https的url。不建议用ssh那个地址。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/https-clone-url.png)

如果你真的要用ssh那个url，可能会出现下面的错误提示。

```
Warning: Permanently added the RSA host key for IP address '#{Some IP address}' to the list of known hosts.
```

这是因为你本地电脑没有和github建立安全的链接。使用ssh连接配置请参考https://help.github.com/articles/connecting-to-github-with-ssh/


为什么选择https的url？=> 在以前https还没普及时，http协议承担了大部分网页的数据传输。但http并不安全，为了解决http不安全的问题就需要用ssh。现在https已经普及了。ssh的配置相对来讲很麻烦，在使用github时可以抛弃掉。


#### 2. 第一次改动

通过图形界面进入到my_project下的getting-started-with-javascript文件夹。

1. 你可以修改getting-started-with-javascript里面的文件。
2. 你也可以添加任意格式的图片或文件。

[Tip: 如何在终端快速打开当前文件夹图形界面]

```
// mac终端快速打开getting-started-with-javascript
> cd getting-started-with-javascript

// 注意open后面是空格，还有一个.
> open .
```

```
// windows终端快速打开getting-started-with-javascript
> cd getting-started-with-javascript


> explorer .
```

[Tip: 查看当前的全路径]

在Mac终端输入pwd指令可以查看当前的全路径，依据这个全路径再通过finder找到你的文件夹。
Windows终端输入cd指令即可。

#### 3. 第一次查看你改动的文件

(在终端操作)

```
// 确保你当前的终端进入到了项目getting-started-with-javascript
> cd getting-started-with-javascript

// 查看文件的变化状态
> git status
```

#### 4. 第一次把改动在本地做一次提交

(在终端操作)

```
// 把修改过的文件做全部的添加
> git add -A

// 把被添加的文件做本地提交
> git commit -m "代码提交的日志信息"

// -m 后面一定要带一段双引号的描述内容。这段描述你可以任意写，目的是说明你这次提交的日志信息。
```

#### 5. 第一次把提交到本地仓库的代码推送到远程（服务器）仓库

(在终端操作)

```
> git push origin master
```

【注意】
1. 因为getting-started-with-javascript.git项目是我的，所以你推送一定会失败。如果你想推送成功，你可以参考步骤6，尝试在github上自己新建一个项目来试验上面的动作。

2. 第一次往自己的项目推送时，会提示输入github的账号和密码。你只要按照提示来操作即可。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/password-request.png)

```
// 设置你注册的github的邮箱
> git config --global user.email "you@example.com (mailto:you@example.com)"

// 设置你注册的github的用户名
> git config —global user.name "your name"
```

设置完上面后，再进行`git push origin master`。

#### 6. 第一次在github上创建一个项目

进入github.com，点击[new repository]。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/new-repository.png)

项目创建以后，你可以用你自己的项目重复步骤1-5的操作。（注意：很多同学在重复步骤1-5的时候，还是用的文档的url，我是希望你用你自己的项目url去git clone）

最终进行`git push origin master`后，提示信息显示`Everything up-to-date`。就表示你的推送成功了。

## 结束语

如果前面的步骤你都走通了，说明你对于Git最基本的操作已经可以搞定了。

#### 基本操作

- 从Github上克隆一个项目仓库到本地项目仓库。 `git clone url`
- 修改项目。
- 添加修改到本地仓库的缓存区域。`git add -A`
- 把缓存区域的修改提交到本地仓库。`git commit -m "some logo"`
- 将本地仓库的提交推送到到远程仓库。 `git push origin master`

善用Github对我们学习和工作非常有用，除了学习编程之外，还可以把Github当做存文档的远程硬盘，你不妨试试把自己的日记也放在Github上来存。

