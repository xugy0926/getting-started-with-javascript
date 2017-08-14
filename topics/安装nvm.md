## 开始

nvm全称是node version manager，中文意思是node版本管理。

在使用node时，不推荐直接安装node，先安装nvm，由nvm来安装node。有了nvm，我们可以安装多个node版本，然后自由地在

如果下面的nvm步骤实在装不了。那你就去[nodejs官网](https://nodejs.org/zh-cn/)直接安装node吧。选择最新版本v8.3.0。

## 安装NVM

#### Win安装NVM

[Windows下安装nvm、npm及node.js](https://segmentfault.com/a/1190000010596717)，这篇文档是何伟同学总结整理，如遇到问题可以再微信群里问他。

[网上另一篇总结文档](https://segmentfault.com/a/1190000007612011)

注意：如果nvm实在装不了。那你就去[nodejs官网](https://nodejs.org/zh-cn/)直接安装node吧。选择最新版本v8.3.0。

#### MAC安装NVM

注意：如果nvm实在装不了。那你就去[nodejs官网](https://nodejs.org/zh-cn/)直接安装node吧。选择最新版本v8.3.0。

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
> nvm —version
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
