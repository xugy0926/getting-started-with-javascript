我知道，作业要从新做了，的确是没用心。实在是有付老师的期望。不过话说回来了，学习任何时候都是为自己学的。老师希望看到学生的努力和认真，很感谢老师对我第一次作业的肯定。言归正传：

## 提起命名

命名在程序中的确是不起眼又很重要的东西，好的命名让你可以不用看注释就知道表达的什么意思，糟糕的命名让人不知所云，不仔细看都不知道写的是啥，甚至有些命名需要靠猜才可以知道是什么意思。这就是名字起得不好。

一个好的命名是什么样的呢？就像老师讲的那样，把握两个原则：

1. 含义清晰

   对比以下命名就能看出优劣

   > var i,j,k						var index
   > var xiaoming					var personObj
   > var start 						var startTime
   > var time 						var endTime
   > var file 						var mdFilePath
   > var up 						var upCount
   > var down 					var downCount 
   > var id 						var nameId

2. 要what不要how

   命名直接指出是什么，而不要让思考是什么，怎么来的

   对比以下命名就能看出优劣

   > var inputData  				var employeeData

   那么如何做到清晰的命名的，就要多思考你的命名是要表达什么，一般来讲都是需要用英文来表述的，因此不懂的一定要勤查字典，我说的查字大多指的是直接在网上查词翻译，比如[谷歌翻译](https://translate.google.cn/?um=1&ie=UTF-8&hl=zh-CN&client=tw-ob#en/zh-CN/)。而那些命名方式如驼峰命名，匈牙利命名规则等，目的就是对每个单词有个明显的界线例如首字母大写，例如单词间以下划线分隔等。这些都只是命名工具，最为关键的还是选词。

   命名的意义在于操作它和使用它，如果定义了变量却没有使用它，那么它是没有意义的。说到定义变量，不得不提到一点老师所说的：

   > 声明：是在声明要创建一个变量
   >
   > 定义：是给这个变量开辟一块内
   >
   > 最后才是赋值

   在向老师提问的时候，问过一个问题**为什么JavaScript是动态类型**老师举了个例子：

   ```
   var xiaoming = '小明';
   xiaoming = 1;
   xiaoming = ['a','b','c'];
   ```

   那么关于声明和定义来讲可以这么理解：

   声明了1次：即声明了一个名为xiaoming的变量

   定义了3次:   即每次赋值时都为此变量开辟了一块内存

   赋值了3词：这个很好理解，有三个赋值语句。

   ​
## 数据类型

   如果要说为什么有这么多丰富的数据类型，那么必然的要去了解这些数据类型有什么不同点。知道其特点及其用途自然就知道了为什么。关于此，我在网上搜索到了一篇[资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)。以下内容大部分源于此：

   JavaScript数据类型：ECMAScript 6 定义了7中数据类型

   - 6种原始类型

     - Number 数字类型 除了能表示浮点数外还有一些带符号的值，+Infinity,-Infinity和NaN(非数值),**它并没有为整数给出一种特定的类型**

     - String 字符串类型 用来表示字符串，字符串是不可变的。但是可以基于原始字符串创建新的字符串

     - Boolean 布尔值 表示一个逻辑实体，有两个值 true 和false 以区分真假

     - Null  只有一个值null 目前常用于表示"没有对象",即此处不应该有值参见[null和undefined的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

     - Undefined 一个没有被赋值的变量会有一个默认值undefined，表示缺少值，就是此处应该有一个值，但是还有没有定义。

       > （1）变量被声明了，但没有赋值时，就等于undefined。
       >
       > （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
       >
       > （3）对象没有赋值的属性，该属性的值为undefined。
       >
       > （4）函数没有返回值时，默认返回undefined。

     - Symbol (ECMAScript 6 新定义)符号类型是唯一的并且是不可修改的, 并且也可以用来作为Object的key

   - 和Object  对象是指内存中的可以被 [标识符](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)引用的一块区域.

     在 Javascript 里，对象可以被看作是一组属性的集合。

     > 用[对象字面量语法](https://developer.mozilla.org/en/JavaScript/Guide/Values,_variables,_and_literals#Object_literals)来定义一个对象时，会自动初始化一组属性。（也就是说，你定义一个var a = "Hello"，那么a本身就会有a.substring这个方法，以及a.length这个属性，以及其它；如果你定义了一个对象，var a = {}，那么a就会自动有a.hasOwnProperty及a.constructor等属性和方法。）而后，这些属性还可以被增减。属性的值可以是任意类型，包括具有复杂数据结构的对象。属性使用键来标识，它的键值可以是一个字符串或者符号值（Symbol）。
     >
     > ECMAScript定义的对象中有两种属性：数据属性和访问器属性。解释的太深了，我就不赘述了。

     “标准的”对象和函数：

     “标准的对象”就是键和值之间的映射。键是不可变的  字符串或者symbol 值可以是任意类型。

     函数是一个附带可被调用功能的常规对象。

     JavaScript有很多内建对象，比如 Date对象，有序集比如 数组是是一种使用整数作为键(integer-key-ed)属性和长度(length)属性之间关联的常规对象。

     **这一点w3cschool中对数据类型的解释不太一样，w3cscholl把数组也作为了JavaScript的数据类型**

     但是使用typeof 查看时返回的是object 所以还是把数组理解为对象。

     可以使用typeof 查看数据类型

   ​

   ### 如何搭建个人主页

   1. 在github创建一个项目

   2. 在项目的设置中找到 GitHub Pages 将此项目的master分支设置为页面来源

   3. 在项目创建index.html文件 会自动成为githhub寻找的网页

      因为上面的东西github都已经给做了，所以个人搭建主页的关键就是编辑网页。

      我目前还没想好做个什么样的个人主页，所以借老师的主页用几天，希望不要介意。我的主页地址是：

       <https://mycolourfullife.github.io/youaremyworld/>

   ​

   ​

   ​

   ​
