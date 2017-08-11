/*
*  这个文件可以查出作业里是否包含你的作业。
*  在修改前你需要事先调整两个变量的值。
*  pathString
*  filterKeyString
*
*  【操作步骤】
*  1. 终端进入到getting-started-with-javascript/script目录
*  2. > npm install
*  3. > node checkMyFile.js
*
*/

// 引入fs模块
const fs = require('fs');
// 引入fs-extra模块
const fse = require('fs-extra');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面的变量。
const pathString = '../homework/lesson1';

// 定义要查询的关键字（不要包含".json"），可以修改你想要查询的关键字符串。
const filterKeyString = 'xugaoyang';

// 调用fs的readdir函数读取所有文件
fs.readdir(pathString, function(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }

  //把含有"md"字符的文件名过滤出来,把所有文件保存在mdFiles数组中
  var mdFiles = [];
  for (var i = 0; i < files.length; i++) {
    if (files[i].includes('md')) {
      mdFiles.push(files[i]);
    }
  }

  //依据jsonFiles中的内容，把含有filterKeyString关键字的文件名过滤出来
  // 并保存在filterFiles数组中
  var filterFiles = [];
  for (var i = 0; i < mdFiles.length; i++) {
    if (mdFiles[i].includes(filterKeyString)) {
      filterFiles.push(mdFiles[i]);
    }
  }

  // 依据filterFiles打印结果。filterFiles的长度大于0，表示找到了内容，否则，没找到。
  if (filterFiles.length > 0) {
    console.log('哇喔...我找到了下面的文件');
    console.log(filterFiles);
  } else {
    cosnole.log('很可惜，没有找到你的文件。');
  }
});