## 编程中为什么会有丰富化的数据格式？程君的第二课作业(补交)

### 编程是什么？

要想知道编程世界中为什么会有丰富化的数据格式之前，我们需要首先知道编程到底是什么？

在我的思维里，编程就是用计算机能够读懂的语言，让计算机帮助我们处理数据并得到结果。那么计算机在处理数据时如果能进行一种分类，就可以快速的进行处理。

比如我们也会把现实世界的物质进行分类，当我们运用逻辑思维时经常会调用MECE方法来进行分析，而应用这种方法的分类就可以让我们无遗漏、无重复的进行分类。

因此，计算机面对的数据千变万化，在让计算机处理数据之前，对数据进行分类，使之拥有各种不同的格式，只是为了让计算机更加方便的去读懂，去调用。

### js都有哪些数据格式？

通过目前的学习，我了解到JS中分别有

> 数字、文本、布尔、对象、数组、函数

#### 分别事例

数字

> var age = 18;

文本

> var locaitonBase = '北京';

布尔
指代真假、开关、是否

> true 或者 false

对象
是由若干名/值对组成的映射表，名/值对中间用；分隔，名/值对之间用，分隔，整个映射表用{}扩起来。

> var myJavaScriptLessionInfoObj = {
  teacher: name,
  teacherWeChat: wechat_user_name,
  title: 'JavaScript编程入门',
  beginTime: '2018/8/8',
  endTime: '2018/9/4',
  boysStudent: 417,
  girlsStudent: 119,
  lessionTarget: '帮助更多小白学习JavaScript',
  githubUrl: 'https://github.com/xugy0926/getting-started-with-javascript'
};

数组

> var myLikeColorsList = ['blue', 'green', 'black', 'write'];

函数
相当于一个黑盒子，黑盒子只被定义一次，就可以被调用任意次。

> function personA() {
    console.log('1');
}

***
#### 程君静态网页请[点这里](https://qiezijun120.github.io/test/)访问主页


