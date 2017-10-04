# Git常用操作笔记

**新人注意**：文章里的代码段，行首有大于号`>`的，是你要输入的命令。没有大于号的，就是执行命令后输出的结果。

## 提交本地更改

徐老师周五中午加餐，给大家讲解 Git 基本操作的涵义。借着这个机会，我也来说一下我对 `git add`、`git commit` 的理解吧。

### git add

这个命令存在的意义，是让我可以只提交（`commit`）一部分文件。为什么会有这样的需求？

举个例子，我想写个网站，那么一般都是一次写一个小功能，写完了再写下一个小功能。

假如我今天时间有限，但是客户又想看我完成了哪些工作。

注册功能我写完了，是文件 `a.js`；登录功能还没写完，是文件 `b.js`。

那么我就可以用 `git add a.js`，只将文件 `a.js` 加入暂存区。

然后执行 `git commit -m "update"`，将这个文件提交至本地仓库。

再用 `git push origin master`，将修改推送至服务器。

这样，客户就能够在网上看到我今天完成的注册功能了。

参考资料：

- [Git: add vs push vs commit](https://stackoverflow.com/questions/6143285/git-add-vs-push-vs-commit/)
- [When should I use git add?](https://stackoverflow.com/questions/3673537/when-should-i-use-git-add/)

### git commit

Git 的一大功能，就是可以将文件退回到某次 `commit` 之前的版本，也就是笑来老师说的时光机。

这个功能要怎么用呢？我们继续用上面的例子。

假设在编写注册功能的时候，我 `commit` 了两次：第一次只完成了基础的注册功能，第二次增加了对用户密码强度的检验。

但是客户在试用注册功能的时候，发现检验密码强度的功能有问题，需要暂时取消密码强度的检验，这个时候应该怎么做呢？

我就可以用 `git reset` 或者 `git revert` 命令，来撤销最近一次的 `commit`，并执行 `git push`。这样，网站就只有基础的注册功能，没有密码强度检验功能了。

参考资料：

- [How to undo the last commits in Git?](https://stackoverflow.com/questions/927358/how-to-undo-the-last-commits-in-git/)
- [Undoing Changes](https://www.atlassian.com/git/tutorials/undoing-changes/)

## 撤销本地更改

在不同的分支上做不同的工作，切换来切换去难免出错。即使只在一个分支上工作，也有可能犯错。有时候想要把本地 **尚未提交的更改** 撤销了，应该怎么做呢？跟我来。

本地的更改，分为三种类型：

1. 新建文件且未加入暂存区。
1. 修改现有文件且未加入暂存区。
1. 修改现有文件且已加入暂存区。

下面就分别讲一下这三种情况应当如何撤销更改。

### 新建文件且未加入暂存区

```shell
git clean -f
```

这个命令，会把所有新建且未加入暂存区的文件都删除（不包含文件夹），将项目还原到新建文件之前的状态。

```shell
git clean -f -n
```

加上 `-n` 命令，不会执行实际的删除操作，而是将执行 `git clean -f` 命令之后会删除的所有文件都列出来，让用户查看，以免误删文件。

```shell
git clean -f -d
```

加上 `-d` 命令，会把新建的文件和文件夹都删除。

### 修改现有文件且未加入暂存区

这个也很简单，一条命令就搞定。

```shell
> git checkout -- .
// 或者
> git checkout topics/git.md
```

注意，第二条命令中，对于需要撤销更改的文件，要输入其相对于当前路径的相对路径。

比如我要撤销根目录下的 `topics/git.md` 文件中的更改，如果当前路径在根目录，那么就执行 `git checkout topics/git.md`；而如果当前路径在 `~/topics` 中的话，就应该执行 `git checkout git.md`。

### 修改现有文件且已加入暂存区

```shell
git reset --hard
```

注意，这条命令所撤销的修改，不仅包括已加入暂存区的现有文件，也包括尚未加入暂存区的现有文件。

换句话说就是，只要是对现有文件进行了修改，这条命令就都会删除！

参考资料：

- [Various ways to remove local Git changes](https://stackoverflow.com/questions/22620393/various-ways-to-remove-local-git-changes)
- [How do I discard unstaged changes in Git?](https://stackoverflow.com/a/52713)：介绍了上面的两种撤销未加入暂存区的更改的方法。
- [Reset, Checkout, and Revert](https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting)，又是一篇 atlassian 上的文章！！！作为出品了 SourceTree 这款 Git GUI 应用的公司，写的 Git 方面的教程也是生动形象，干货满满。还没读过徐老师推荐的《Pro Git》，不过就我看过的 atlassian 关于 Git 系列的文章来说，质量都很高！强力推荐！

## 和老师的仓库保持同步

### 首次同步老师仓库的更改至本地

因为自己和老师的仓库都是一直在更新，所以每次提交前，需要先将自己的仓库（包括远程和本地）同步为老师仓库的最新状态，然后再提交自己的更改。

首先，添加老师的仓库，并命名为 `upstream`，方便以后再次调用。

```shell
> git remote add upstream https://github.com/xugy0926/getting-started-with-javascript.git
```

然后将老师仓库中的内容下载至本地。注意，下载至本地的老师的远程仓库内容，和自己的仓库是互不干扰的。

```shell
> git fetch upstream master
```

这时，徐老师仓库的最新内容已经下载至本地了。

我们先不急着合并进来，先看看自己的仓库和老师的仓库有哪些不同。

```shell
> git diff master upstream/master
```

下图是执行后的结果。

![](https://raw.githubusercontent.com/Dream4ever/Pics/master/git-diff-result.png)

注意，执行 `git diff` 后，终端会进入 `Vim` 环境，注意看图中最后一行行首的冒号。按一下 `q` 键，退出 `Vim` 环境。

对比完徐老师和自己仓库的不同之后，就要把这些内容（`upstream/master`，代表 `upstream` 这个源的 `master` 分支）合并到自己仓库的当前分支中了。

```shell
> git merge upstream/master
```

然后就可以提交自己的更改，或者进行其它操作了。

### 从老师的仓库持续更新

#### 对比本地仓库某分支和远程仓库某分支

每次准备提交自己的改动之前，先检查一下老师的仓库有没有更新是个好习惯。那么怎样能够知道老师的仓库有没有更新呢？

一条命令就够了。

```shell
> git diff upstream/master patch
<!-- 比较老师的远程仓库和本地的 patch 分支有什么不同 -->
diff --git a/.gitignore b/.gitignore
index 039c699..45e4005 100644
--- a/.gitignore
+++ b/.gitignore
@@ -3,4 +3,3 @@
 package-lock.json
 node_modules
 dist
-.vscode
\ No newline at end of file
diff --git a/homework/lesson3/fangqingyang.jpg b/homework/lesson3/fangqingyang.jpg
deleted file mode 100644
index edcfdca..0000000
Binary files a/homework/lesson3/fangqingyang.jpg and /dev/null differ
diff --git a/homework/lesson3/fangqingyang.md b/homework/lesson3/fangqingyang.md
deleted file mode 100644
index 78d0b6d..0000000
--- a/homework/lesson3/fangqingyang.md
+++ /dev/null
@@ -1,12 +0,0 @@
-## 第三节课总结
-
-函数是JS里面地位最高的语法，它也可以是对象。有了函数就可以模块化，就像搞大扫除
:
```

从上面的代码可以看出来，本地仓库和老师远程的仓库是不同的，那就得把本地的仓库更新了。

那如果本地仓库和老师仓库是一样新的，执行上面的命令会是什么结果呢？

```shell
> git checkout note
> git diff upstream/master note
(END)
```

看，如果和老师的仓库没有区别的话，执行 `git diff` 之后，只会显示 `(END)`，说明两者没有差异，就不用更新了。

对于需要更新的情况，有两种方式可以将远程仓库的更新合并至本地仓库。

#### 将远程仓库 merge 进本地仓库（推荐）

用这个方法，有可能需要处理出现的 merge 信息：`Merge remote-tracking branch 'upstream/master'`。

```shell
> git fetch upstream master
```

出现这个信息，是因为在上次提交之后，本地仓库和远程仓库各自有一些更新。而在将远程仓库合并至本地时，就需要有这样的 merge 信息，来说明这一操作。

#### 将远程仓库 rebase 并 merge 进本地仓（不推荐）

```shell
> git rebase -i upstream/master
<!-- 进入 vim 编辑器处理 commits，完成后保存退出 -->
> git merge upstream/master
```

上面的两行代码，先编辑本地仓库上的提交信息；在编辑完成后，将最后一次和远程仓库同步之后，所做的更改，全都加到远程仓库最新更改的前面，这样就会让整个更改历史看起来足够明确。

参考资料：

- [Merging vs. Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
- [compare local git branch with remote branch?](https://stackoverflow.com/a/1801150/2667665)

## 善用分支功能

### 新建功能分支，各自完成不同的需求

因为自己一边要做笔记，一边还想向徐老师的项目上提 PR。由于笔记还没写完，但是笔记已经有过多次 `commits` 了，所以在提 PR 的时候，不想把自己的笔记提交上去。

虽然可以通过 `git revert`或者 `git reset` 来撤销 `commit`，但是自己还想保持 `commit` 历史的完整性。

这个时候，就可以在自己的项目中新建一个分支 `work` 用来提交 PR，默认的分支 `master` 则用来做笔记，两边互不干扰，又能同时完成两项任务。

首先，将老师的仓库的最新版拉到本地（添加 `upstream` 源的操作请查看前面的内容，此处不再重复）。

```shell
> git fetch upstream master
```

用拉到本地的仓库新建一个隶属于自己项目的分支 `work`。

```shell
> git checkout -b work upstream/master
```

接着将 `91d4fce` 这次 `commit` 的内容（修改老师文章中文字错误和格式的操作）放入新增的 `work` 分支中。

```shell
> git cherry-pick 91d4fce
```

将本地分支 `work` 推送至服务器上，并指定 `origin` 为默认主机。完成之后，在网页端提交自己的 PR 即可。

```shell
> git push -u origin work
```

等到暂时没有 PR 需要提交了，并且自己的作业也写完的时候，就可以将先将 `work` 分支与徐老师最新的代码同步，然后再将 `work` 分支同步到 `master` 分支上就行了。

参考资料：

- [How to “pull request” a specific commit](https://stackoverflow.com/questions/34027850/how-to-pull-request-a-specific-commit/)
- [How to synchronize two branches in the same Git repository?](https://stackoverflow.com/questions/4010962/how-to-synchronize-two-branches-in-the-same-git-repository/)
- [Git远程操作详解](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)

### 同步某分支至本地

因为上面新建的 `work` 分支只在办公室的台式机上有，家里的笔记本上并没有这个分支。为了在家里也能够继续学习，就需要把这个分支同步到家里的电脑上。

最开始是用关键字 `git clone branch` 来查找方法的，试了一下之后发现这个关键字搜到的解决方法，只是把远程分支的文件下载到本机，本机并没有之前所建立的 `work` 分支，所以需要更换搜索关键字。

想到可以用 `git pull` 将代码更新至本地，尝试了一下，发现本地并没有将 `work` 分支同步下来。

于是又用 `how to pull new branch from remote` 作为关键字来 Google，参照着这篇教程 《[Syncing](https://www.atlassian.com/git/tutorials/syncing)》 操作，终于成功了。

先是将 `work` 分支拉至家里的笔记本上，这时候 `work` 还没有合并至本机的仓库中。这样可以避免操作错误，影响本机的仓库。

```shell
> git fetch origin work
```

接着再将 `work` 分支合并至本机的仓库之中。

```shell
> git merge origin/work
```

最后再切换一下分支，就可以在家里的笔记本上继续快乐地学习了~

```shell
> git checkout work
```

参考资料：

- [How to clone a single branch in git?](https://stackoverflow.com/questions/1778088/how-to-clone-a-single-branch-in-git)
- [Syncing](https://www.atlassian.com/git/tutorials/syncing)

### 删除无用分支

有时候，只是想新建一个分支，测试一下某个功能。测试完成之后，这个分支就用不到了，那就需要把这个分支删掉。

在 Google 中用关键字 `git remove branch` 搜一下，看到 StackOverflow 上就有一篇文章，很完整地列出了删除分支的方法：[How do I delete a Git branch both locally and remotely?](https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-both-locally-and-remotely/)

#### 同时删除本地和远程分支

`git push -d` 命令用于删除远程分支，`git branch -d` 命令则用于删除本地分支。

```shell
> git push -d origin test
> git branch -d test
```

#### 强制删除本地分支

有时候会提示本地分支无法删除，如果确定要执行删除操作的话，那我们就来个强制执行。

注意这里的 `-D` 是大写，编程输入代码时，大小写一定要看仔细。

```shell
> git branch -D work
```

参考资料：

- [How do I delete a Git branch both locally and remotely?](https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-both-locally-and-remotely/)

### 重命名分支并在其它机器上同步

在学习的过程中，觉得目前分支的使用方式还是不太好。于是打算改成在 `master` 分支上进行各种测试，`work` 分支重命名为 `note` 分支，专门用来提交每一节课的笔记。另外新建一个 `patch` 分支，用于修改老师仓库里文章中的错字、格式等等。

新建分支的方式前面已经说过了，那么重命名分支的需求应该如何实现呢？

用 `git rename branch` 为关键字进行搜索，看到第一个答案是 [How do I rename a local Git branch?](https://stackoverflow.com/questions/6591213/how-do-i-rename-a-local-git-branch/)，在问题里又提到了 [Rename master branch for both local and remote Git repositories](https://stackoverflow.com/questions/1526794/rename-master-branch-for-both-local-and-remote-git-repositories/) 这个回答，把最高票回答看了一遍，照着这个方法试试，先在办公室的台式机上进行测试。

#### 重命名本地分支

首先，重命名本地的 `work` 分支为 `note`。

```shell
> git branch -m work note
```

操作完成后，查看本地的分支列表，确认一下。

```shell
> git branch --list
* master
  patch
  note
```

上面是输出结果，可以看到本地分支里没有 `work`了，并且有 `note`，说明本地分支更新成功了。

#### 删除远程分支

然后删除远程的 `work` 分支，结果报错。

```shell
> git push remote :work
fatal: 'remote' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

看来这个方法不行，那就再看看刚才那个链接里其他人的回答，往下翻，第二个回答和第一个差不多，第三个有些不一样，把上面命令中的 `remote` 换成了 `origin`，来，试一试。

```shell
> git push origin :work
```

第一次执行失败，提示超时错误，说明输入的命令是对的，只是网络状态不太好。

```shell
fatal: unable to access 'https://github.com/Dream4ever/getting-started-with-javascript.git/': Failed to connect to github.com port 443: Timed out
```

再执行一次，这下成功了。

```shell
To https://github.com/Dream4ever/getting-started-with-javascript.git
 - [deleted]         work
```

#### 更新对应关系

这个时候，本地的分支由 `work` 变成了 `note`，远程分支 `work` 被删除了，那么本地的 `note` 分支对应远程的哪个分支呢？

我们先看看远程有哪些分支。

```shell
> git branch -r
  origin/HEAD -> origin/master
  origin/master
  origin/patch
  upstream/master
```

嗯，果然没有 `work` 分支了，`note` 分支还没有被推送，自然也没有。

接着再看看本地分支和远程分支之间的对应关系。

```shell
> git branch -vv
* master 79fb746 [origin/master] Merge remote-tracking branch 'upstream/master'
  patch  9320211 [origin/patch] Merge pull request #81 from WangZhong2014/master
  note  9320211 [origin/work: gone] Merge pull request #81 from WangZhong2014/master
```

从上面的输出结果里可以看到，本地和远程的 `master` 分支和 `patch` 分支是正常的对应关系。但是本地的 `note` 分支理应对应着远程的 `work` 分支，而远程的 `work` 分支又被删除了。所以，就需要把本地的 `note` 分支上传到远程，并让本地和远程的 `note` 分支相互对应。

我们先在本地切换至 `note` 分支。

```shell
> git checkout note
Switched to branch 'note'
Your branch is based on 'origin/work', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)
```

从上面的执行结果可以看出来，Git 提示本地的 `note` 分支是基于 `origin/work` 分支，但是远程的 `work` 分支已经不存在了，可以用 `git branch --set-upstream` 命令修复。但是我们是要将本地的 `note` 分支上传到远程并将两者关联，所以需要再执行下面的命令。

```shell
> git push --set-upstream origin note
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/Dream4ever/getting-started-with-javascript.git
 * [new branch]      note -> note
Branch note set up to track remote branch note from origin.
```

这时候再查看一下本地和远程分支的对应关系。

```shell
  master 79fb746 [origin/master] Merge remote-tracking branch 'upstream/master'
  patch  9320211 [origin/patch] Merge pull request #81 from WangZhong2014/master
* note   9320211 [origin/note] Merge pull request #81 from WangZhong2014/master
```

好了，这下在办公室的台式机上完成了分支的重命名工作。接下来，就要在家里的笔记本上更新分支。

#### 在另一台电脑上同步分支

首先，要清除另一台电脑上无效的对应关系。

```shell
> git fetch -p
From https://github.com/Dream4ever/getting-started-with-javascript
 x [deleted]         (none)     -> origin/work
```

然后，把新的 `note` 分支同步下来就可以了。

```shell
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

### 用一个分支完全覆盖另一个分支

下面的命令，将用 note 分支完全覆盖 master 分支。

```shell
> git checkout master
> git tag old-master-branch
> git reset --hard note
> git merge -m 'Merge -s our where _ours_ is the branch note' -s ours origin/note
> git push -f origin master
```

参考资料：

- [How do I 'overwrite', rather than 'merge', a branch on another branch in Git?](https://stackoverflow.com/a/9690693/2667665)

## 其它配置

### 让 Git 在终端里显示中文

对于非 ASCII 字符，Git 默认是以八进制形式显示的。

```shell
<!-- 八进制形式 -->
...270\215\346\224\276\345\274\203 lesson5 Wei.md"
```

通过执行下面的命令，可以让 Git 在终端中显示非 ASCII 原本的样子。

```shell
>  git config --global core.quotepath off
<!-- 可以正常显示了 -->
.../lesson5/小白JS入门不放弃 lesson5 Wei.md
```

参考资料：

- [How to make Git properly display UTF-8 encoded pathnames in the console window?](https://stackoverflow.com/a/22828826/2667665)
