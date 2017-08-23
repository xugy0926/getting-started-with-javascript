## 代码分析

1. function output(name) {
2.     console.log(name);
3. }

4. var name = 'Hello,JS';
5. output(name);`

上面的代码，其中：

第1行的 name 是 output()这个 function 的参数定义值。是用来接收后面（第5行）的调用函数的值的。这个数可以是任意能使用的，只要他和第2行输出的那个console.log（）中的一致就可以。比如，可以使用a，b，c等等。

第4行的 name 是 一个独立的变量，就是个变量名，我们定义这个变量为"Hello,JS"。
第5行的 name 是 把第4行的变量 name 作为 output()这个函数的参数，送到第1行定义的函数内，运行函数。第4行及第5行的name也可以用其他代替，只要一致就可以。

