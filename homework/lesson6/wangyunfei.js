// lesson 6 作业，整理“同学们的心里话”   ---王云飞  

// 按着老师的作业思路，方案有两个，一个是同步的方案，一个是异步的方案。

// 同步方案

var fs =require('fs');

var dirPathString='C:/Users/Administrator/my_project/words-from-the-heart';

var outputPathString='C:/Users/Administrator/desktop/zy5.txt';

var fileCount=fs.readdirSync(dirPathString)   

//console.log(fileCount);

fs.writeFileSync(outputPathString,fileCount);

// 先说说，同步方案，剔除掉 “打印日志”，一共5行代码，5行语句，从第一行，到第五行，按顺序执行。

//一、首先说说 "var fs=require('fs)",这是一个什么鬼东西。
//    require('fs')的意思就是：“调出 “fs”模块这个功能, var fs 意思是用 fs 来作为他们的“代号”。 
//    "fs"是什么？ fs 就是一个功能模块，它提供了文件的读取、写入、更名、删除、遍历目录等功能。并被封装在Node.js 文件系统中。

//二、值得注意的是：fs 模块中提供了“异步”和“同步“两个版本。
//    例如：读取目录：异步函数形式为：fs.readdir() ，同步为 fs.readdirSync()。

//三、fs 同步函数中，fs.writeFileSync(),括弧中，必须包含两个参数，一个是“待写入的文件名” 另一个是“内容”。
//     翻译一下：fs.writeFileSync(filename,date). filename,date必须是要是真是存在的 “实参” ，否则操作无效。



// 废话不多说，直接上 “异步方案”

var fs =require('fs');

var dirPathString='C:/Users/Administrator/my_project/words-from-the-heart'

var outputPathString='C:/Users/Administrator/desktop/zy3.txt';

function readcallback(err,files){
    if(err){
        console.log('读取文件失败');
        return;
    }
    if(files.length>0){
        fs.writeFile(outputPathString,files,writecallback);
    } else{
        console.log('没有找到任何文件');
    }
}
function writecallback(err){
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
}
fs.readdir(dirPathString,readcallback); 

// 一、如果你是小白，你一定感觉这个异步案例很烧脑，恭喜你，你的感觉是对的。因为，我的感觉跟你是一样的。
//      烧脑怎么破，听我慢慢道来。

// 二、 首先，有几个点，我们必须搞清楚，本文中谁是 “fs” 异步函数，谁又是普通的异步函数，否则，就没法混了。
//     谁是fs异步函数呢，当然是 fs.readdir(..); ,fs.writeFile(...),因为他俩都前缀了“fs”。
//     那谁有是普通函数呢? 当然是： readcallback(err,files) 和writecallback(err)。 为什么呢，因为地球人都知道，如果你不知道，我有理由怀疑你是火星人。

// 三、整个异步方案就是围绕这4个函数，调来调去。这里最关键的一点就是最后一个语句：“fs.readdir(dirPathString,readcallback); ”
//    正是因为这个语句，整个方案才开始动起来，你的计算机“内存”才开始真正”干活“。 一开始的那些语句别看都在前面，其实都被挂了起来，并没有动起来。
//    计算机最后一榔头干的活，则是打印writecallback(err)中的一个日志。

// 四、fs.feaddir（dirPathString,readcallback); 正是这个函数的调用，瞬间激发了readcallback(...)函数。、
//    fs.readdir(dirPathString,readcallback); 这个fs函数的意思是，读取文件目录。fs.readdir（...）,这个括弧里必须包含两个参数（A,B）,否则fs没法干活。
//    fs.readdir（A,B）; “A” 指的是“path”， 中文叫“路径”，“B"指的是“callback（err，files）”，中文叫“回调函数”。

// 五、重点来了：当fs函数读取了"A"中的内容后，会迅速把”读取结果“，给到”B“,注意了，我说的是读取结果，而不是一个值。
//      为什么读取了"A"后要给到“B”, "B"又为什么要接收呢？  因为他们都得听 "fs"的，这是fs"的规定，他们必须的干。
//      这个读取结果包括两项：一个是读取”是否成功“ ,二个是成功后“读取的值” ，这两个信息，分别赋予给了 “ readcallback”函数中的“err与files”。
//       

// 六、好了，说到这里，山路十八弯，已经过了一大半了，后面细节我就不一一啰嗦了，加油，童鞋们....

