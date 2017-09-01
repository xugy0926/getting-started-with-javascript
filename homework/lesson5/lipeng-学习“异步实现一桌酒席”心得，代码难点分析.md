## 学习“异步实现一桌酒席”心得，代码难点分析

1 **重点是间接返回**

函数们干的事没变，还是上节课切分的子任务，但buyfood和cooking 用了间接返回。buyFood和coocking 用间接返回，所以，总体上叫**异步实现一桌酒席**。

2 **代码难点-  函数变量（表达式函数定义法）**

setTimeout() 里用了一层，

> 把 `function(){}` 当成setTimeout的第一个参数变量:
>
> ```javascript
>   setTimeout(function() {}, 5000);
> ```
>
> 把要延迟执行的代码，放在`{}`花括号里：
>
> ```javascript
>   setTimeout(function() {
>     console.log('采购完毕');
>     var foodsList = ['fish', 'egg', 'meat'];
>     callback(foodsList);
>   }, 5000);
> ```

在 `startWork()`里用了两层：

第一层，买菜，调`buyFood()`的时候，

> 把`function(){}` 当成 buyFood 的回调函数变量:
>
> ```javascript
> buyFood(function() {}); 
> ```
>
> 然后，给回调函数添加参数 foodList,  目的要把foodList传到下一流程:
>
> ```javascript
> buyFood(function(foodList) {}); 
> ```
>
> 最后，把买完菜之后要执行的代码，也就是做菜函数，cooking() ， 放在`{}`花括号里：
>
> ```javascript
> buyFood(function(foodList){
>     cooking(foodList, function(){});
> });
> ```
>
> 可以看到，cooking() , 有两个参数，也就是foodList和 回调函数变量.

第二层，做菜，`cooking()`的回调函数变量

> 把`function(){}` 当成 cooking() 的回调函数变量:
>
> ```javascript
> cooking(foodList, function(){});
> ```
>
> 然后，给cooking的回调函数添加参数 feast,  目的要把feast传到下一流程:
>
> ```javascript
> cooking(foodsList, function (feast) {});
> ```
>
> 把做好菜之后要执行的代码，也就是上菜console.log('----酒席准备好了----')，放在`{}`花括号里:
>
> ```javascript
> cooking(foodsList, function (feast) {
>       console.log('----酒席准备好了----');
>       for (var i = 0; i < feast.length; i++) {
>         console.log(feast[i]);
>       }
> });
> ```
>
> 

最后，把第二层构建的做菜代码，放在买菜回调函数花括号里`{}` 

从这样：

```javascript
buyFood(function(foodList){
    cooking(foodList, function(){});
});
```

变成这样：

```javascript
 buyFoods(function (foodsList) {
    cooking(foodsList, function (feast) {
      console.log('----酒席准备好了----');
      for (var i = 0; i < feast.length; i++) {
        console.log(feast[i]);
      }
    });
  });
```



### 3 总结

函数变量，写法比较复杂。我拆了几遍，弄明白了。

“定义一个函数变量（表达式函数定义法）”，是把一个函数的定义代码，function(){} ，直接当成一个变量用。

> 第四课sample代码用了两次：
>
> [使用函数创建对象](https://github.com/xugy0926/getting-started-with-javascript/blob/master/study/lesson4/build_a_human.js) `var buildPerson = function(){}`
>
> [士兵对象有报数方法](https://github.com/xugy0926/getting-started-with-javascript/blob/master/study/lesson4/sound_off_3.js) `soundOff:function(){}`



