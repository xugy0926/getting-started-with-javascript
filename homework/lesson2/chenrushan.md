# Lesson02 总结

> 程序的目的是什么？
> 
> **处理数据，得到结果**

为了处理数据，操作数据，就需要先对其进行命名，然后将名字与数据关联起来。

# 名字

> 一切从命名开始

先取名 -> 生小孩 -> 名字与孩子关联起来

第一步是先取名字。无论是小名、大名还是宝宝，我们都会对孩子有个称呼。就如万物都有各自的名字。

我们是如何描述一个人的？通过描述他的各种属性。

比如，我的朋友小白，他身高175，体重120，今年18岁，他有爸爸、妈妈、妹妹、爷爷、奶奶…

我们回忆一个人的时候，在我们脑子里搜索到“小白”，然后读取数据，读取的就是这个人的各种属性特点。

“小白”这个名字，在我们脑子里，代表的就是各种属性的集合数据。


# 数据

> 数据很重要

## 描述数据的方式

为什么我们投简历的时候不是写一篇长文章来介绍自己，而是分类、用比较格式化的形式来呈现？

因为后者更清晰，大脑处理起来更快嘛。

同理，用一定的格式去描述数据，程序处理起来更快。

```
小明={
    属性：{
        身高：170cm,
        体重：70kg,
        性别：男，
        年龄：18
        }
    关系：{
        家庭：[爸爸，妈妈，爷爷，奶奶]，
        闺蜜：[], // 没有闺蜜 空值
        同学：[a,b,c],
        邻居：[s,m]
        }
    }
```

丰富的数据需要多样化的数据格式（type）。

身高、体重和年龄，用数字描述；性别用字符串描述；家庭、同学等有多个成员，用数组描述；身高、体重等具体的数据，可以打包成“属性”，成为组合性数据，用对象描述；等等。

### JavaScript的数据类型

JavaScript中，数据，或者说值（value），有多种类型（type），除了原始类型Primitive type），其他的都是对象类型（object type）。

- 原始类型（Primitive type）
    - 数字（number）
    - 字符串（string）
    - 布尔值（boolean）
    - 空（null）
    - 未定义（undefined）
    - 符号（symbol）
- 对象类型（object type）
    - 数组（array）
    - 函数（function）
    - …

More：

- [JavaScript 数据类型和数据结构 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
- [标准库中更多的对象 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)


# 名字和数据（变量和值）的关系

在程序中，变量（variable）就是前面说的名字，用来存储数据，也就是值（value）。

![variable & value](https://ws3.sinaimg.cn/large/006tKfTcgy1fs7i33lb73j30r80jodnh.jpg)

# 变量先声明，再定义

> 先声明，再定义（赋值只是一个过程）

先声明一个变量，再定义这个变量，给这个变量赋值。

```

var output = "Hello, JS"; // 等式左边是变量，右边是值

var output; // 先声明一个变量，变量名叫 output（此时变量的默认值是undefined）；
output = "Hello, JS"; // 再定义这个变量，给这个变量赋值("Hello, JS")。
```

# 阅读代码

1. string的引号，双/单引号都可以，尽量用单引号。（注意：不要混淆，JSON中必须用双引号）
2. 定义多变量时，可集中在一行，逗号隔开。eg. `const height = 170, weight = 120; `
3. 关于命名的惯例，有camelCase(lowerCamelCase)，PascalCase(UpCamelCase)等等。具体应用偏好，可参考热门代码风格指南[Airbnb](https://github.com/airbnb/javascript/blob/master/README.md#naming-conventions)、[Google](https://google.github.io/styleguide/jsguide.html#naming)。
4. 声明并定义了一个变量，就要去使用它，操作它。
5. 当“+”运算符用在字符串和变量之间时，如果变量是字符串，则连接两个字符串；如果变量是数字/布尔值，则转化为字符串，与字符串连接。（参考[Addition | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition)）。常用的字符串操作，还有用`string.length`查询字符串长度等（参考[String | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)）。
6. 数组，参考[Array | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)、犀牛书第7章。操作数组，用索引读取数组元素，遍历数组元素，可以用`for循环+索引`(较灵活)，也可以用`forEach方法+匿名函数`、`for…of`遍历。参考[JavaScript 的所有循环遍历方式](http://xugaoyang.com/post/5a62fb1d1d92b0371315ab35)。
7. 转义字符，参考犀牛书3.2.2。`\n`是换行符。
8. 对象，参考[Object | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 、犀牛书第6章。对象常见的用法是创建（create）、设置（set）、查找（query）、删除（delete）、检测（test）和枚举（enumerate）它的属性。对象属性的值，除了可以是基本数据类型之外，也可以拷贝其他变量的值。
9. 语法糖（Syntactic sugar），属性的简写。在ES6中，当属性名和局部变量名是一样时，我们可以省略它后面的冒号和值。参考[重新认识ES6中的语法糖 | segmentfault](https://segmentfault.com/a/1190000010159725#articleHeader0)。