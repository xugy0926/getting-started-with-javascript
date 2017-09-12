function output(name) {
    console.log(name);
}

var name = "Hello, JS";
output(name)

阐述程序执行过程：
运行上述代码时，读到1-3行的function,放在内存暂不执行；
往下运行至第5行，从右往左开始，把字符串“Hello, JS”赋值给新变量name,这是第5行中的name作为一个新变量出现；
运行至第6行，语句为output(name)函数，此句中的name为用第5行定义的新变量name；
然后再到内存中执行第1-3行定义的output()函数，第1行中的name为函数output的形式参数；而第6行调用函数中的name为实际参数，运行是将调用函数中的实际参数赋值给定义函数的形式参数，即第6行中的name赋值给第1行的name,最后运行函数体中的语句，直到函数体运行完毕，程序结束。