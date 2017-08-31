var fs = require('fs');
var path = require('path');

/* 定义徐老师的 words-from-the-heart 项目在本地硬盘上相对于本 js 文件的位置
最初定义的路径是相对于本 js 的相对路径，但是在后面的执行过程中发现
如果在终端中分别从项目根目录执行本 js 文件，和从 js 所在目录执行本 js 文件
得到的结果是不同的，由于 js 文件位于 homework/lesson6 目录下
从项目根目录执行本 js 文件的话，js 获取到的 words-from-the-heart 项目的路径是错的
研究了接近一个小时，最终才找到了解决办法
用 fs.realpathSync 获取到本 js 文件的绝对路径后，再用 path.join 结合 ./../../words 
就可得到 words-from-the-heart 的绝对路径 */
var directoryString = path.join(fs.realpathSync(__dirname), '../../../words');

/* 设置输出文件的路径，这也是个坑！
如果设置路径为 ./json_path.txt，并且执行本 js 文件时的当前路径不同的话
这个文本文件的保存路径也会变化
所以也是用 __dirname 获取当前文件绝对路径，以保证生成的 txt 文件的路径不会变  */
var txtPathString = path.join(__dirname, 'json_path.txt');

// 用于保存 json 文件名的字符串变量
var jsonFileName = '';

// Node.js API: Readline 读取用户输入
// https://nodejs.org/api/readline.html
function processJsonFileNames() {

    var prompt =
        '\nWhich method do you like?\n\n' +
        '1. Use native JS\n' +
        '2. Use npm module - glob\n' +
        '3. Use native JS with recurvise method\n';

    console.log(prompt);

    var readline = readline || require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    /* 这里是回调，所以取到用户的输入之后，在回调里执行后续的函数 */
    rl.on('line', function (choice) {
        console.log('You have chosen: ' + choice);
        getJsonFileNamesFromDirectory(choice);
        rl.close();
    });

}

processJsonFileNames();

function getJsonFileNamesFromDirectory(userChoice) {

    switch (parseInt(userChoice)) {
        case 1:
            searchCurrentDirectory();
            break;
        case 2:
            searchWithGlob();
            break;
        case 3:
            searchRecursive(directoryString);
            break;
        default:
            console.log('Please make the right choice');
            break;
    }

    if (parseInt(userChoice) != '2') {
        writeToFile();
    }
}

function writeToFile() {

    if (jsonFileName.length == 0) {
        console.log('No json files found, is it right?');
        return;
    }

    fs.writeFile(txtPathString, jsonFileName, function (err) {
        if (err) {
            console.log('Writing failed');
        } else {
            console.log('File written');
        }
    });

}

/* json 文件查找方法一
   只查找当前目录下的 json，不查找子文件夹里的 json
   这个需求，直接用 fs.readdirSync() 就能实现了 */
function searchCurrentDirectory() {

    /* 如果采用异步方法，需要用回调，否则文件列表还没获取完
    就会执行后面的代码，这时文件列表还是空的，肯定不行 */
    var files = fs.readdirSync(directoryString);

    jsonFileName = '';

    for (var i = 0; i < files.length; i++) {

        var currentFilePathPath = path.join(directoryString, files[i]);
        var stats = fs.statSync(currentFilePathPath);

        if (!stats.isDirectory() && files[i].endsWith('json')) {
            jsonFileName += files[i] + '\n';
        }
    }
    // 上面的拼接方式会让字符串最后多出一个空行，要删掉
    jsonFileName = jsonFileName.trim();
}

/* json 文件查找方法二
直接用 npm 中现成的模块 glob，遍历当前文件夹及所有子文件夹 */
function searchWithGlob() {
    // glob 只在该方法中用到
    // 所以就不放在文件的开头进行声明了
    var glob = require('glob');

    // 定义文件类型，设置完整搜索路径
    var fileType = '**/*.json';
    // 依然采用 path.join 生成完整路径，避免因系统不同导致手动设置路径出错
    var fullSearchPath = path.join(directoryString, fileType);
    jsonFileName = '';

    /* 注意：glob 方法获取到的文件路径是完整的绝对路径
       而且 glob 是通过回调返回结果的，所以写入文件的函数必须在回调中调用 */
    glob(fullSearchPath, function (err, files) {
        if (!err) {
            if (files.length === 0) {
                console.log('No json found');
                return;
            }

            for (var i = 0; i < files.length; i++) {
                var stats = fs.statSync(files[i]);
                if (!stats.isDirectory() && files[i].endsWith('json')) {
                    jsonFileName += path.basename(files[i]) + '\n';
                }
            }
            // 上面的拼接方式会让字符串最后多出一个空行，要删掉
            jsonFileName = jsonFileName.trim();

            // 然后将结果写入文件
            writeToFile();
        } else {
            console.log('Unable to write file');
        }
    });

}

/* 在工作中有时候可以像方法二那样，找到能搞定问题的解决方案就行
   但是在学习的时候，还是应当攻克每一个难关，这样才有进步
   如果只是一味地复制 Google、StackOverFlow 上的代码
   那么不管有多少年工作经验，都是不会有什么成长的 */

/* 在终端里查看 words-from-the-heart 这个仓库
   会发现仓库里不只是有 json 文件，还有其他扩展名的文件
   而且还有文件夹，而 fs.readdirSync() 只扫描根目录下的文件
   对于子文件夹里的文件，这个方法是不会去扫描的
   所以，就需要用递归调用的方法，来遍历整个仓库里的所有文件夹
   这样才能找到所有的 json 文件 */

/* json 文件查找方法三
   遍历当前目录及所有子文件夹 */
function searchRecursive(pathString) {

    jsonFileName = traverse(directoryString);
    var json = '';

    for (var p in jsonFileName) {
        if (jsonFileName[p]) {
            json += jsonFileName[p] + '\n';
        }
    }
    jsonFileName = json;
}

function traverse(dir) {

    var files = fs.readdirSync(dir);

    // 如果定义该变量为字符串，并用 result += file + '\n' 的形式拼接文件名
    // 最后输出的txt文件是每个字母一行的，而不是像方法一那样每个文件名占一行
    // 目前还没想出来是什么原因
    var result = [];

    // 
    files.reduce(function (files, file) {
        fs.statSync(path.join(dir, file)).isDirectory() ?
            traverse(path.join(dir, file)) :
            (file.endsWith('.json') ?
                result.push(file) :
                null)
    });

    return result;

}