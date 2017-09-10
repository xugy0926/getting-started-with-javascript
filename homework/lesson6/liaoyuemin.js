//同步方式
var fs = require('fs');
//fs是nodejs的一个可以针对文件进行操作的功能模块，所谓模块我理解的就是一大段可以实现某种功能的代码
//这是针对fs模块的一个定义，这个表达式意思是说我们要引入这个模块了
//如果没有定义，模块的功能调用不起来，下面的代码无法实施
var readPath = './';//定义读取数据的路径
var writePath = './test.txt';//定义写入数据的路径
var nameList = fs.readdirSync(readPath);//定义读取数据结果
fs.writeFileSync(writePath, nameList);//将读取数据的结果写入指定的路径
//fs.readdirSync()和fs.writeFileSync()相当于是fs模块里面的两种方法，带Sync的用于同步，不带Sync用于异步
//fs.readdirSync的作用是“返回一个包含指定目录下所有文件名称的数组对象”，在使用的时候需要在括号里面写入目标路径.
//fs.writeFileSync()的作用是“将数据写入指定文件”，在括号里的参数需要包含文件路径／文件名，和需要写入的数据
//另外练习代码过程中发现，fs.writeFileSync()写入数据会替换掉原来的数据，并不是在原来的基础上增加数据。

//以上代码也可以直接把函数声明代入参数，只需要两行代码，而且觉得这样更容易理解代码结构
var fs = require('fs');
fs.writeFileSync('./test.txt', fs.readdirSync('./'));



//异步方式：
var fs = require('fs');
var readPath = './';
var writePath = './test.txt';
function readCallback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
  //异常情况处理,如果err为true，则打印“读取文件失败”，代码终止运行。
  if (files.length > 0) {
    fs.writeFile(writePath, files, writeCallback)
  } else {
    console.log('没有找到任何文件');
  }
  function writeCallback(err) {
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
  };
};
fs.readdir(readPath, readCallback);
//相比上面同步的方法，fs.readdir()这里括号里面的参数有点变化
//同步里面只需要写入路径即可，就可以直接返回结果，而异步并不是直接返回结果，因此它有两个参数，一个是路径，一个是回调函数
//callback函数的参数(err,files 这些)可以有多个，网上说通常第一个参数保留给异常。
//其实意思就是在读取数据的时候首先应该考虑到异常情况处理。那么问题来了，既然都需要考虑异常情况，那同步拿来有什么用？

//以上代码也可以直接把函数声明写到参数里面
var fs = require('fs');
fs.readdir('./', function (err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
  if (files.length > 0) {
    console.log(files);
  } else {
    console.log('没有找到任何文件');
  }
  fs.writeFile("./test.txt", files, function callback(err) {
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
  });
});

//筛选json文件
//想筛选出json文件的名字，那肯定需要将所有的文件每个都甄别一遍，遍历数组，需要for循环语句。
//然后筛选，肯定是要判断条件，如果满足什么什么条件就怎么怎么地，嗯，要用if语句，先写出来
for (var i = 0; i < files.length; i++) {
  if (文件名以.json结尾为true) {
    那么就把它写进test.txt
  }
}
//很痛苦的地方就在这里，怎么用代码描述“文件名以.json结尾”呢？
//先想到的是去nodejs API的中文网上去搜。但是搜啥关键字呢，试了filter，search都没有找到合适的，也百度了还是没有头绪
//后来听群里的小伙伴说可以用endWith，就搜了一下endWith的用法，好像真的行。（老师可不可以分享一下搜索关键字的一些技巧？要不是同学提到endwith我都搜不出来）
for (var i = 0; i < files.length; i++) {
  if (files[i].endsWith('.json')) {
    那么就把它写进test.txt
  }
}
//接着就是中括号里面的内容了。相对之前的异步，其实就是多了筛选那部分，那么把这筛选的部分加进去后面接着写就好了嘛：
for (var i = 0; i < files.length; i++) {
  if (files[i].endsWith('.json')) {
    fs.writeFile('./test.txt', files[i], writeCallback);
  }
}
//到这里我就蒙圈了，fs.writeFile括号里的第二个参数我是写files[i]和files呢？
//这里就要先知道files和files[i]到底是什么？
//在之前异步的代码里的files，是fs.writeFile的一个参数，指代的是写入的内容，很明显它是一个由多个文件名组成的数组，每一个文件名就是数组里面的元素。
//而files[i]就是files这个数组里面索引值为i的元素，类似arr = [1,2,3], arr[1]就是2。
//如果这里我写成files[i],从语法来讲，其实写入的是一个数据，并不是全部。最终我得到的结果是在test.txt里面写入了一个莫名其妙的值zhuyongjin.jsonnononn（我还没有想通为什么是这个值）
//而其实我是想写出读出的整个数组，所以这时候其实应该用files才对。
for (var i = 0; i < files.length; i++) {
  if (files[i].endsWith('.json')) {
    fs.writeFile('./test.txt', files, writeCallback);
  }
}
//但是这样又不对了呀，这时候files是全部的数据，也就是没有筛选的全部文件名。所以给筛选的出来的结果再给个名字比如jsonFile,这样就行了吧？
//这时候我又犯了难，通过for循环和if语句筛选出来的是一个一个值，而我想定义的是一个数组，要怎么表达这个数组和一个个元素的关系呢?
//脑子里想的是jsonFile = [file[i],file[i+1],file[i+1+1],........],但是这样很明显不能用啊。
//然后我去看第七课的代码，才知道是可以定义空数组的。我先定义一个空数组，然后把通过for循环和if语句得到的一个个元素往里面添加,这样不就可以得到一个只有json文件名的数组了吗？
var jsonFile = [];
for (var i = 0; i < files.length; i++) {
  if (files[i].endsWith('.json')) {
    jsonFile.push(file[i]);//这里也费了一些功夫，刚开始看到第七课的代码时，还以为跟writerFile一样是个新的API呢，后来发现这不就是之前的课件里面数组增删改查的功能吗。。。默念“学以致用”三遍
    fs.writeFile('./test.txt', jsonFile, writeCallback);
  }
}
//把这个弄好了，再把之前的异步代码套上，运行。2017年9月4日7点43分，发现居然成功了！老泪纵横！
var fs = require('fs');
function readCallback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
  var jsonFile = [];
  if (files.length > 0) {
    for (var i = 0; i < files.length; i++) {
      if (files[i].endsWith('.json')) {
        jsonFile.push(files[i]);
      }
      fs.writeFile('./test.txt', jsonFile, writeCallback);
    }
  } else {
    console.log('没有找到任何文件');
  }
}
function writeCallback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
fs.readdir("./", readCallback);
//总算是把所有json文件的名字写到目标文件里了，但是有个问题，就是运行代码的时候会打印很多次“写文件成功”。
//仔细一看，原来是因为我把fs.writeFile('./test.txt',jsonFile,writeCallback)写到循环里面去了，把它挪出来：
var fs = require('fs');
function readCallback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
  var jsonFile = [];
  if (files.length > 0) {
    for (var i = 0; i < files.length; i++) {
      if (files[i].endsWith('.json')) {
        jsonFile.push(files[i]);
      }
    }
    fs.writeFile('./test.txt', jsonFile, writeCallback);
  } else {
    console.log('没有找到任何文件');
  }
}
function writeCallback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
fs.readdir("./", readCallback);
//这样就只会打印一次“写文件成功”

//谈一谈最近学习的感受：
//还是那句话：越来越吃力啦。以前可能花个周末还能完成作业，现在感觉得花双倍时间。
//大群里面讨论的很多东西都看不懂了，幼儿园群似乎不是很活跃，我们的成长幼稚园群很热闹。
//这个群的名字是我取的，大家投票决定的。云飞还很不喜欢，感觉没有“屌丝逆袭学霸队”霸气，哈哈。
//取这个名字的时候，我就在想我们到底是为了什么聚集在一起的？当然，或许我们都抱着要变成学霸，要成为优秀的程序员的梦想，但对于小小小白来讲，对我们来说最重要的是什么？
//我觉得是成长，自我的成长。人有时很容易跟别人相比较，然后自惭形秽，然后停滞不前，要不然为什么连问题都不敢问呢？
//其实我们真正需要的不是跟别人比较后“我还不错”的那种优越感，而是今天的我跟昨天的我相比是不是进步多了一点？
//离课程结束的时间不多了，这个月后我也要从上海回到成都，工作生活可能都会有很大的变化，但是学习还会继续。
//最开始学这门课，可能并没有像其他同学那样的雄心壮志，只是碰巧知道编程很重要，碰巧在情绪最不好的时候，碰巧看到了这门课，碰巧报了名而已。
//想来都是巧合，结果却令人意外。
//你如果问我学到了什么？我不会告诉你我知道了JS的运行环境框架，知道了同步函数异步函数，学会了一些电脑端的命令，会简单写几行代码，我会告诉你这门课教给我最重要的事情是：把学习当作一种习惯。
//现在在我们的幼稚园里，大家每天在群里打卡学习，相互答疑解惑，每天都有收获的感觉实在是太好了！
//谢谢老师和同学们的陪伴！
//继续加油！