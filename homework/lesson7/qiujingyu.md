#### 展示页面
https://qiuyixiu.github.io/yixiu/

#### JS深圳小分队
志翀、vwin、rocky、刘争春、一休（丘竟钰）

#### 老师样本中的两个坑
+ 文件名的坑
```
var jsonFiles = [];
for (var i = 0; i < files.length; i++) {
  if (files[i].includes('.md')) {
    jsonFiles.push(files[i]);
  }
}
```
'.md'应为'.json'


+ push对象的坑
```
jsonList.push(jsonFiles[i]);
```
应为
```
jsonList.push(content);
```

#### 代码
```
var fs = require('fs');

var jsonfile = require('jsonfile');

var pathString = '/Users/baolong/words-from-the-heart/';

var writePathString = './all_words.json';

var errorPathString = './error_data.json';

fs.readdir(pathString, function(err, files) {
	if (err) {
		console.log('读取文件失败');
		return;
}

var jsonFiles = [];
for (var i = 0; i < files.length; i++) {
	if (files[i].includes('.json')) {
		jsonFiles.push(files[i]);
	}
}

var jsonList = [];
var errorFiles = [];
for (var i = 0; i < jsonFiles.length; i++) {
	try {
		var content = jsonfile.readFileSync(pathString + jsonFiles[i]);
    jsonList.push(content);
	} catch (err) {
 	   errorFiles.push(jsonFiles[i]);
	}
}

jsonfile.writeFileSync(writePathString, jsonList);

jsonfile.writeFileSync(errorPathString, errorFiles);

});
```

#### 心得
+ 这个作业拖得有点久，一方面是自己还不习惯徐老师这种教学风格，还停留在js课程隔壁全栈营那种不管三七二十一，把代码敲熟再理解的状态；一方面是自己要做的事太多，在js学习上的时间还花得不够多。
+ 虽然老师有提示，但自己只发现了第一个坑，其他的坑是参考同学们的作业找到的。
+ 测试代码时，忘了安装依赖即`npm install --save jsonfile` 。
+ 有三个同学的json文件无法读取，找开看了一下，有一个明显格式有问题，有二个感觉格式没错，只是在words里有几行内容。
+ 写入的json文件内容，是排成一行的，用atom不能直接得到想到的格式，应该是相关插件没安装。在visual studio code里按右键，选格式化文件，代码一下整齐了。
+ 在网页显示不难，参考老师的做法就ok了，我是在首页点链接才能到心里话的页面，这样会整齐美观些。
