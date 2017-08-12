# Git常用操作笔记

## 为什么要先add再commit呢？

徐老师周五中午加餐，给大家讲解git基本操作的涵义。借着这个机会，我也来说一下我对git add、git commit的理解吧。

### git add

这个命令存在的意义，是让我可以只提交（commit）一部分文件。为什么会有这样的需求？

举个例子，我想写个网站，那么一般都是一次写一个小功能，写完了再写下一个小功能。

假如我今天时间有限，但是客户又想看我完成了哪些工作。

注册功能我写完了，是文件a.js；登录功能还没写完，是文件b.js。

那么我用git add a.js，将这个文件加入暂存区。

然后执行git commit -m "XXX"，将这个文件提交至本地仓库。

再用git push origin master，将修改推送至服务器。

这样，客户就能够在网上看到我今天完成的注册功能了。

参考资料：

- [Git: add vs push vs commit](https://stackoverflow.com/questions/6143285/git-add-vs-push-vs-commit/)
- [When should I use git add?](https://stackoverflow.com/questions/3673537/when-should-i-use-git-add/)

### git commit

git的一大功能，就是可以将文件退回到某次commit之前的版本，也就是笑来老师说的时光机。

这个功能要怎么用呢？我们继续用上面的例子。

假设在编写注册功能的时候，我commit了两次：第一次只完成了基础的注册功能，第二次增加了对用户密码强度的检验。

但是在我的客户试用注册功能的时候，发现检验密码强度的功能有问题，需要暂时取消密码强度的检验，这个时候应该怎么做呢？

我就可以用git reset或者git revert命令，来撤销最近一次的commit，并执行git push。这样，网站就只有基础的注册功能，没有密码强度检验功能了。

参考资料：

- [How to undo the last commits in Git?](https://stackoverflow.com/questions/927358/how-to-undo-the-last-commits-in-git/)
- [Undoing Changes](https://www.atlassian.com/git/tutorials/undoing-changes/)

## 如何利用好分支功能？

### 利用分支完成不同的需求

因为自己一边要写作业，一边还想向徐老师的项目上提PR，在提PR的时候，不想把自己的笔记提交上去。

但是在自己的项目里，已经commit到远程仓库上了，而且也不想通过git revert或者git reset来撤销commit。

这个时候，就可以新建一个分支work，用来提交PR；默认的分支master则用来写作业。

等到暂时没有PR需要提交的时候，并且自己的作业也写完了，这个时候就可以将先将work分支与徐老师最新的代码同步，然后再将work分支同步到master分支上，最后提交master分支的PR即可。

示例代码：

```git
git fetch all
git checkout -b work upstream/master
git cherry-pick 91d4fce
git push -u origin work
```

参考资料：

- [How to “pull request” a specific commit](https://stackoverflow.com/questions/34027850/how-to-pull-request-a-specific-commit/)
- [How to synchronize two branches in the same Git repository?](https://stackoverflow.com/questions/4010962/how-to-synchronize-two-branches-in-the-same-git-repository/)

### 同步某分支至本地

因为上面新建的work分支只在办公室的电脑上有，家里并没有这个分支，所以需要同步至本机。

最开始是用关键字`git clone branch`来查找方法的，试了一下之后发现这个关键字搜到的解决方法，只是把远程分支的文件下载到本机，本机并没有之前所建立的work分支。

想到可以用`git pull`将代码更新至本地，但是执行该命令之后发现本地并没有将work分支同步下来。

于是又用`how to pull new branch from remote`作为关键字来Google，参照着这篇教程[Syncing](https://www.atlassian.com/git/tutorials/syncing)操作，终于成功了。

先是用`git fetch origin work`命令，将work分支拉至本机，这时候work还没有合并至本机的项目仓库中。这样可以避免操作错误，影响本机的项目仓库。

接着再用`git merge origin/work`命令，将work分支合并至本机的项目仓库之中。

最后在再执行`git checkout work`，就可以在work分支中继续工作了~

参考资料：

- [How to clone a single branch in git?](https://stackoverflow.com/questions/1778088/how-to-clone-a-single-branch-in-git)
- [Syncing](https://www.atlassian.com/git/tutorials/syncing)

### 分支删除

#### 查看git文档，尝试同时删除本地和远程分支失败

```bash
git branch -Dr work
```

#### 删除本地分支

```bash
git branch -D work
```

#### 删除远程分支

```bash
git push origin :work
```

出现下面的提示文字不用担心，这只是在提醒本地分支被删除，但是远程的分支还保留着。

```bash
warning: deleting branch 'work' that has been merged to
         'refs/remotes/origin/work', but not yet merged to HEAD.
Deleted branch work (was dbfa635).
```

搜索关键字：

`remove remote branch remote-tracking branch not found`

参考文章：[git delete remote branch not working: branch not found](https://stackoverflow.com/questions/31403820/git-delete-remote-branch-not-working-branch-not-found/)
