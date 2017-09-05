---
2017-08-30 --create-by:zhanglina 补交第6次作业
---

- ##### 关于if(var)值的笔记

> ```javascript
> javascript是弱变量类型语言,通俗地就是没有数据类型。任意值都有逻辑值（真或假）：
> 非真值：null undefined '' 0 false
> 真值：任意对象、任意非0数字、任意非空字符串、true
> if(a){}表示如果a为真值就执行。
> ```

- ##### 作业部分代码提交

> ```javascript
> /*
>  * 作者：张丽娜
>  * 时间：2017-08-30
>  * 版本：version1
>  * 功能：异步方案:
>  * 1、扫描words-from-the-heart文件夹下的的所有内容
>  * 2、将其写入到指定路径的文件下
> */
>
> // 引入fs模块
> var fs = require('fs');
>
> // 定义要查询的目标文件夹
> var dirPathString = '/Users/zhanglina/ZLNdocument/my_project/words-from-the-heart';
>
> // -----------------------------------
> // 异步方案
>
> // 定义一个callback函数，用于接收读取文件夹内容后的结果
> function callback(err, files) {
>   if (err) {
>     console.log('读取文件失败');
>     return;
>   }
>
>   if (files.length > 0) {
>     console.log(files);
>   } else {
>     console.log('没有找到任何文件');
>   }
> }
>
> //定义一个变量，用于将读取到的文件存放在一个变量中
> var files = fs.readdirSync(dirPathString,callback);
> //定义一个写文件的路径
> var outputPathString = '/Users/zhanglina/Downloads/write.txt'
>
> // 定义一个callback函数，用于接收写文件的返回结果
> function callback(err) {
>   if (err) {
>     console.log('写文件失败');
>   } else {
>     console.log('写文件成功');
>   }
> }
>
> fs.writeFileSync(outputPathString,files,callback)
> ```
>
> ```javascript
> /*
>  * 作者：张丽娜
>  * 时间：2017-08-30
>  * 版本：version2
>  * 功能：同步方案:
>  * 1、扫描words-from-the-heart文件夹下的的所有内容
>  * 2、将其写入到指定路径的文件下
> */
>
>
> // 引入fs模块
> var fs = require('fs');
>
> // 定义要查询的目标文件夹
> var dirPathString = '/Users/zhanglina/ZLNdocument/my_project/words-from-the-heart';
>
>
> //定义一个变量，用于将读取到的文件存放在一个变量中
> var files = fs.readdirSync(dirPathString);
> //定义一个写文件的路径
> var outputPathString = '/Users/zhanglina/Downloads/write1.txt';
>
> fs.writeFileSync(outputPathString,files,callback);
> console.log(files);
> ```
>
> 