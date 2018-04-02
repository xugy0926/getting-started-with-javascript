## JavaScript 入门第二课总结

### 现实生活场景举例类比 JS 声明变量与对变量进行赋值
一个男孩，名字为"小明"，他自身特征为：身高175cm，体重70kg，性别男，年龄21岁；爱好为：唱歌、旅行；亲戚关系为：爸爸、妈妈、爷爷、奶奶、妹妹等。
判断一个男孩是否是小明时，即可使用上述特征，若上述特征均满足，便可认为这个男孩是小明，否则不是。
在向外界介绍小明时，可说此人为"小明"，即，指代上述特征的一个男孩。

由上面描述可推倒出：`小明 = 身高175cm，体重70kg，性别男；爱好为：唱歌、旅行；亲戚关系为：爸爸、妈妈、爷爷、奶奶、妹妹等 的一个人。`

与 JS 中映射，"小明" 为变量名 "xiaoming"，小明自身特征、爱好、亲属关系这些特征为 "xiaoming" 这个变量的属性/值；
```
xiaoming = {
  profile: {
    height: 175,
    weight: 70,
    sex: 1,
    age: 21,
  },
  hobby: ['travel', 'sing'],
  relations: ['dad', 'mon', 'grandpa', 'grandma', 'sister'],
}
```

### 变量声明与定义
```
var name = 'zhang san'
```
等价于
```
var name // 声明一个变量 name
name = 'zhang san' // 定义这个变量 name，将其赋值为 'zhang san'
```

### 变量名命名、赋值及取值规则
#### 命令规则：驼峰式与蛇式
```
companyName // 驼峰式
```
```
company_name // 蛇式
```

#### 赋值规则：
```
// 每行声明一个变量并定义
var age = 10;
var name = 'zhang san';
// 在同一行声明并定义多个变量
var age = 10, name = 'zhang san'
```

#### 取值规则：
```
var myFavorColor = ['blue', 'yellow', 'red', 'green', 'black'];
// 通过数组下标方式取值
console.log(myFavorColor[0]);
console.log(myFavorColor[1]);
console.log(myFavorColor[2]);
console.log(myFavorColor[3]);
console.log(myFavorColor[4]);
// 对数组进行循环迭代取值
for (var i = 0; i < myFavorColor.length; i++) {
  console.log(myFavorColor[i];
}
```

#### 字符串连接
```
var location = 'Beijing';
var companyName = '新生大学';
var compayBase = companyName + '位于' + location; // 新生大学位于Beijing
```
ps: 字符串与数字相加，结果为字符串
