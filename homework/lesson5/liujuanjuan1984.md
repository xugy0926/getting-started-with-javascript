# JS编程入门Lesson5作业

by刘娟娟

分析这段代码，说明每个地方的name都是什么含义。

'''

    function output(name){//定义一个函数，函数名叫output，它需要一个参数，我们以name标记这个参数，用来说明在这个函数里我们如何使唤这个参数

        console.log(name);//在这个函数中，我们需要对这个参数name做console.log的处理

    }

    var name = 'hello,js';//申明一个变量，变量名叫name，并把'hello,js'这个字符串赋值给这个变量name

    output(name);//调用函数output，并把上一行变量name的值作为参数传给这个函数，让这个函数去工作

'''



老师这个例子还不够绝的，我拓展下：_步子迈大了，收不回腿了..._

'''
    var name = 'liujuanjuan';  //申明一个变量，变量名叫name，把'liujuanjuan'这个字符串赋值给它

    var liujuanjuan = {     //申明一个对象类型的变量，这个对象名名liujuanjuan

        name:'liujuanjuan'  //这个对象有一个属性，这个属性叫name，这个属性的值是'liujuanjuan'

    };

    console.log(name);    //打印变量name的值

    console.log(liujuanjuan.name);   //打印对象liujuanjuan的name属性的值

    function liujuanjuan(name){  //定义一个函数，函数名叫liujuanjuan，有一个参数为name

        console.log(name)//打印这个参数的值

    }

    liujuanjuan(name);  //调用函数liujuanjuan，参数为第一行变量name的值

    liujuanjuan(liujuanjuan.name); //调用函数liujuanjuan，参数对象liujuanjuan的name属性的值

'''

打印出来的结果一定很令人摸不着头脑。改进一下，做个标记：

'''
var name = 'liujuanjuan1';  //申明一个变量，变量名叫name，把'liujuanjuan'这个字符串赋值给它

var liujuanjuan = {     //申明一个对象类型的变量，这个对象名名liujuanjuan

    name:'liujuanjuan2'  //这个对象有一个属性，这个属性叫name，这个属性的值是'liujuanjuan'

};

console.log(name);    //打印变量name的值

console.log(liujuanjuan.name);   //打印对象liujuanjuan的name属性的值

function liujuanjuanF(name){  //定义一个函数，函数名叫liujuanjuan，有一个参数为name

    console.log(name)//打印这个参数的值
    
}

liujuanjuanF(name);  //调用函数liujuanjuan，参数为第一行变量name的值

liujuanjuanF(liujuanjuan.name); //调用函数liujuanjuan，参数对象liujuanjuan的name属性的值


'''
## 这个案例的教训是，对象的名字和函数的名字不要重名。
