//声明并定义变量
var name = 'xiaoming';
var height = 170, weight = 130.1;
var age = 18;
var xinshengUserName = 'xiaoming';
var wechat_user_name = 'xiaoming';
var isMan = true;
var student = false;
var locaitonBase = '北京';
var company = locaitonBase + '新生大学';
var myLikeColorsList = ['blue', 'green', 'black', 'write'];
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

