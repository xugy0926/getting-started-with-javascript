# 编程中丰富多样的变成数据

编程的目的是把世界转化成数据和算法在计算中运行处结果。

我们听的，看的，闻的，触碰到的，都是不同的数据。在计算机语言中也会有各种各样的数据。JS中的数据分为，number，string，boolean，object，array五大类，前面三大类实际就涵盖了描述世界的基本数据。这就好比上建房子需要的砖和瓦，但是仅仅有这些是不够。对象就是两种以上的基本数据类型组成的一个数据结构，对象数组是一个更大的数据结构。

# 剖析本节课中的sample代码

var name = 'xiaoming';//声明变量，定义变量类型为字符串string；
var age = 18;//声明变量，定义变量类型为数字number；
var height = 170, weight = 130.1;//声明变量，定义变量类型为数字number；
var isMan = true;//声明变量，定义变量类型为布尔值boolean；
var student = false;//声明变量，定义变量类型为布尔值boolean；
var xinshengUserName = 'xiaoming';//声明变量，定义变量类型为字符串string；
var wechat_user_name = 'xiaoming';//声明变量，定义变量类型为字符串string；
var locaitonBase = '北京';//声明变量，定义变量类型为字符串string；
var company = locaitonBase + '新生大学';//声明变量，定义变量类型为字符串string；字符串赋值直接连接在一起，不像数字类型赋值可以相加
var myLikeColorsList = ['blue', 'green', 'black', 'write'];//声明变量，定义变量类型为数组array和字符串string的数据结构；
var myLikeFoods = ['刀削面', '拉面', '牛肉面', '杂酱面', '麻辣面', '烩面', '莜面'];//声明变量，定义变量类型为数组array和string的数据结构；

var myJavaScriptLessionInfoObj = {
  teacher: name,
  teacherWeChat: wechat_user_name,
  title: 'JavaScript编程入门',
  beginTime: '2018/8/8',
  endTime: '2018/9/4',
  boysStudent: 417,
  girlsStudent: 119,
  lessionTarget: '帮助更多小白学习JavaScript',
  githubUrl: '[https://github.com/xugy0926/getting-started-with-javascript'](https://github.com/xugy0926/getting-started-with-javascript')
};//典型的对象数据结构，内含多种数据类型，string，number

属性和方法函数的使用

如：myLikeColorsList.length中的.后面带的就是变量的一个属性，

能够调用这个属性的函数就是方法函数。

数组游标就是标记处数组某一个元素的值

如console.log(myLikeColorsList[2]);注意游标是从0开始计算第一个元素的，这里实际上是第三个元素。

for循环for (var i = 0; i < myLikeFoods.length; i++) {
  console.log(myLikeFoods[i]);
}//（起始语句，条件语句，执行语句）括起来的就是执行每一个数组内元素的命令。

\n是换行标识。

// 用上面定义的变量重新打包，并定义出xiaoming这边变量

var xiaoming = {
  name: name,
  config: {
​    age: age,
​    height: height,
​    weight: weight,
​    isMan: isMan,
​    student: student
  },
  like: {
​    myLikeColorsList: myLikeColorsList,
​    myLikeFoods: myLikeColorsList
  },
  work: {
​    locaitonBase: locaitonBase,
​    company: company
  },
  myJavaScriptLessionInfoObj: myJavaScriptLessionInfoObj
}

console.log(xiaoming);//这里就是把之前的所有函数调用进来形成了一个嵌套，nested，读起来方便。

# 我的静态网页

虽然比较简陋，后期我会逐步把自己学习遇到的坑记录下来

https://french5.github.io/test/