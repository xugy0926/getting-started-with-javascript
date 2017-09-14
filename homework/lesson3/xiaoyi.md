
##  第四课作业（无总结版）

###  1.关于命名  

为了增强代码的可读性，在给变量进行命名的时候，要使得代码有意义。比如   

var id = '1234567';     //这就不是一个好的命名方式，因为读代码的人会下意识的问：什么 id？     


而  var nameId = '1234567'; // 这就是一个好的命名，因为一看就知道是名字的id，代码有意义，不仅别人容易看懂，自己在以后想改进的时候读起来也会更容易。  


###  2.关于 switch 语句  
![](http://oqym24k6p.bkt.clouddn.com/xiaoyi/2017-08-22-switch.gif)  

我在刚开始看**switch**语句的时候有一点不明白，因为**if-else**语句很好理解，判断条件直接跟着要执行的代码，哪个正确就执行哪一个。  

但是我在看 **switch**的时候有一点懵圈，看了一遍后终于明白了： 
 

    switch (age >= 18) {
    
      case true:
        console.log('已成年');
        break; // 退出循环
        
      case false:
        console.log('未成年');
        break; // 退出循环
        
      default:
        console.log('not a human');
    }  
    
 
 它不像if-else语句 两个条件放到了两个大括号里面去，这里是放到一起的。其实上面的语句里面可能有三种输出。正如我在截图里面展示的一样。我在上面的代码里面把它认为的分成了三个部分，注意这三个部分是相互独立且排斥的。只可能有一种情况输出，比如 age>= 18,这个判断语句是正确的，那么程序就找 **case true** 找到了之后就执行它下面的那条语句，然后到了 break 就跳出switch语句。  
 
注意：switch后面的条件正确，那么程序就去找 case true，如果不正确就去找 case false 或者 default。比如我把程序改成：  

     switch (age >= 18) {
    
      case true:
        console.log('未成年');
        break; // 退出循环
        
      case false:
        console.log('已成年');
        break; // 退出循环
        
      default:
        console.log('not a human');
    }    
    
    
现在来看，age>=18是正确的，那么就要找 case true，并执行后面的语句，输出 **未成年**。

###  3.两张交互图  

![](http://oqym24k6p.bkt.clouddn.com/xiaoyi/2017-08-22-IMG_5903.JPG)

![](http://oqym24k6p.bkt.clouddn.com/xiaoyi/2017-08-22-IMG_1950.JPG)