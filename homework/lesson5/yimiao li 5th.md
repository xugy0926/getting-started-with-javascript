Lesson 5

**最重要的概念就是函数, 立即返回函数， 间接返回函数**
## 函数三要素
假如你要请一个人帮忙做某事，你必须要明确到底请谁（函数名）？告诉他你的要求（参数）是什么，他处理完事情后就会给你一个结果。
functon 函数名（参数）
>参数作用可以一句话总结：在函数执行过程中，完成某些逻辑处理时需要的一些必要的数据。

## 错误记录一（print 函数）
function print(content) {
  console.log('hello, JS');
}
print(content);// 是一个错误的结果，因为没有定义content，print后面是一个变量形式，数字、string等，需要加: 'content'

## 错误记录二（关于return 函数）
这是 node 和 浏览器环境的区别。**return函数在浏览器条件下，直接可以执行；但是在node环境下没法执行，必须要console.log才可以**
在使用 return 语句时，函数会停止执行，并返回指定的值。

## 异步函数
setTimeout 是内置函数所以不用定义就可以直接用。

## 变量和函数定义的区别：
> 变量和函数定义的区别：
> **变量：**先定义后使用
> **函数：**无论在哪定义，使用的时候才调用

## 作业部分
function output(name) {  //name形参 是一个空壳子  
console.log(name);  //打印参数name的具体内容    
}  
var name = 'Hello,JS';  //定义变量name 也是是定义实参
  output(name)   //调用name这个函数，这是真正赋值的内容
