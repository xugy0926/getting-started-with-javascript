# 【第五节课作业】分析代码
作题日期：2017年9月10日
## 【作业题目】
1. 阅读study/lesson5的sample代码，并执行观察结果。
2. 图片上的代码，第1行、第5行、第6行的name变量都有什么差异？请分析差异提交你的结论。以你命名的md文件提交。
![](https://o3b126ie1.qnssl.com/avatar/081d10a4-6e49-47a5-8f9b-ca7d48dacb78)
---------

## 【变量差异分析】
1. 第5行的变量name是声明并定义赋值为'Hello,JS';
1. 第6行的变量name是函数output()调用时把函数外部的变量name传递给函数内部;
1. 第1行的变量name是函数接收传递到函数所用的变量;
1. 第5行与第6行的变量是同一个变量,是函数外部定义的变量;
1. 第1行的变量是函数内部的变量;
1. 第1、5、6行的name变量的值是相等的。


**项目目录：study/lesson5 中带有"sample"单词的JS文件共有5个，分别是：**  

+ ### [`type_array_sample.js`](https://github.com/xugy0926/getting-started-with-javascript/blob/master/study/lesson5/type_array_sample.js) //数组类型变量示例
    + 代码理解：
    + 首行给出Array数组对象的参考链接；
    + 声明定义数组变量`myLikeColorsList`并赋值；
    + 输出打印`myLikeColorsList`，结果：`[ 'blue', 'green', 'black', 'write' ]`;
    + 举例"遍历"数据,使用for语句,第循环一次打印一个当前数组元素;我理解这部分是展示获取值的方法;
    + 最后分部展示操作数组对象的4个方法:
        + .push('red');增加一个元素`'red'`到数组末尾;结果:`[ 'blue', 'green', 'black', 'write', 'red' ]`
        + .pop();删除数组末尾的元素;结果:`[ 'blue', 'green', 'black', 'write' ]`
        + .shift();删除数组最前面的元素;结果:`[ 'green', 'black', 'write' ]`
        + .indexOf('black');找到某个元素在数组中的索引(游标);结果:`1`;//用于定位指定元素方便操作
 
+ ### [`type_boolean_sample.js`](https://github.com/xugy0926/getting-started-with-javascript/blob/master/study/lesson5/type_boolean_sample.js)//布尔值类型变量示例
    + 定义一个布尔值变量`student`并输出打印,输出过程调用toString()方法.
    + >toString() 方法可把一个逻辑值转换为字符串，并返回（字符串）结果。
    + 测试：删除toString() 方法后输出报错，看来console.log()只能输出字符串，调用console.log()方法必须确保参数类型是字符串类型
 
+ ### [`type_number_sample.js`](https://github.com/xugy0926/getting-started-with-javascript/blob/master/study/lesson5/type_number_sample.js)//数字类型变量示例
    + 理解同上;
+ ### [`type_object_sample.js`](https://github.com/xugy0926/getting-started-with-javascript/blob/master/study/lesson5/type_object_sample.js)//对象类型变量示例
    + 定义对象变量（变量集合）config；
    + `console.log(config);`输出对象值，所有非文本变量在输出前被自动转换成文本
    + `config.sex = 'woman';`对对象属性赋值，改变值内容
    + `config.bloodType = 'A';`增加对象的属性`bloodType`;
    + `delete config.age;`删除对象属性'age';
    + <<<<<<<<<<
    + 我是分界线
    + <<<<<<<<<<
    + 老师定义了1个变量run()并赋值为函数变量;输出了2行字符串;
    + 新定义了一个`config2`对象,并在对象内部定义了一个函数run()使其成为`config2`的方法,最后调用`config2`的方法;

+ ### [`type_string_sample.js`](https://github.com/xugy0926/getting-started-with-javascript/blob/master/study/lesson5/type_string_sample.js)//字符串类型变量示例
    + 首先,定义并赋值一个字符串变量`'xiaoming';
    + 对字符串进行操作:
        + 输出字符串
        + 根据游标访问字符串的单个字符并输出,每行输出一个字符;
        + 字符串有长度属性，通过循环遍历单个字符并输出,也是每行输出一个字符;
        + 通过游标切割字符串:`console.log(name.substring(0, 4));`根据结果"xiao"来猜测,参数`0`设定从第几个游标开始往后计算返回第`4`个字符开始到末尾的值;
        + 查询老师给的参考文档,其描述是:**substring() 方法用于提取字符串中介于两个指定下标之间的字符**

以上是题目的回答

--------------

+ 作完题后我去看看其他同学的作业,caozhen同学的作业乍一看太口语化,我没一下看明白.但他是用了自己提问自己回答的方式思路来思考老师给出的问题,由点带线串起来,对自己的理解进行了一次梳理,这是我觉得要学习的地方.
+ 再看大师兄何伟的作业,厉害呀!他的作业是在研究回调和异步处理了!我要先交作业,回头再来细看!佩服!
+ 再看老师给的"小白典型"王云飞同学(其实我也是小白...)的作业,还是佩服!王云飞同学首先对老师讲的内容进行了回忆总结.再对自己的疑问列举分析,百度查找.再对老师给的代码按自己的思考修改和测试验证自己的想法,动手意愿很强,而我只是运行了老师给的代码而已,何伟也对自己的想法进行了验证,得到了新的理解.我要向他们两位学习这一点.
+ 摘录王云飞同学作业里的一句名人名言:
+ >**每一个人都必须按照他自己的方式去思考；因为他在自己的道路上，就会发现能帮助他度过一生的一条或者一种真理。但是他切不可放任自己；他必须克制自己，光有赤裸裸的本能是不行的。    ——歌德**
