# 第四课 关于函数与调用
[TOC]
## 函数有啥好的
同样是赋值语句的输出，有函数和没有函数的差异在哪？

我们看一个例子：

```
var startSoundOff = [1,2,3,4,5,6];
for (var i = 0;i < startSoundOff.length; i++){
	console.log(startSoundOff[i]);
	console.log(\n);
}
```

![函数与调用](http://ovdtbcicu.bkt.clouddn.com/函数与调用.png)

同样的，我们用函数实现这个过程：

```
function personA() {
	console.log(1);
}

function personB() {
	console.log(2);
}

function personC() {
	console.log(3);
}

function personD() {
	console.log(4);
}

function personE() {
	console.log(5);
}

function startSoundOff() {
	personA();
	personB();
	personC();
	personD();
	personE();
}

startSoundOff();

```

![函数与调用1](http://ovdtbcicu.bkt.clouddn.com/函数与调用1.png)

单纯来看，除了代码变长之外，没有任何改变，但是真的是这样吗？

>  现在假想一个情况出现了：**程序报错了，你该怎么办？**

对于第一段代码， for 语句循环，如果一处卡死就不执行。你不得不开始重新认真阅读你的每一个变量名、全半角符号以及判断语句，因为任何一种情况都可能出错。但是感谢现在的编辑器，报错提示会明确告诉你卡死在哪一步了，但是故障排除很困难，更可能的情况是，你修改了代码，信心满满的以为，自己的 bug 修复了。最后的结果残酷的告诉你，虽然你解决了一个旧错误，又产生了新错误。现在的代码只有三行，错了可以重新写。如果项目比较大，代码是三千行，你确定要重新写吗？

对于第二段代码，是不是每个数字输出的过程都被“分割”开了，也更容易能根据每个数字确定哪里出错了，更容易找到排出故障，正确的代码不会受到任何影响，你只需要维护和修订对应的“出错函数的区块”，是不是更方便了呢？

如果你是网站的协作者，哪个代码的再编译性、借鉴性更强呢？你会选择用谁的代码与你协作呢？

函数的除了能更快的查错以外，还有第二个特点：**调用更方便**。

同样是这两段代码，如果第一段代码在执行后的第 5000 行，我需要使用变量`startSoundOff`；

同样的情况，如果第二段代码在执行后的第 5000 行，我需要使用变量`startSoundOff`。

> 哪段代码的逻辑更容易出现问题 ？ 

其实使用函数的好处在于**分块**，一块一块的东西更容易去理解和消化，也更容易去维护。

## 函数自 high 玩法 —— 狠起来自己的脸都打

函数还能怎么玩？

先看看函数的结构吧

```
funcition 变量(){
        赋值语句&条件判断；
}
```

这里的条件判断可以是变量本身。坏处是，搞不好，变量调用自己，进入死循环，把自己崩溃掉，用自己高效的特点狠狠的打了自己的脸。

```
var person = 1;
function startSoundOff() {
    person = person + 1;
    console.log(person);
    startSoundOff(); 
    }
startSoundOff();
```

结果数据溢出了，因为执行完`console.log(person)`后，会直接输出一个数字，再循环执行`startSoundOff()`，重新进入函数体再 + 1  ，再输出一个数字，再循环执行`startSoundOff()`，最后从函数体中跳不出来，直到数据崩掉。

![数据溢出](http://ovdtbcicu.bkt.clouddn.com/数据溢出.png)

那怎么解决呢？让函数自己判断什么时候执行结束，用 if 语句就可以了！

```
var person = 1;
function startSoundOff() {
    
    person = person + 1;
    console.log(person);
    
    if (person < 100){
        startSoundOff(); 
    }
    
}
startSoundOff();
```

![避免数据溢出](http://ovdtbcicu.bkt.clouddn.com/避免数据溢出.png)

现在数据执行到第 100 个数字，就会停止执行啦。

## 函数高端玩法 —— 前后调用
创建一个工作流，让函数之间动起来

```
    function prepare(){
    console.log('磨刀--扫地--洗碗--劳动最光荣');
    
    return true;  // 返回一个值说明这件事已经干完了 
}

function buyfoods(){
    console.log('去买菜');

    var foodsList = ['egg','meat','tomato'];

    return foodsList;  // 买完菜交差
}

function cooking(foodsList){
    console.log('开始做菜');
    console.log(foodsList);

    var list = ['西红柿炒鸡蛋','红烧肉'];
    return list; // 炒完菜回来交差
}

function startWorkFlow(){

    var result = prepare();
        if (result) {
          // 如果 result =  prepare 为 true ，则执行。
        var foodsList2 = buyfoods();
        // 如果买完菜，把菜给 foodsList2 去处理
        var list = cooking(foodsList2);
        //  cooking是个函数，它处理的不一定是 foodsList 这个变量，也可以是foodsList2 这个变量
        console.log(list);
    }

}

startWorkFlow();

```

关键点我都写在注释了，但是最难理解的莫过于：

> cooking 是个函数，它处理的不一定是 foodsList 这个变量，也可以是foodsList2 这个变量。

我给你举个例子好了，还是做饭这件事，今天买的土豆和昨天买的土豆应该是不一样的，但是今天和昨天吃的菜都是炒土豆丝。我们的变量是土豆，而函数就是炒土豆丝的办法，**变量会变，但是对于确定的函数，计算的方法是不会变的。**


## vue 库

其实把各种库，当成别人写好的函数。无论是外部库还是内部的库，都是为了更好的输入、储存和处理。 vue 库也是这样的函数，用这样的函数有什么好处？

如果是赋值语句，一旦一个变量被赋值，这个变量就是确定的，除非你给它重新赋值。但是一个变量程序中又不是只被使用一次，意味着我们需要手动修改掉这个变量的所有值，还要改掉有冲突的值。能不能做到只改一个值，就能做到改掉赋值语句中所有的数值呢？

我以vue 库官方的例子来说吧

html 部分的修改

```
<script src="https://unpkg.com/vue"></script>

<div id="app">
  <p>{{ message }}</p>
</div>
```

JS 部分的修改

```
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
```

这里例子中，如果我在`JS 部分`修改`message: 'Hello Vue.js!'`，那么`html 部分`的所有含`message`的部分都会修改，那么这如果是新生大学的客户端呢？

我作为用户登陆，相当于给一个函数赋值 ，JS 读取这个值对不对，给出我们对应的 `message` ，你看看，是不是能写出和用户交互的动态网页了呢！当然，别着急，一段段的代码就是逐步成长的脚印。

现在看看这张图，恍然大悟！

![浏览器、服务器交互图](http://ovdtbcicu.bkt.clouddn.com/浏览器、服务器交互图.jpeg)


-------
小超哥  2017 年 8 月 31 日


