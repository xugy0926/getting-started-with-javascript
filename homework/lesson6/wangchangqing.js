//同步方案

var fs = require("fs");

var dirpathString = '../../../words-from-the-heart';

var files = fs.readdirSync(dirpathString);

var outputPathString = '../../../words-from-the-heart/write_file-sync.txt';

fs.writeFileSync(outputPathString, files);

//异步方案

var fs = require("fs");

var dirpathString = '../../../words-from-the-heart';

function callback(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    }

    if (files.length > 0) {
        console.log(files);
    } else {
        console.log('没有找到任何文件');
    }
}

var filePathString = '../../../words-from-the-heart/write_file-async.txt';

function callback(err) {
    if (err) {
        console.log('写文件失败');
    } else {
        console.log('写文件成功');
    }
}

fs.writeFile(filePathString, files, callback);


//输出倒是成功了，但是结果有点乱。

//想实现每个文件名之后自动换行，还有过滤掉所有非json文件，那样应该会美观很多。

//好像有的同学已经实现了这样的技术。比如“liuliyuan”的作业就成功实现了自动换行的技术。
//我模仿她的代码，加入var fileContent = files.join("\n");但是依然没有成功，不太清楚原因是什么。
//而且她的代码中似乎没有定义files，也依然成功输出了结果。我尝试了一下在自己的代码中不对files做赋值和定义，但是运行的时候报错了——not defined。这一点也不太清楚原因是什么。

//读了何伟同学的代码，好复杂！！几乎完全看不懂。膜拜大神

//老师挖的坑好多，不过感觉自己已经慢慢知道老师的套路了哈哈哈——“改”、“删”、“换”，陷阱多多，必须多加小心才行。