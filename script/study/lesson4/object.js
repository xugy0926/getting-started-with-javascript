// 用直接量的方式创建对象person1
var person1 = {
  name: 'xiaoming' //注意：对象属性name没有引号
};

// 用直接量的方式创建对象person2(带双引号的属性结构使得该对象更像json格式)
// 不推荐把对象属性带有引号
var person2 = {
  name: 'xiaoming' //【不推荐】注意：对象属性name有引号
};

console.log(typeof person1);
console.log(typeof person2);

console.log(person1.name);
console.log(person2.name);

console.log(person1['name']);
console.log(person2['name']);
