/*
*
*  【运行步骤】
*  1. 终端进入到getting-started-with-javascript/study/lesson2
*  2. > node sample_code.js
*
*/

//声明并定义变量

var name = 'xiaoming';
var height = 170, weight = 130.1;
var age = 18;
var xinshengUserName = 'xiaoming';
var wechat_user_name = 'xiaoming';

var isMan = true;
var student = false;
var xinshengUserName = 'xiaoming';
var wechat_user_name = 'xiaoming';
var locaitonBase = '北京';
var company = locaitonBase + '新生大学';
var myLikeColorsList = ['blue', 'green', 'black', 'white'];
var myLikeFoods = ['刀削面', '拉面', '牛肉面', '杂酱面', '麻辣面', '烩面', '莜面'];

//声明并定义对象变量
var myJavaScriptLessionInfoObj = {
  teacher: name,
  teacherWeChat: wechat_user_name,
  title: 'JavaScript编程入门',
  beginTime: '2018/8/8',
  endTime: '2018/9/4',
  boysStudent: 417,
  girlsStudent: 119,
  lessionTarget: '帮助更多小白学习JavaScript',
  githubUrl: 'https://github.com/xugy0926/getting-started-with-javascript'
};


/*
* 输出个人信息
* 输出个人信息时，必要信息要求加辅助提示语
*/

console.log('姓名');
console.log(name);

console.log("年龄: " + age);
console.log('身高 = ' + height + ', 体重 = ' + weight);
console.log('地点: ' + locaitonBase);
console.log('公司: ' + company);

console.log('\n');

console.log('----我喜欢的颜色----');

console.log('我总共喜欢 ' + myLikeColorsList.length + ' 种颜色');
// 根据游标访问数据的内容，数组的游标从0开始
console.log(myLikeColorsList[0]);
console.log(myLikeColorsList[1]);
console.log(myLikeColorsList[2]);
console.log(myLikeColorsList[3]);

console.log('--------------------');

console.log('\n');

console.log('----我喜欢的食物----');
console.log('我总共喜欢 ' + myLikeFoods.length + ' 种食物');

// for 循环
for (var i = 0; i < myLikeFoods.length; i++) {
  console.log(myLikeFoods[i]);
}

console.log('--------------------');
console.log('\n');
console.log('JavaScript课程信息');
console.log(myJavaScriptLessionInfoObj);

console.log('\n');
console.log('#####################');
console.log('我是分界线')
console.log('#####################');
// 用上面定义的变量重新打包，并定义出xiaoming这边变量

var xiaoming = {
  name: name,
  config: {
    age: age,
    height: height,
    weight: weight,
    isMan: isMan,
    student: student
  },
  like: {
    myLikeColorsList: myLikeColorsList,
    myLikeFoods: myLikeFoods
  },
  work: {
    locaitonBase: locaitonBase,
    company: company
  },
  myJavaScriptLessionInfoObj: myJavaScriptLessionInfoObj
};

console.log(xiaoming);

console.log('\n');
console.log('#####################');
console.log('我是语法糖')
console.log('#####################');
// 用上面定义的变量重新打包，并定义出xiaoming这边变量

// 当对象里的变量命名和赋值过来的变量名字一样时，可以简写
// 这种方式在js的代码中称为：语法糖(减轻编码时代码的输入量)。
// 还有很多其他的语法糖。
var xiaoming2 = {
  name: name,
  config: {
    age,
    height,
    weight,
    isMan,
    student,
    bloodType: 'A',
    haveGirlFriend: true
  },
  like: {
    myLikeColorsList,
    myLikeFoods
  },
  work: {
    locaitonBase,
    company
  },
  myJavaScriptLessionInfoObj
};

console.log(xiaoming2);
