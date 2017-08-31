/*
*
*  
*
*  【运行步骤】
*  1. 终端进入到getting-started-with-javascript/study/lesson3
*  2. > node sample_code.js
*
*/

//声明并定义变量

var name = 'xiaoming';
var age = 18;
var height = 170,
  weight = 130.1;
var isMan = true;
var student = false;
var xinshengUserName = 'xiaoming';
var wechat_user_name = 'xiaoming';
var locaitonBase = '北京';
var company = locaitonBase + '新生大学';
var myLikeColorsList = ['blue', 'green', 'black', 'write'];
var myLikeFoods = ['刀削面', '拉面', '牛肉面', '杂酱面', '麻辣面', '烩面', '莜面'];

// 定义一个函数变量buildPerson（表达式函数定义法）
var buildPerson = function() {
  var xiaoming = {
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
    }
  };

  return xiaoming;
};

//调用(执行)buildPerson函数，根据基本信息构建
var personObj = buildPerson();
console.log(personObj);
