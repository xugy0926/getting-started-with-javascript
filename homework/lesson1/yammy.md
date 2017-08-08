# 第一节 JavaScript 课程总结
今晚在新大学了第一节 JavaScript 课程，以下是课程总结：

1. 类比代码执行流程

徐老师开场用一个银行开户的流程来类比代码的执行流程。

首先，我们知道，开户的大致流程可以分成三个部分：

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-538DBBA6-CAEF-497A-81FE-6EF42874AB76.png)

其中有两个角色，一个是开户人，一个是银行工作人员，图解就是：

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-217BBF8C-E648-4D30-A0C5-F3F28EC48A00.png)

这个流程改进一下，就是分工明细，图解：

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-C5DF1915-72F5-4C10-A4AB-196E4D3B9541.png)

接来下，本着客户是上帝的责任心（并没有），银行还可以优化客户的流程，跑来跑去也挺累的，跑腿的活交给工作人员吧。

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-1058858C-65AA-4255-A7FE-195CD844C4DB.png)

其实管他工作人员是谁，只要有人为客户服务就好，给我们一个窗口，我们客户只需要坐着填表和检查核对信息就好了。

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-207C20AF-BD02-43CE-9F2E-2A4CC1A40ABB.png)

是不是还有优化的余地呢？复印查询这样的活儿有人帮忙做就好了。

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-50D35F8E-356A-41A3-90E1-091FA5428D16.png)

最后抽象一下流程，图解：

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-A033A377-CAB9-489F-8B61-D01CB4EA4008.png)

代码的执行过程也是类似的流程，比如 JavaScript。

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-C41FEF52-AA4E-4A56-A1D1-59CB1704CDE7.png)

虽然我之前学过 一点 ruby 和 python，通过这样类比的方式，更加加深了我对代码执行的流程的理解。

2. 运行环境

JS 运行的环境有两种，一种是浏览器运行环境，一种是 node 运行环境。

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-1E381F97-34BB-430F-BC00-1B819DA73C27.png)

这是两种不同的运行环境，就像小盆友和成年人的生长环境不一样是一个道理。

举例来说，浏览器的运行环境可以运行 `alert("hello");`，浏览器执行这段代码会弹窗一个 hello 的警告。

3. V8引擎

V8引擎是 JS 运行环境中的一个重要组成部分，是由Google开发的开源JavaScript引擎，用于Google Chrome中，专门处理JavaScript脚本。

除此引擎外，不同的浏览器都有自己的 JS 引擎，比如Safari的JavaScriptCore引擎，Firefox的SpiderMonkey引擎等。

4. 编译器/解释（执行）器

编译器和执行器是编译性语言的重要组成部分，这种类型的语言先用编译器编译写好的代码，然后用执行器来执行编译好的代码，特点是运行速度快，但开发效率低下，典型的代表是 C 和 C++等，这种语言是机器友好型语言，但对人类不友好。

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-D9D0EAAC-7872-448D-A372-19BF23079983.png)

编译器和解释器，在解释性语言中的作用是一边编译代码一边翻译代码，最后交给机器去执行，特点是开发速度快，但运行效率低，典型的代码是 Python、Ruby 和 JS。这种语言是高级语言，对人类友好。

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-82CB61B0-873D-4373-946E-674AD94E83DC.png)

5. 内置库

内置库是 JS 内置的一些库，可以直接拿来调用。

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-EECE6E12-93CB-4F65-B198-5B04B7BCE3DF.png)


6. 第三方库

第三方库不同于内置库，需要require 才能从外部调用。

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-EECE6E12-93CB-4F65-B198-5B04B7BCE3DF.png)

7. 学习JS的方向

学习 JS 最好最快的方法是去不断的使用他，让他帮你实现你的想法，解决你的问题，服务你的业务。

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-C92092ED-7D5D-41DD-AA7B-2933E01F11F7.png)

![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-E702EF21-9151-4C53-9DE8-267C32F7AB60.png)


![](http://okr0iw9h2.bkt.clouddn.com/2017-08-08-B9F1BC06-DE2B-41C7-80DB-5CE68F869343.png)
