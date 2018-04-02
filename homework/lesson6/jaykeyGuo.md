### 基础-第六课

```Javascript
//引入FileSystem
var fs = require('fs');
//定义读取路径
var dirPathString = '../../../words-from-the-heart/words';
//定义写出路径git revert HEAD
var filePathString = "../write_words_async.txt"
//定义写出回调函数
function callbackForWrite(err) {
  //检查
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
//定义读取路径
function callbackForRead(err, files){
  //检查读取路径
  if (err){
    console.log("读取文件失败");
    return;
  }

  if (files.length > 0) {
    //调用写入
    fs.writeFile(filePathString, files, callbackForWrite);
  } else {
    console.log("没有找到任何文件");
  }
}

fs.readdir(dirPathString, callbackForRead);
```

![mage-20180402102634](../../../var/folders/qx/m6xj9x1s02lbxjht9c3ljd500000gn/T/abnerworks.Typora/image-201804021026344.png)

今早收到的鼓励。

前两天在忙毕业论文的事情，这两天回归学习的主线，目标前端！

先回顾一下之前的内容：

对上述代码调用顺序的整理：

> 1. 引入 fs
> 2. 调用 fs.readdir
> 3. callbackForRead，读取对应的files
> 4. 调用 fs.writeFile
> 5. callbackForWrite

**这个部分还是有不少的疑惑，问题在于对应的fs的引入之后，写入和读取的调用顺序，我的理解是，先读取，后写入。**

------

小结：

做作业的时候，知道读取的函数能够遍历整个目录，于是就将对应的写入的部分放在读取的下级，在每一次读取的时候能够进行写入，引入的fs，不是很懂原理，单从结果来看达到了目的。

***留下的疑问，fs两个函数的嵌套是如何执行的？***
