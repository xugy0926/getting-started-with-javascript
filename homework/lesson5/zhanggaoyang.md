第五课作业

outpu是一个函数名

    function output(name) {
        console.log(name);
    }

    var name = 'Hello,js';
    output(name);

output是一个函数变量，var定义了一个值`'Hello,js'`而这个值被传入到`function`函数里，所以`function`是一个按值传递，即虽然参数不同但不影响结果。
所以，函数的`name`和var定义的`name`是不同的。