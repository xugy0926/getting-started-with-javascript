## 开始

nvm全称是node version manager，中文意思是node版本管理。

在使用node时，不要直接安装node，先安装nvm，由nvm来安装node。

## 安装NVM

#### Win安装NVM

[请参考](https://segmentfault.com/a/1190000007612011)

##### 注意事项

1. 第一步中打开的Github上的nvm Windows版的下载链接，记得下载`nvm-setup.zip`这个安装版本的，教程上说了，但不够明确。

2. 不管安装的时候是否更改安装路径，都不会出现教程中所说的设置目录的`Set Node.js Symlink`这一步。

3. 如果更改了安装目录，比如我就把nvm的安装目录改到了`C:\Program Files\nvm`下，那么用命令`nm install latest`安装最新版node时，会提示没有访问node64.exe的权限（Win10系统，开启用户访问控制）。所以对于新手用户来说，全部按默认设置即可，一路下一步，安装好就行。

4. 安装好nvm之后，需要用命令`nvm install latest`安装Node.js和npm。安装完成之后，务必执行命令`nvm use 8.2.1`，让nvm使用指定版本的Node.js，这样才可以在命令行中执行`node`和`npm`相关的命令。如果不执行命令`nvm use 8.2.1`，是无法使用`node`和`npm`的。

#### MAC安装NVM

打开终端，输入
```
> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/nvm4.png)

和下图一样结果，说明你已经安装成功。

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/nvm5.png)

#### 验证安装

关掉终端，重新再打开终端。输入

```
> nvm --version
```

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/nvm1.png)

【注意】

如果你验证安装还是提示`nvm: command not found`，请按照下面的步骤来操作。

```
> touch ~/.bash_profile
> touch ~/.bashrc
> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

执行成功后，关掉终端开启终端，然后继续往下走。

#### 安装node

通过nvm安装node的v8.0.0版本

```
> nvm install v8.0.0
```

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/nvm2.png)

#### 执行node

在终端，输入node
```
> node
```

此时会直接进入到node的终端编辑模式。

在node的终端编辑模式下，输入一行代码
```
> console.log('hello, js')
```

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/nvm3.png)

你在node环境下运行的第一行代码就大功告成了。

#### 退出node编辑模式

快捷键：`ctl + c` 按两次
