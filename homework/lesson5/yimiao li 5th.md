Lesson 5

**最重要的概念就是函数, 立即返回函数， 间接返回函数**
## 函数三要素
假如你要请一个人帮忙做某事，你必须要明确到底请谁（函数名）？告诉他你的要求（参数）是什么，他处理完事情后就会给你一个结果。
functon 函数名（参数）
>参数作用可以一句话总结：在函数执行过程中，完成某些逻辑处理时需要的一些必要的数据。

## 一个错误记录
function print(content) {
  console.log('hello, JS');
}
print(content);// 是一个错误的结果，因为没有定义content，print后面是一个变量形式，数字、string等，需要加: 'content'

## 异步函数
setTimeout 是内置函数所以不用定义就可以直接用。

## 作业部分
function output(name) {  //name形参 是一个空壳子  
console.log(name);  //打印参数name的具体内容    
}  
var name = 'Hello,JS';  //定义变量name 也是是定义实参
  output(name)   //调用name这个函数，这是真正赋值的内容
