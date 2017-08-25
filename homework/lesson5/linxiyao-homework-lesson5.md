
图片中变量名name的差异

1.根据函数表达式：

  function functionName （a）{ }

    关键字   函数名       形参//形参可以是0或多个

  得出function output（name）中的name为函数output的形参，相当于一个空壳子，还没有实际值。

2.根据声明变量，给变量赋值的形式为：
  var variableName  = "xxxxxx",
  得出var name = 'Hello,JS'中的name为一个独立变量名，且这时它被赋了值，值为Hello,JS。

3.根据调用函数的形式：

  functionName （ a ）

    函数名        实参

  得出output（name）中的name为函数output的实参，是已经被var赋过值的，值是Hello,JS 。


ps：代码还没跑，先把容易的作业交了，似乎能减轻点心里压力哈。