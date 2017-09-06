fs = require('fs')//引入头文件

/**
 * 获取指定路径下文件列表
 * 使用的是异步函数，因此不能使用立即返回，用callback传递数据
 * @param {*} dirPath 文件路径
 */
function readFileList(dirPath,writeToFile){
    // 对传入参数进行判断
    if (!dirPath) {
        console.log('路径不能为空')
        return null;
    }

    if(typeof writeToFile != 'function'){
        console.log('%s is not a function',writeToFile);
        return;
    }

    //读取文件列表
    fs.readdir(dirPath,function(err,files){
        //处理错误
        if (err){
            console.log('读取文件列表失败：%s',err)
            return;
        }

        //处理文件列表为0的情况
        if (files.length === 0){
            console.log('未找到任何文件');
            return;
        }
        console.log("+++++++++++++++++++")
        //处理找到的文件
        filesStr =  files.join(',')
        console.log(filesStr)
        writeToFile('realHeatFileName.txt',filesStr.toString())
    })
}

/**
 * 
 * @param {*文件内容} contents 
 * @param {*文件路径} filePath 
 */
function writeToFile(filePath,contents) {
    if (!filePath || !contents || contents.length === 0) {
        console.log('路径不能为空或内容不能为空')
        return;
    }

    //写文件操作
    fs.writeFile(filePath,contents,function(err){
        if (err){
            console.log('文件写入失败:%s',err)
        } else {
            console.log('文件写入成功')
        }
    })

}


//执行函数
var dirPath = '../../homework/lesson1'
readFileList(dirPath,writeToFile)

/**
 * 此文件在作业第六次的作业目录下，可以直接运行。生成的文件默认也存储在此作业目录下。
 * 很遗憾的一点是 每个函数都应该尽可能独立，而我写的函数readFileList 本来是只负责读取文件列表的。
 * 然后要写文件 需要使用 回调。 这本身没什么问题。
 * 问题是我的writeFile 需要一个文件路径参数。因为单独作为一个写文件函数，这个参数是必要的。
 * 但在回调时 没法给这个参数 所以我只能写死了，那么这个函数其实就很烂了。
 * 我要是把路径作为参数传递给readFileList，然后在传递给writeFile，那就不符合readFileList的本意了，
 * 读取文件列表这个函数不需要一个写入路径参数。
 * 
 */

 