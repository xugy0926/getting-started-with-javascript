JavaScript编程入门_lesson7

网页地址: https://pingcha.github.io/words_collection/

项目地址：https://github.com/pingcha/words_collection

碰到的问题

创建好项目，打开本地制作的网页，发现心里话这里没有显示出来：
![Snip20170906_136](/Users/chenxiaoqing/Desktop/Snip20170906_136.png)
回去重新对照老师教材的代码，花了一天去对照代码都没想明白是怎么回事，然后我点看本地页面的检查，发现这里说Vue没有定义
![Snip20170906_137](/Users/chenxiaoqing/Desktop/Snip20170906_137.png)
我重新认真的回去看了老师教材Vue的定义：https://github.com/xugy0926/getting-started-with-javascript/blob/master/study/lesson7/github_index/easy_vue.html

找到了问题的所在：
![Snip20170906_138](/Users/chenxiaoqing/Desktop/Snip20170906_138.png)
前面学习了如何引入第三方模块并执行后产生全局对象的js文件，没有写到html文件里面，所以报错‘没有引入vue模块’。所以事实上是我对如何引入第三方库的概念不清，还一直以为问题是出在引用的函数名上，参考同学的作业然后一直不停修改，也还是搞不明白。

未解决的问题：

1.导出数据到json文件里面，发现data挤在一堆，易读性差也不美观，还好有老师的提点：在vscode中，快捷键 alt + shift + F ，一键格式化代码。

2.对于某些函数片段的理解还不够，周末要多花点功夫研究。

3.教材代码：

把含有“json”字符的文件名过滤出来(需要一一判断—要用到循环语句for)

        var jsonFilesList = [];
        for (var i = 0; i < files.length; i++) {
            if (files[i].slice(-5) === '.json') {
                jsonFilesList.push(files[i]);
            }
        }

try…catch捕获错误的方法，直接用了，还木有研究

    for (var i = 0; i < jsonFilesList.length; i++) {
            // 同步读取文件如果发生错误，用try...catch捕获该错误
            try {
                // 读取json文件内容（文件路径+文件名）,并存在jsonList数组内
                var contentJson = jsonfile.readFileSync(readDirPath + jsonFilesList[i]);
                jsonList.push(contentJson);
            }   catch (err) {
                // 如果读取错误就把错误的文件名写入到errorFiles数组内
                errorFiles.push(jsonFilesList[i]);
            }
        }

作业心得

1.看到同学作业做得又快又好，我要更加用心才行。

2.一碰到不懂，觉得难，在以前我是很容易放弃的，没有想到的是跟着老师的脚步一步步加深认识JavaScript后，越觉得是门很有趣的语言，作业因为之前搬家而耽误了一段时间，但是不会拖延着不做，反而做的时候挺带劲的，特别是做出来后，那种攻克后的小成就感，让心情特别好呢！虽然还做不到不借鉴同学作业独自想明白然后完成作业，不过，适时向高手请教，帮助你上手，才不至于死磕一个“难点”未果把耐心给磨没了，很可能会导致放弃。
