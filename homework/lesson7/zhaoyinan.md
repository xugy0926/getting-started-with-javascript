赵一楠第7次课作业：

1、准备
写作业之前，把自己比较模糊的概念整理了一便：
jsonfile是个什么鬼？它是nodeJS运行环境中的第3方库，跟据github相关页面上的介绍“Easy write read/write json files”，可以了解到它简化了json文件的内容读取和写入的复杂、繁琐流程。

2、作业
课上老师并没有靠诉我们如何调用jsonfile的API，而只是教了如何引入jsonfile，不过学了这么多节课，这点自学能力应该是有的，打开github中jsonfile的页面，所有API都写的清清楚楚。

把老师在作业描述中的相关说明进行整理：
A. 使用filejson这个库，把同学们的json文件汇总到一个json文件中。
 1）先扫出所有的文件名。
 2）过滤掉非json的名字，得出一个结果全部是json的文件名。
 3）利用jsonfile的方法循环读取内容到一个json的数组变量中。
 4）将内容写入到一个json文件中。
B. 用vue实现一个html，把json文件的内容展示出来。
 1）把最终得到的json文件的内容反映到html上，请参考github_index/index.html
 2）修饰一下你的html效果。
 3） 部署到你github项目的页面上。

按照上述步骤一步一步的实施，经过多番调试，终于成功，最终创建的人个页面的网址如下：

https://zhaoyn7.github.io/My-first-webpage/