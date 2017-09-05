/*
第6课的作业：
需求：写一个整理文件名的js脚本，即扫描文件夹，把读到的文件名写入到一个txt文件。
要求：该js脚本以自己名字来命名
*/

//调用fs这个服务
var fs = require('fs')

//扫描目录地址，扫描结果写入文件；
//这个文件即便不存在也会自动创建；如果已存在会被覆盖。

//交作业时的地址

var scanPathString = '../lesson2';
var writePathString =  './files-results.txt';


/*
//我在本地调试的地址
var scanPathString = '../sample';
var writePathString =  './files-results.txt';
*/

function scanCallback(err, files){
    //出错提醒；我故意设置了一个不存在的文件夹为扫描路径，会触发这个报错
    if(err){
        console.log('扫描文件报错了');
        return;
    }
    //空文件夹提醒，readdir的结果存在files这个参数里，是个数组
    if(files.length > 0 ){
        //本行仅是显示屏打印，读取其实是js.readdir做的工作。所以也可以不打印到终端。
        //console.log('正在扫描\n'+files);

        
        //创建一个数组，用来存储结果；实际上这个callback本身就会存储在files这个参数里。
        var filesList = []
        for (var i = 0; i < files.length; i++) {
            filesList.push(files[i]);
            //console.log(files[i])
        }
        //console.log(filesList);
        

        //把files这个数组内容，逐个写入文件。
        //但输出结果很奇怪。没有逐行写入，而且会写不完整。但循环确实完成了指定次数。
        //但这至少解释了一点，files如何从读取函数跑到写入函数那里。
        //用writeFile同步方式，会有乱七八糟的效果
        //而用异步方式则只剩下最后一个，因为被覆盖了
        fs.writeFile(writePathString,filesList,writeCallback)

        //fs.writeFileSync(writePathString,filesList)
        
        //for (var i = 0; i < files.length; i++) {
            //fs.writeFileSync(writePathString,files[i],writeCallback)
        //}


    }else{
        console.log("这个目录下没有任何文件");
    }
    
}

//定义一个写入文件的反馈函数
function writeCallback(err,files){
    if(err){
        console.log("写文件报错")
    }else{
        console.log("写文件成功")
    }
}

fs.readdir(scanPathString,scanCallback);



//疑问：fs是什么，require fs就成功了， 这叫什么？
//疑问：readdir是什么，fs.readdir就直接调用了，这叫什么？
//readdir有2个参数，分别有什么要求？
//定义了callback函数，但调用它的时候并没有给它参数，怎么回事？

//这个脚本运行后，结果只有一个undefined，不知道为什么。


/*
作业过程中产生的疑问与答案：
1、
最初我用了fs.readdir，写入文件的结果是undefined；查看刘胜新的作业，改成fs.readdirSync就成功了。
不知道为什么。
带Sync的是同步处理。不带，是异步。
猜测是：
fs.readdir的返回值，是未定义。
fs.readdirSync的返回值，居然正确？
2、
我把scanCallback的err参数及对应代码去掉，结果报错了，说files.length无法找到。
不知道为什么。
3、
//向刘胜新学习用fs.readdirSync并移除下面这个回调的调用。代码是能跑通的，但逻辑有缺口。
//刘胜新用fs.readdirSync没有scanCallback回调，而我b回调也能跑，但实际上没调用这块代码。可能是可选参数。
//



//测试下如何把一个函数的运行结果赋值给一个变量

function test(){
    console.log('text for log');
    return "back for back"
}

var doc = test();

console.log(doc);

//结论是，把没有return的函数赋值给变量，打印变量就是undefined


*/
