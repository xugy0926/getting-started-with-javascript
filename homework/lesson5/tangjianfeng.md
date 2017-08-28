##Homework of lesson5

第1行、第5行、第6行的name变量都有什么差异？请分析差异提交你的结论。

function output(name) {


   console.log(name);
   
   }
   
   var name = 'Hello,JS';
   
   output(name);
   
   
   第一行的name是定义run函数的一个参数，这个参数和第5、6行的name不是同一个东西，第5行的name是被‘Hello,JS'这个字符串赋值的一个变量，然后第6行的name就是把第5行的字符串当参数调进函数output（name）中，这样打印出来的就是‘Hello，JS’
   
   用自己的话说就是function output(name)就是在自定义一个函数，也就是做一个自己的工具，当在name参数的位置放一个变量进去的时候，就会打印出这个变量，第1行的name这个参数就算命名成mingzi也无所谓，只要下面的console.log的括号中的参数也变成mingzi就可以了，即console.log(mingzi);
   而第5行的name也可以变成其他的名字，例如myName，只要下面第6行的output中的括号中的内容也写成myName，就可以了。说到底，真正重要的是function output(name)这个函数是怎么定义的，变量名倒不是重点，当然最好能命名得清楚些，例如有些函数的参数必须要数组的，那就把参数变量名写成myArray这种名称，这样就容易让人理解，否则很容易会被人传个字符串或者整数这种不合适的参数传进去，这样就不好了。