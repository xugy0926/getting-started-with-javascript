### 代码分析

```Javascript
*1 function output(name){
*2    console.log(name);
*3 }
*4
*5 var name = 'Hello, JS';
*6 output(name);
```

* 第一行的name是定义output函数时设定的参数

* 第五行的name是要把 'Hello, JS'赋值给它的变量

* 第六行的name是调用output函数时喂给它的参数，在这里就是第五行赋值后的name

  > 这三者在赋值后值相同，但是含义不同；第一行是在定义函数时设定的参数，是一个通用概念的参数，第五、六行的name分别是被赋值的变量和赋值后喂给函数的参数；他们可以使用同一个名称，或者第一、二行的name指代的参数名称与第五、六行的name赋值的变量名称完全不同，都是可以的。