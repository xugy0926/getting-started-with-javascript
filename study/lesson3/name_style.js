/*
*
* 1. 完整代表了变量的含义吗？ -> 推到出更多信息
* 2. 以问题为导向了吗？ -> 反映了问题而非解决方案
*
*/

var start = 0; // bad 开始什么？不明白
var startCount = 1; // good  可以推到出是number类型

var end = 100; // bad end什么？不明白
var endCount = 100; // good

var file = './name_style.js'; // bad 文件内容？不清楚
var jsFilePath = './name_style.js'; // good

var id = '1234567'; // bad 什么id？不明白
var nameId = '1234567'; // good

// 表述一个人的基本信息

var person = {   // bad。person可以表示一个人，但没办法是个人信息
  name: 'xiaoming',
  age: 18,
  sex: 'man'
};

var personInfoObj = {  // good
  name: 'xiaoming',
  age: 18,
  sex: 'man'
}

// 表示一个输入的雇员信息

var inputData = { // bad. 只表示了how，而没表示what
  name: 'xiaoming',
  age: 18,
  sex: 'man'
}

var employeeData = { // good. what很重要
  name: 'xiaoming',
  age: 18,
  sex: 'man'
}