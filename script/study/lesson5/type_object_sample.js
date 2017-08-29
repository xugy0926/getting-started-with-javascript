var config = {
  height: 170,
  weight: 120,
  sex: 'man',
  age: 18
};

console.log('----- 小明的基本信息 -----');
console.log(config);

console.log('\n---- 修改小明的性别 -------');
config.sex = 'woman';
console.log(config);

console.log('\n---- 增加小明的属性（血型） -------');
config.bloodType = 'A';
console.log(config);

console.log('\n---- 删除小明的年龄 -------');
delete config.age;
console.log(config);

// 定义了一个变量run，赋值了一个函数表达式。run变成了一个函数变量。
config.run = function() {
  console.log('\n###### function ######');
  console.log('i am running');
};

// 执行对象config的函数run
config.run();

console.log('\n---- config -------');
console.log(config);

console.log('\n#####################');
console.log('我是分界线');
console.log('#####################');

var config2 = {
  height: 170,
  weight: 120,
  sex: 'man',
  age: 18,
  run: function() {
    console.log('\n###### function ######');
    console.log('i am running');
  }
};

// 执行对象config2的函数run
config2.run();
