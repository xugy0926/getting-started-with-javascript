

# JavaScript第一次作业
## 前言
2017年8月8日徐高阳老师《JavaScript编程入门》第一次作业。

[TOC]

## 作业
1. 类比代码执行流程
2. 运行环境
3. V8引擎
4. 编译器/解释（执行）器 
5. 内置库
6. 第三方库
7. 学习JS的方向

## 解答
### 1. 类比代码执行流程
| 银行开户                                     | JS代码执行                                   |
| :--------------------------------------- | :--------------------------------------- |
| ![1银行开户](https://raw.githubusercontent.com/LydiaLing/MyPostImage/master/Js_Homework/Lesson1/1%E9%93%B6%E8%A1%8C%E5%BC%80%E6%88%B7.png) | ![2JS代码运行](https://github.com/LydiaLing/MyPostImage/blob/master/Js_Homework/Lesson1/2Js%E4%BB%A3%E7%A0%81%E6%89%A7%E8%A1%8C.png?raw=true) |
| **开户环境：**提供包含接受申请、检验申请单信息和核对资格的服务。<br>**内置服务：**为满足用户填写订单时提供的一组内部服务。<br>**核心：**涵盖预处理和执行。其中预处理执行开户前进行信息检查的处理过程；执行是执行开户操作的过程，操作完成后返回想要的开户结果。<br>**第三方服务：**围绕开户业务的第三方服务以满足用户需求 | **JS运行架构同银行开户过程完全相同：**<br>1 两类运行环境类比于普通用户和VIP用户环境；<br>2 V8引擎类比于业务核心；<br>3 两者都有内置服务，各自支撑业务需求。<br>4 围绕两个运行环境，有第三方库供调用。 |

### 2. 运行环境
JavaScript脚本的运行环境有两种：**浏览器环境**和**Node.js环境**。
|                 浏览器运行环境                  |               Node.js运行环境                |
| :--------------------------------------: | :--------------------------------------: |
| ![3浏览器的运行环境](https://github.com/LydiaLing/MyPostImage/blob/master/Js_Homework/Lesson1/3%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83.png?raw=true) | ![4Node的运行环境](https://github.com/LydiaLing/MyPostImage/blob/master/Js_Homework/Lesson1/4node%E7%9A%84%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83.png?raw=true) |
1. JavaScript被定义为浏览器的脚本语言，其[设计的初衷](https://mp.weixin.qq.com/s?__biz=MzAxOTc0NzExNg==&mid=2665513059&idx=1&sn=a2eaf97d9e3000d15a33681d1b720463#rd)是一些本来就应该在浏览器中完成的任务，做一些浏览器与用户的交互和一些网页的特效来补充HTML和CSS的不足。
2. node.js诞生于2009年，是使得JavaScript可以运行在服务器端的运行环境，用于方便地搭建响应速度快、易于拓展的网络应用。
### 3. V8引擎
JavaScript解析引擎就是能够“读懂”JavaScript代码，并准确地给出代码运行结果的一段程序。比方说，当你写了 $var a = 1 + 1; $这样一段代码，JavaScript引擎做的事情就是看懂（解析）你这段代码，并且将a的值变为2。[^1]
V8引擎是Google Chrome浏览器内置的JavaScript脚本引擎，其设计以高效地执行大型的JavaScript应用程序为目的。Chrome仅使用V8的API，其引擎的内核部分独立于浏览器之外。V8引擎用来编译和执行JavaScript源代码，其将JavaScript源代码直接编译成机器码运行。[^2]

### 4. 编译器/解释（执行）器
| 编译型语言                                    | 解释性语言                                    |
| :--------------------------------------- | :--------------------------------------- |
| ![5编译型语言](https://github.com/LydiaLing/MyPostImage/blob/master/Js_Homework/Lesson1/5%E7%BC%96%E8%AF%91%E5%9E%8B%E8%AF%AD%E8%A8%80.png?raw=true) | ![6解释性语言](https://github.com/LydiaLing/MyPostImage/blob/master/Js_Homework/Lesson1/6%E8%A7%A3%E9%87%8A%E6%80%A7%E8%AF%AD%E8%A8%80.png?raw=true) |
| 对于静态语言来说（如Java、C++、C），处理上述代码的叫编译器（Compiler）。<br>需要一个专门的编译过程，通过编译器编译成机器语言。 | 于JavaScript这样的动态语言则叫解释器（Interpreter）。<br>**解释器是直接解析并将代码运行结果输出**，边翻译边执行。 |

###5. 内置库
由两种运行环境提供的服务，用来实现代码功能。就像在中国用人民币，可以直接用。
[JS标准库的部分内置对象的常用属性和方法](https://segmentfault.com/a/1190000004954578)
###6. 第三方库
由第三方公司或个人提供一套接口，供开发者使用，以实现代码功能。就像是在中国用外币，需要兑换后使用。
###7. 学习JS的方向
做好笔记，做好课后补充，不怕丢脸多提问题，多操作时间，下足功夫，用心钻研，拥抱JS的美好。




[^1]: http://www.cnblogs.com/mrxiaohe/p/5072034.html

[^2]: http://www.nowamagic.net/librarys/veda/detail/1579




