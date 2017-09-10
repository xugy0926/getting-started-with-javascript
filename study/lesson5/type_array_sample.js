/*
* Array api
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

var myLikeColorsList = ['blue', 'green', 'black', 'write'];

console.log(myLikeColorsList);

// 遍历数据
// “遍历”这个在编程中经常用到，翻译成白话就是数组元素挨个查一遍
// 就跟军训排队时教官要我们挨个报数一个意思。

for (var i = 0; i < myLikeColorsList.length; i++) {
  console.log(myLikeColorsList[i]);
}

// 往数组增加一个喜欢的颜色，push进入的元素在数据的末尾
myLikeColorsList.push('red');
console.log(myLikeColorsList);

// 删除数组末尾的元素
myLikeColorsList.pop();
console.log(myLikeColorsList);

// 删除数组最前面的元素
myLikeColorsList.shift();
console.log(myLikeColorsList);

// 找到某个元素在数组中的索引(游标)
var index = myLikeColorsList.indexOf('black');
console.log(index);

/*
* Array api
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
