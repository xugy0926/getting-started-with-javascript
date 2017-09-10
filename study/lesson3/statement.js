/*
* 表达式语句/赋值语句
*/

var age = 18;
var myLikeColorsList = ['blue', 'green', 'black', 'write'];

console.log('\n');
/*
* 条件语句 -- if
*/

if (age >= 18) {
  console.log('已成年');
} else {
  console.log('未成年');
}

console.log('\n');
/*
* 条件语句 -- switch
*/

switch (age >= 18) {
  case true:
    console.log('已成年');
    break; // 退出循环
  case false:
    console.log('未成年');
    break; // 退出循环
  default:
    console.log('not a human');
}

// 上面的switch代码是否存在逻辑问题？

console.log('\n');
/*
* 循环语句-for
*
* 循环语句的三要素
* 1. 循环开始的初始化变量 var i = 0;
* 2. 循环条件 i < myLikeColorsList.length;
* 3. 计数器变量更新 i++;
*/

for (var i = 0; i < myLikeColorsList.length; i++) {
  console.log(myLikeColorsList[i]);
}

// 等价于下面(把初始化变量提前)

var i = 0;
for (; i < myLikeColorsList.length; i++) {
  console.log(myLikeColorsList[i]);
}

// 等价于下面(把初始化变量提前，把计数器的自增放在循环体内)

var i = 0;
for (; i < myLikeColorsList.length; ) {
  console.log(myLikeColorsList[i]);
  i = i + 1; // i++;
}

// 初始化变量可以是多个，计数器变量更新也可以是多个
for (var i = 0, j = 0; i < myLikeColorsList.length; i++, j++) {
  console.log('种类' + j);
  console.log(myLikeColorsList[i]);
}

// 创新的轮询数组的技巧
// 两头同时轮询，轮询时间只用到了一半。
for (
  var i = 0, j = myLikeColorsList.length - 1;
  i < myLikeColorsList.length / 2;
  i++, j--
) {
  console.log(myLikeColorsList[i]);
  console.log(myLikeColorsList[j]);
}

console.log('\n');

/*
* 循环语句 -- while
* 只要满足while的条件，就会循环执行循环体的代码
*/

var i = 0;
while (i < myLikeColorsList.length) {
  console.log(myLikeColorsList[i]);
  i = i + 1; // i++;
}
