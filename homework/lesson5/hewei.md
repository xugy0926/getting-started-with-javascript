# 第五课作业

## 回调和异步

### flight_schedule_2.js

这个例子简单地介绍了一下回调，以我目前的理解，就是在一个函数内再调用另一个函数。

为什么要这么做呢？因为两个函数之间有交互，我要把一个函数里面处理后产生的结果，传递给另一个函数处理。虽然用最原始的 `return` 这种方法将返回值传递给另一个函数进行处理也是可以的，但是采用回调的方式，能够简化代码，省去了 `return` 的步骤。

但是，因为这个例子只有前端部分的内容，所以只看这个例子的话，对于回调并没有深入的理解。

### flight_schedule_3.js

这个例子，在前一个例子的基础上，加上了人工制造的延迟，是为了模拟前端向后端获取数据、等待数据返回并接收数据的过程。

但是除此之外，和前一个例子没什么区别，所以还是对这个代码理解得不是很好。

为了便于自己理解，将 `checkFlightSchedule()` 函数修改为如下形式：

```
console.log('开始查航班信息');

setTimeout(function() {
    // do something
    callback(scheduleInfo.start);
}, 5000);

console.log('先去喝口水'); // 自己补充的一行代码
```

这样一来，终端的输出结果就是下面这样子的：

```
开始查航班信息
先去喝口水
通过反馈通道获得了信息
8/23 8:00
```

可以看到，秘书在等待航班信息返回的过程中去喝了口水，回来之后看到了信息。在等待信息返回的过程中，还可以做别的事情，不用干等着。而在默认的情况下，开始查信息之后，如果没有获取到返回的结果，是没法做别的事情的。

补充了上面那一行代码之后，感觉对回调的理解更深刻一点了。

### kitchen_workflow_async.js

这个例子，把之前准备酒席的代码，改成了异步的形式。

因为是初次接触 **回调** 这个概念，所以异步版本的酒席代码，看着还有点儿乱糟糟的。自己手动整理了一下，把代码改成了下面的形式，便于自己分析理解：

```
function buyFoods(callback) {
    console.log('start buying...');

    setTimeout(function() {
        // do shopping
        var foodsList = XXX;
        callback(foodsList);
    }, timeOfShopping);
}

function prepare() { // preparation }

function cooking(foodsList, callback) {
    console.log('start cooking');

    setTimeout(function() {
        // cooking
        var feast = XXX;
        callback(feast);
    }, timeOfCooking);
}

function startWork() {
    if (!prepare()) {
        console.log('Not ready yet');
        return;
    }

    buyFoods(function(foodsList) {
        // when foods were bought to kitchen
        // passing foodsList to anonymous function/callback function
        // to do the following cooking things
        cooking(foodsList, function(feast) {
            // cook the foods from buyFoods()
            // and deliever the feast to guests
            console.log('Let\'s eat!!!');
        });
    });

    console.log('All done, have a rest');
}

// above are all workflow
// the REAL WORK is done here!
startWork();
```

通过自己重新手写这段代码，真的是有了更深的理解！就在二十多分钟前，还对这段代码懵懵懂懂。经过这二十多分钟的重写+分析，理清了整个异步执行的流程，这种攻克难关的感觉太美妙了！！！哈哈。

这二十多分钟，给我带来的宝贵经验就是：不要只是看代码，要去写！一边写一边分析，一遍不行两遍，两遍不行三遍，最后肯定能看懂、看熟、看透代码。成长，就是在这个过程中产生的。

### 自己加餐

读完了老师的代码，感觉还不过瘾，那就自己再写一个吧。

```
...
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
...
<script>
    var result;

    console.log('Example started.');

    $.ajax({
        url: "https://api.apis.guru/v2/list.json",
        async: false,
        success: function (data, status) {
            result = data;
            console.log(JSON.stringify(result).length);
        }
    });

    console.log('Example ended.');
</script>
...
```

上面的代码只列出了关键的部分。通过设置 `ajax` 函数中的 `async` 参数，可以分别展示 `同步` 和 `异步` 执行的结果。各自的执行结果如下：

```
// async: false 同步执行
Example started.
888996
Example ended.

// async: true 异步执行
Example started.
Example ended.
888996
```

从上面的执行结果可以看出来：同步执行的时候，必须等待 `ajax` 请求获取到了所返回的结果并进行处理之后，才会执行后面的代码。
而异步执行就不是这样了，发起 `ajax` 请求之后，一边等待结果返回，一边继续做其他的事情。

### 新发现

```
getData(writeData);

console.log('Something else happen');


function getData(callback) {
    var timer = setTimeout(function() {
       var dataArray = [123, 456, 789];

       callback(dataArray);
    }, 3000);
}

function writeData(myData) {
    console.log(myData);
}
```

上面的代码，会先输出什么呢？是那一句英文。为什么会这样？因为在执行第一行的 `getData` 之后，这个函数在 3 秒钟之后才会给出结果。而代码同时执行到了之后的输出语句，就先把那句英文输出了，然后在 `getData` 的执行时间到达 3 秒钟之后，再输出数组。

前面自己对代码理解的不够透彻，还以为会先输出数组，再输出英文。而经过对这一段代码的剖析，让自己对回调函数的理解又有了进一步的深入。

### 总结

最后，再总结一下回调的基本格式：

```
function caller(callback) {
    // do something
    var data = XXX;
    // pass data to callee
    callback(data);
}

funtion callee(data) {
    // do following thing
}

caller(callee);
```

## 区分同名的变量

![](https://o3b126ie1.qnssl.com/avatar/081d10a4-6e49-47a5-8f9b-ca7d48dacb78)

在上图中，第一行代码里的 `name`，表示不管用户传入的是什么参数，都会通过 `output` 这个函数将其打印出来。

而第五行和第六行的 `name`，则是用户所要打印的内容的一个"昵称"。我们用这个昵称来指代用户所要输出的内容，没有这个昵称当然也完全没关系，但是加上这个昵称，能够使函数更容易阅读。比如用户如果要输出一大段文字，把这段文字直接作为参数传给 `output` 函数的话，不管是阅读代码，还是修改代码，都会很不方便。而用昵称来指代这一段文字之后，代码就会清晰很多。

将代码重写一下，下面的形式，应该就更容易理解了：

```
function output(anythingYouWantToOutput) {
    console.log(anythingYouWantToOutput);
}

var content = "三国演义全文";
output(content);
```

猜测老师之所以要把代码写成图里的那种形式，就是为了让大家对代码的 `形参` 和 `实参` 有一个更好的理解，因为这个问题迟早要遇到，不如让大家一开始就去思考、去研究。

参考资料：

- [Understanding JavaScript Callbacks](https://closebrace.com/tutorials/2017-01-17/understanding-javascript-callbacks)：通过实例演示，来让读者对回调函数有一个逐步深入的认识。
- [How to format a float in javascript?](https://stackoverflow.com/questions/661562/how-to-format-a-float-in-javascript)：介绍了如何设置小数点的精度。
- [What does setTimeout return?](https://stackoverflow.com/questions/10068981/what-does-settimeout-return)：解释了 `setTimeout()` 函数所返回的整数的含义。