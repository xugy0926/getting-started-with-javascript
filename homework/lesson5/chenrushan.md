# lesson5 homework

## 几个`name`之间的差异

```js
function output(name){
  console.log(name)；
}

var name =  ‘Hello，JS’；
output(name);
```
- 第1行的name：是函数output的形参，函数被调用时，会新建一个局部变量name，便把实参的值赋给这个局部变量。
- 第2行的name：函数output接收到的参数值。
- 第5行的name：全局变量name。
- 第6行的name：传给函数output的实参。执行函数时，在当前作用域找到全局变量name，将它的值赋给函数里的局部变量name。

---

## 异步实现kitchen_workflow

### 用`setTimeout(callback, timeout)`模拟延迟

把原本直接return一个值，改成，作为参数传入回调函数。
再用匿名函数`function(){}`把函数体包裹起来，成为setTimeout的callback参数。

```js
function buyFoods(callback){
    setTimeout(function(){
        // code for buyFoods;
        callback(foodList);
    }, 3000);
}
```

```js
function cooking(foodList, callback){
    setTimeout(function(){
        // code for cooking;
        callback(feast);
    }, 5000);
}
```

Question: 产生疑问，为什么prepare函数不用改成异步呢？
它最后返回的是布尔值，在主控制函数里进行判断，好像都不是其他函数需要的参数。
没想明白...

### 主控制函数startWork

- 先调用`prepare()`, 条件判断产生分岔路:
    - 岔路(!success)，没准备好，直接return（起初没写return，函数继续执行❌）；
    - 岔路(success)，依次执行buyFoods、cooking。(难点)

难点部分，老师是直接嵌套写:

```js
// 徐帅版
buyFoods(function(foodsList) {
    cooking(foodsList, function(feast) {
      console.log('----酒席准备好了----');
      for (var i = 0; i < feast.length; i++) {
        console.log(feast[i]);
      }
    });
});
```

#### 下面是小白的曲折探索

小白看着有点蒙，小白是想这样写的：

```js
// 小白第一版
function callback (feast){
    console.log('----酒席准备好了----');
    for (var i = 0; i < feast.length; i++) {
        console.log(feast[i]);
    }
}
let foodList = buyFoods (cooking);
cooking (foodList, callback);
```

结果当然是报错了：`foodList`是`undefined`，传给`cooking`的`callback(feast)` `is not a function`。

问题出在倒数的两行，再改：

```js
// 小白第二版
buyFoods(cooking(foodList, callback));
```

结果当然还是报错了：`foodList is not defined`。`cooking(foodList, callback)`明显也不是个函数。

怎么把foodList作为参数传给cooking...想起上面setTimeout的第一个参数callback，整个匿名函数把cooking包起来，括号参数foodList。

```js
// 小白第三版
buyFoods(function(foodList){
    cooking(foodList, callback)
});
```

最后，把callback塞进去。ohhh，跟老师写的一样了。

#### 一点小改动

老师的`console.log('事情安排好了，我先去洗个澡');`是放在`buyFoods(function(foodList){…});`后面的。
执行的时候会出现，去洗澡这句，穿插在了采购食物之间。
```
…
我要开始采购食物啦。。。。
事情安排好了，我先去洗个澡
采购完毕
…
```
我想，是`buyFoods`里有异步代码，里面延迟时，就会先执行与`buyFoods`同一层级的同步代码。

我觉得应该是做完菜才去洗澡，所以想这样改，把洗澡改到`function(feast){}`函数体的最后，也就是打印完菜单就去洗澡。

```js
buyFoods(function(foodsList) {
    cooking(foodsList, function(feast) {
        console.log('----酒席准备好了----');
        for (var i = 0; i < feast.length; i++) {
            console.log(feast[i]);
        }
        console.log('事情安排好了，我先去洗个澡');// 我想改到这里
    });
});

// console.log('事情安排好了，我先去洗个澡'); 老师是写在这里
```
