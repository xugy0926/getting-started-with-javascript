/*
* String api
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
*/

var name = 'xiaoming';

console.log(name);

// 可以根据游标访问字符串的单个字符
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log(name[7]);

// 字符串有长度属性，通过循环访问单个字符
for (var i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// 通过游标切割字符串
console.log(name.substring(0, 4));

/*
* String api
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
*/
