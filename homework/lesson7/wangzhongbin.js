/*
目标：把同学们的心里话，扫描到同一个json文件里面。
步骤：
1. 进入到目标路径words-from-the-heart
2. 筛选出所有的json文件，并把这些json文件名写入一个需要扫描的目标json文件里面。
3. 定义一个要输出的json文件名和路径。
4. 遍历这些json文件，依次把里面的内容，写入到要输出的json文件里面。
（需要判断，哪些json文件写入失败了，并把写入失败的json文件名写入到err的里面）

*/


// 引入fs库和jsonfile库

var fs = require('fs');
var jsonfile = require('jsonfile');

// 定义要扫描的目标文件夹
var dirPathString = 'D:/my_project/words-from-the-heart';

// 定义存放大家心里话的js文件路径
var ourHeartWords = './ourHeartWords.json';
// 定义扫描错误的json文件路径
var errFilesPath = './errHeartWords.json';

// 扫描出需要扫描的json文件名，先筛选，再把它们存放到jsonScanFilesNames文件里面。
var files = fs.readdirSync(dirPathString,function (err,files) {
	if (err) {
		console.log('读取文件失败');
		return;
	}

	})
//把.json文件过滤出来，并把内容存放到jsonScanFilesNames里面。
var jsonScanFilesNames = [];
for (var i = 0; i < files.length; i++) {
	if (files[i].includes('.json')) {
		jsonScanFilesNames.push(files[i]);
	}
}


// __________________________________________________

// 循环读取jsonScanFilesNames文件的内容，并把内容输出到一个数组jsonContent。
var jsonContent = [];
var errFiles = [];

for (var i = 0; i < jsonScanFilesNames.length; i++) {
	try{
	var content = jsonfile.readFileSync(dirPathString + '\\' + jsonScanFilesNames[i]);
	jsonContent.push(content);
} catch (err) {
	// 把读取文件错误的文件名写入到errFiles中去。
	errFiles.push(jsonScanFilesNames[i]);
	}

}

// 把收集到的数据写入到相应的文件中去
jsonfile.writeFileSync(ourHeartWords, jsonContent);
jsonfile.writeFileSync(errFilesPath, errFiles);




/* 总结

一开始顺着老师的方法走，先定了思路和流程，做得很顺。
然而，依然有坑，搞了很多乌龙。（解决了后，回过头来看，感觉自己简直是zz……）

这次写代码最大收获是，你认为错的地方，不一定错了。
反而是那些没考虑过的地方，错了。

还有就是，一定要相信cmd反馈回来的信息，它们能帮你找到错误。
最后！！也记得去群里面问一下，我每次遇到问题时，满脑子想的是百度或google，居然忘记截图去群里面问了。
(这次出错的地方很弱智，如果去群里面问了，反而可能会立刻解决)

事情是这样的……(⊙﹏⊙)b，记录一下。
这一次代码一开始我觉得，做得满顺利的，运行时，修复了一些问题。
但就卡在最后一步，一直出错，不论怎么改，都是出现：
PS D:\my_project\my_article> node wangzhongbin.js
D:\my_project\my_article\wangzhongbin.js:81
});
 ^
SyntaxError: Unexpected token )
    at createScript (vm.js:74:10)
    at Object.runInThisContext (vm.js:116:10)
    at Module._compile (module.js:533:28)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
    at Function.Module.runMain (module.js:605:10)
    at startup (bootstrap_node.js:158:16)
    at bootstrap_node.js:575:3

当时我怀疑是不是电脑的nodejs出问题了，因为我的代码只有80行，
但它居然说我81行有问题……
我调整了很多语句，但执行后，一直说是（我写的代码行数+1）的那一行出错了（即永远是你没写到的那一行有问题），
且永远是“})”错了，语法错误。
然而我都找不到这两个代码……

无语。
我怀疑jsfile库安装不正确。
就又重新敲了一遍 npm install --save jsfile。
果然看到 err ，我觉得应该是jsfile有问题了。（然而我错了）
就百度，如何重装第三方库。
通过npm cache clean --force 强制删除。
后来重装。

但是，重装后，运行代码，依然错！还是同样的错误。
抓狂，继续想，是不是我的jsonfile名写错了？
因为老师后来在read_a_json和另一个文件里的jsfile引用，一开始是写成了jsonFile的，区分大小写。
老师是不是挖了坑……（虽然理智告诉我，不太可能，但万一呢……之前老师说埋了2个bug呢。）
以防万一，我改了，然而依然还是最开始屏幕的话……好吧，再改回。

不过这时的我，依然满脑子认为，是jsonfile库装错了，
因为我用的是sublime编辑器，
然后最开始两行，引用jsonfile库的时候，jsonfile的字体颜色是黄色的，但引用fs时，颜色是白色的……
我猜，这是不是有区别……(⊙﹏⊙)b（好吧，我的脑回路是有些清奇）
就一直在百度，想确认jsonfile是不是装成功了。

直到我百度到用npm ls，来查看装的modules，看到了有jsonfile库之后，我才开始明白：

哦，原来它装对了。
但到底哪里错了呢……

于是通过把一段段代码变成注释，
确定出，就是for语句之后出错了。
然而我实在是想不出，哪一行错了。

后来，我表哥来电话了，就和他聊了十几分钟。
回来后，开始莫名其妙地开始数for语句的挂括号了……

一数之下，
我发现……

我少写了一个花括号！！！！
！！！

我的for语句，是抄袭了老师的那一段，因为是抄袭老师的，就潜意识以为，应该不会出错吧，
应该不会出错吧？！！

是的，老师木有错，
然而我错了！！！！
我少抄了一个花括号！！
也许是，我删代码时多删了一个！
总之，就是少了一个花括号！！

然后我又加了一个，再运行，居然成功了！！
喜极而泣……

现在一想，感觉这个错误好弱智，不应该出错的，/(ㄒoㄒ)/~~。
不过cmd返回的反馈，也是让我有些懵，因为出错的行数，我根本就没写到那里。
虽然它的意思是，让我在那一行补上一个括号，但这种反馈很容易造成误导，因为是整个模块的错误。
这也让我判断错误，（好吧，我在为错误找借口）
不过简而言之，还是有些收获的……至少完成了作业。


*/
