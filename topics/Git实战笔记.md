# Git常用操作笔记

**新人注意**：以下出现的代码段，行首有大于号`>`，并且后跟空格再接着是代码的，是输入的命令。否则，就是执行命令后输出的结果。

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

## 和老师的仓库保持同步

因为自己和老师的仓库都是一直在更新，所以每次提交前，需要先将自己的仓库（包括远程和本地）同步为老师仓库的最新状态，然后再提交自己的更改。

首先，添加徐老师的仓库，并命名为upstream，方便以后再次调用。

```bash
> git remote add upstream https://github.com/xugy0926/getting-started-with-javascript.git
```

然后将老师的仓库中的内容下载至本地。注意，下载至本地的内容，和自己的仓库是互不干扰的。

```bash
> git fetch upstream master
```

这时，徐老师仓库的最新内容已经下载至本地了。

我们先不急着合并进来，先看看自己的仓库和老师的仓库有哪些不同。

```bash
> git diff upstream/master
```

下图是执行后的结果。

![](https://github.com/Dream4ever/Pics/blob/master/git-diff-result.png)

注意，执行`git diff`后，终端会进入vim环境，注意看图中最后一行行首的冒号。按一下`q`键，退出vim环境即可。

对比完徐老师和自己仓库的不同之后，就要把这些内容（upstream/master，代表upstream这个源的master分支）合并到自己的仓库中了。

```bash
> git merge upstream/master
```

然后就可以提交自己的更改，或者进行其它操作了。

## 善用分支功能

### 新建功能分支，各自完成不同的需求

因为自己一边要做笔记，一边还想向徐老师的项目上提PR。由于笔记还没写完，但是笔记已经有过多次commits了，所以在提PR的时候，不想把自己的笔记提交上去。

虽然可以通过git revert或者git reset来撤销commit，但是自己还想保持commit历史的完整性。

这个时候，就可以从徐老师的仓库上新建一个分支work用来提交PR，默认的分支master则用来做笔记，两边互不干扰，又能同时完成两项任务。

首先，将老师的仓库的最新版拉到本地（添加upstream源的操作请查看上一小节的内容，此处不再重复）。

```bash
> git fetch upstream master
```

用拉到本地的仓库新建一个隶属于自己仓库的分支work。

```bash
> git checkout -b work upstream/master
```

将91d4fce这次commit（修改老师文章中文字错误和格式的操作）放入新增的work分支中。

```bash
> git cherry-pick 91d4fce
```

将本地分支work推送至服务器上，并指定origin为默认主机。完成之后，在网页端提交自己的PR即可。

```bash
> git push -u origin work
```

等到暂时没有PR需要提交了，并且自己的作业也写完的时候，就可以将先将work分支与徐老师最新的代码同步，然后再将work分支同步到master分支上就行了。

参考资料：

- [How to “pull request” a specific commit](https://stackoverflow.com/questions/34027850/how-to-pull-request-a-specific-commit/)
- [How to synchronize two branches in the same Git repository?](https://stackoverflow.com/questions/4010962/how-to-synchronize-two-branches-in-the-same-git-repository/)
- [Git远程操作详解](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)

### 同步某分支至本地

因为上面新建的work分支只在办公室的台式机上有，家里的笔记本上并没有这个分支。为了在家里也能够继续学习，就需要把这个分支同步到家里的电脑上。

最开始是用关键字`git clone branch`来查找方法的，试了一下之后发现这个关键字搜到的解决方法，只是把远程分支的文件下载到本机，本机并没有之前所建立的work分支，所以需要更换搜索关键字。

想到可以用`git pull`将代码更新至本地，尝试了一下，发现本地并没有将work分支同步下来。

于是又用`how to pull new branch from remote`作为关键字来Google，参照着这篇教程[Syncing](https://www.atlassian.com/git/tutorials/syncing)操作，终于成功了。

先是将work分支拉至家里的笔记本上，这时候work还没有合并至本机的仓库中。这样可以避免操作错误，影响本机的仓库。

```bash
> git fetch origin work
```

接着再将work分支合并至本机的仓库之中。

```bash
> git merge origin/work
```

最后再切换一下分支，就可以在家里的笔记本上继续快乐地学习了~

```bash
> git checkout work
```

参考资料：

- [How to clone a single branch in git?](https://stackoverflow.com/questions/1778088/how-to-clone-a-single-branch-in-git)
- [Syncing](https://www.atlassian.com/git/tutorials/syncing)

### 删除无用分支

有时候，只是想新建一个分支，测试一下某个功能。测试完成之后，这个分支就用不到了，那就需要把这个分支删掉。

在Google中用关键字`git remove branch`搜一下，看到StackOverflow上就有一篇文章，很完整地列出了删除分支的方法：[How do I delete a Git branch both locally and remotely?](https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-both-locally-and-remotely/)。

#### 同时删除本地和远程分支

`git push -d`命令用于删除远程分支，`git branch -d`命令则用于删除本地分支。

```bash
> git push -d origin test
> git branch -d test
```

#### 强制删除本地分支

有时候会提示本地分支无法删除，如果确定要执行删除操作的话，那我们就来个强制执行。

注意这里的`-D`是大写，编程输入代码时，大小写一定要看仔细。

```bash
> git branch -D work
```

参考资料：

- [How do I delete a Git branch both locally and remotely?](https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-both-locally-and-remotely/)

### 重命名分支并在其它机器上同步

在学习的过程中，觉得目前分支的使用方式还是不太好。于是打算改成在master分支上进行各种测试，work分支重命名为note分支，专门用来提交每一节课的笔记。另外新建一个patch分支，用于修改老师仓库里文章中的错字、格式等等。

新建分支的方式前面已经说过了，那么重命名分支的需求应该如何实现呢？

用`git rename branch`为关键字进行搜索，看到第一个答案是[How do I rename a local Git branch?](https://stackoverflow.com/questions/6591213/how-do-i-rename-a-local-git-branch/)，在问题里又提到了[Rename master branch for both local and remote Git repositories](https://stackoverflow.com/questions/1526794/rename-master-branch-for-both-local-and-remote-git-repositories/)这个回答，把最高票回答看了一遍，准备照着这个方法试试，先在办公室的台式机上进行测试。

#### 重命名本地分支

首先，重命名本地的work分支为note。

```bash
> git branch -m work note
```

操作完成后，查看本地的分支列表，确认一下。

```bash
> git branch --list
* master
  patch
  note
```

上面是输出结果，可以看到本地分支里没有work了，并且有note，说明本地分支更新成功了。

#### 删除远程分支

然后删除远程的work分支，结果报错。

```bash
> git push remote :work
fatal: 'remote' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

看来这个方法不行，那就再看看刚才那个链接里其他人的回答，往下翻，第二个回答和第一个差不多，第三个有些不一样，把上面命令中的remote换成了origin，来，试一试。

```bash
> git push origin :work
```

第一次执行失败，提示超时错误，说明输入的命令是对的，只是网络状态不太好。

```bash
fatal: unable to access 'https://github.com/Dream4ever/getting-started-with-javascript.git/': Failed to connect to github.com port 443: Timed out
```

再执行一次，这下成功了。

```bash
To https://github.com/Dream4ever/getting-started-with-javascript.git
 - [deleted]         work
```

#### 更新对应关系

这个时候，本地的分支由work变成了note，远程分支work被删除了，那么本地的note分支对应远程的哪个分支呢？

我们先看看远程有哪些分支。

```bash
> git branch -r
  origin/HEAD -> origin/master
  origin/master
  origin/patch
  upstream/master
```

嗯，果然没有work分支了，note分支还没有被推送，自然也没有。

接着再看看本地分支和远程分支之间的对应关系。

```bash
> git branch -vv
* master 79fb746 [origin/master] Merge remote-tracking branch 'upstream/master'
  patch  9320211 [origin/patch] Merge pull request #81 from WangZhong2014/master
  note  9320211 [origin/work: gone] Merge pull request #81 from WangZhong2014/master
```

从上面的输出结果里可以看到，match分支和patch分支是正常的对应关系。但是本地的note分支理应对应着远程的work分支，但是远程的work分支又被删除了。所以，就需要把本地的note分支上传到远程，并让本地和远程的note分支相互对应。

我们先在本地切换至note分支。

```bash
> git checkout note
Switched to branch 'note'
Your branch is based on 'origin/work', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)
```

从上面的执行结果可以看出来，git提示本地的note分支是基于origin/work分支，但是远程的work分支已经不存在了，可以用`git branch --set-upstream`命令修复。但是我们是要将本地的note分支上传到远程并将两者关联，所以需要再执行下面的命令。

```bash
> git push --set-upstream origin note
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/Dream4ever/getting-started-with-javascript.git
 * [new branch]      note -> note
Branch note set up to track remote branch note from origin.
```

这时候再查看一下本地和远程分支的对应关系。

```bash
  master 79fb746 [origin/master] Merge remote-tracking branch 'upstream/master'
  patch  9320211 [origin/patch] Merge pull request #81 from WangZhong2014/master
* note   9320211 [origin/note] Merge pull request #81 from WangZhong2014/master
```

好了，这下在办公室的台式机上完成了分支的重命名工作。接下来，就要在家里的笔记本上更新分支。

#### 在另一台电脑上同步分支

首先，要清除另一台电脑上无效的对应关系。

```bash
> git fetch -p
From https://github.com/Dream4ever/getting-started-with-javascript
 x [deleted]         (none)     -> origin/work
```

然后，把新的note分支同步下来就可以了。

```bash
> git fetch origin note
From https://github.com/Dream4ever/getting-started-with-javascript
 * branch            note       -> FETCH_HEAD
> git checkout -b note origin/note
Branch note set up to track remote branch note from origin.
Switched to a new branch 'note'
```

好了，终于大功告成了！哈哈哈哈。

参考资料：

- [Rename master branch for both local and remote Git repositories](https://stackoverflow.com/questions/1526794/rename-master-branch-for-both-local-and-remote-git-repositories/)
- [How to prune local tracking branches that do not exist on remote anymore](https://stackoverflow.com/questions/13064613/how-to-prune-local-tracking-branches-that-do-not-exist-on-remote-anymore/)
- [Remove local branches no longer on remote](https://stackoverflow.com/questions/7726949/remove-local-branches-no-longer-on-remote/)
