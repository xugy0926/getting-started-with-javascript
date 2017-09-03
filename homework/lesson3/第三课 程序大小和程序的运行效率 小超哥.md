# 第三课 程序大小和程序的运行效率
 
[TOC]

这节课关于代码部分，想到之前玩的一款编程游戏对程序大小和程序的运行效率这件事，就拿出来聊一聊，也当作这节课的小结吧。
## 游戏介绍
**游戏** ：   Human  Resource Machine

![游戏 logo](http://is2.mzstatic.com/image/thumb/Purple49/v4/79/b2/ba/79b2ba86-20e2-385d-ed50-2d4afc0c24bf/source/75x75bb.png)

这款游戏更多像一个**伪代码**，去实现一些程序的需求，满足要求的程序就能过关，但在游戏中，有两个特殊条件，满足任何一个条件，这个关卡会达到一星，而分别满足两个条件，就能达到**两星**。

游戏的下载地址见文末。

## 游戏规则
这两个条件是：
> 1. 程序长度的最短；
> 2. 程序执行的步数最少。

![两星](http://ovdtbcicu.bkt.clouddn.com/两星.png)

## 第一颗星
我想说的就是这个游戏的 `第二关 繁忙的收发室` 的两星之旅：

你需要输出 10 个数字

> **要求1**: 不能使用超过三个命令
> **要求2**: 平均不超过25步

![IMG_0038](http://ovdtbcicu.bkt.clouddn.com/IMG_0038.png)

那我们有哪些代码呢？
![IMG_0040](http://ovdtbcicu.bkt.clouddn.com/IMG_0040.png)

inbox 就能输入，outbox 就能输出，jump 跳出循环，不能使用超过三个命令几乎很简单了：

```
-- //jump 返回的位置
- inbox
outbox - 
jump
```
![IMG_0041](http://ovdtbcicu.bkt.clouddn.com/IMG_0041.png)

但是我们算算第二个要求：

每执行一个数字，需要 `inbox -- outbox -- jump`，三步程序。10 个数字，10 ×  3步  = 30 步，虽然程序很短，但是根本做不到不超过 25 步。

## 第二颗星

10 个数字怎么做到步数最少？

每一个数字执行一个 `inbox -- outbox `，但并不`jump`，即不使用循环体，需要多少步？

10 × 2 步 = 20 步，已经能实现目标了。但是这样的程序长啥样

```
- inbox
outbox - 
- inbox
outbox - 
- inbox
 outbox - 
……
//一共有 10 个 inbox， 10 个 outbox

```
这样的程序难免有点无聊，而且易读性太差，能不能使用循环体，但是简化流程呢？

循环体的出现，使得代码的阅读次数在循环体每遍历一次，就多运行一次，换句话说，循环体内执行的程序次数越多，效率越高。

```
-- //jump 返回的位置
- inbox
outbox - 
- inbox
outbox - 
jump
```
![IMG_0042](http://ovdtbcicu.bkt.clouddn.com/IMG_0042.png)

如果代码变成这样，执行的次数会怎么样呢？

每执行 2 个数字，需要 `inbox -- outbox --inbox -- outbox -- jump`，五步程序，比之前执行 2 个数字，需要`inbox -- outbox -- jump -- inbox -- outbox -- jump` ，六步程序，少了一步。

对10 个数字而言，**(10 ÷ 2)  ×  5 步  = 25 步**[^1]，达成目标。
[^1]: 每执行 2 个数字需要 5 步，10 个数字，10 ÷ 2 ，循环 5 次，每次执行 5 步，一共执行 25 步。

## 类比：JS 课程中的绳子两头烧

绳子两头烧，就是拿第二颗星星的过程：

```
var myLikeColorsList = ['blue','green','black','white'];
```
定义变量：`myLikeColorsList`

```
for (var i = 0;i < myLikeColorsList.length; i++){
	console.log(myLikeColorsList[i]);
}
```

用一个变量直接输出，相当于分布执行**四种颜色**，需要运行四次。代码很简洁易懂，但是执行效率不够高。

```
for  (var i = 0 ,j=myLikeColorsList.length - 1; i < myLikeColorsList.length / 2;i++,j--){
	console.log(myLikeColorsList[i]);
	console.log(myLikeColorsList[j]);
}
	
console.log('\n');
```
用两个变量直接输出，每次分别两个量，四个数字，只需要循环两遍，代码看起来冗长，但是执行效率更高啊！


### 思考题

>  给一个变量
>`name`='zhangwuji','zhoumin','xiexun','zhangsanfeng','huangrong','zhoubotong';
>
>你能使用 **三个变量** 以及  **for 语句** 实现 **只循环两次** 就能获得`name`的 json 代码吗？试一试吧！


## 游戏下载

> 游戏的价格为 30 元，**苹果手机**[^2]想玩的可以点击:[下载地址](https://itunes.apple.com/cn/app/human-resource-machine/id1005098334?mt=8)


[^2]: 如果你的手机是安卓手机，请自行搜索「 Human  Resource Machine」或「人力资源公司」去下载。安卓的应用市场太多，而我没有安卓手机，不确定推荐的软件会不会恶意扣费。

-------
小超哥   2017 年 8 月 30 日




