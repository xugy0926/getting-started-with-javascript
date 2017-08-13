var config = {
  height: 170,
  weight: 120,
  sex: 'man',
  age: 18
}

console.log('----- 小明的基本信息 -----');
console.log(config);

console.log('---- 修改小明的性别 -------');
config.sex = 'woman';
console.log(config);

console.log('---- 增加小明的属性（血型） -------');
config.bloodType = 'A';
console.log(config);

console.log('---- 删除小明的年龄 -------');
delete config.age
console.log(config);