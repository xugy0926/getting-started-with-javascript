```function output(name) {
    console.log(name);
}

var name = 'Hello,JS';
output(name); 
```


* 第1行、name 为函数output的参数属于局部没有赋值的变量。
* 第5行、name 为声明字符串变量，并赋值'Hello, JS'
* 第6行，name 为第5行定义的 name 字符串变量，在调用output函数时,被当做参数传进去。
