### 碰到一个问题
#### 仓库同步时出错

根据《Git常用操作笔记》文档里面的提示操作，将自己的仓库可老师的同步。在执行：
```
git fetch upstream master
```

出现以下错误提示：
```
git fetch upstream master
fatal: unable to access 'https://github.com/xugy0926/getting-started-with-javascript.git/': Failed to connect to github.com port 1080: Operation timed out
 ✘ antarts@wukuipindeMacBook-Pro ⮀ ~/javascriptbridge/getting-started-with-javascript ⮀ ⭠ lesson3_homework_wukuipin ⮀ git remote -v
origin	git@github.com:antarts/getting-started-with-javascript.git (fetch)
origin	git@github.com:antarts/getting-started-with-javascript.git (push)
upstream	https://github.com/xugy0926/getting-started-with-javascript.git (fetch)
upstream	https://github.com/xugy0926/getting-started-with-javascript.git (push)
```

![](https://ws2.sinaimg.cn/large/006tKfTcgy1fimwfrlsrkj311d02mdg4.jpg)

#### 解决办法

1. 在终端执行：
>git remote rm upstream

2. 将 https:// 更换为 git@ ，同样终端执行：
>it remote add upstream git@github.com:xugy0926/getting-started-with-javascript.git

3. 然后再按照《Git常用操作笔记》往下操作即可。

这是我更换后，成功同步的画面：
![](https://ws4.sinaimg.cn/large/006tKfTcly1fimwo6byqxj315f0qz3zv.jpg)

#### 总结
对于出现这个问题的原因不是很了解，似乎是代理的问题。希望这能帮助到遇到同样问题的同学！
