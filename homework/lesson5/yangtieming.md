
##第1行、第5行、第6行的name变量都有什么差异？

> 1. function output (name) {
> 2. &nbsp;&nbsp;&nbsp;&nbsp;console.log(name)；
> 3. }
> 4. 
> 5. var name = 'Hello,JS';
> 6. output(name);



1. 第一行的name,是函数output的参数名称，它可以是任意值。
2. 第五行的name, 是一个被定义的变量，它被赋值成一个叫做'Hello,JS'的字符串。
3. 第六行的name, 也是函数output的参数名称，但此时它已不是任意值，只能是被赋值后的'Hello,JS'这个字符串。