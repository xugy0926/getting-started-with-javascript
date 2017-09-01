## Homework of Lesson 5  

### 什么是函数？

我理解的函数就是一个打包的代码块，可以重复使用。  
函数的结构：函数由关键词function，函数名，参数（小括号里的变量），函数体（花括号里面的代码）构成，即：
```
function functionname(参数){
    函数体
}
```
函数的三要素：参数判断，逻辑处理，返回结果

### 代码分析
```
function output(name) {
    console.log(name);
}

var name = 'Hello,JS';
output(name);
```
第一行代码里面的“name”，是名为output的函数的参数。这里的参数就像我们在解方程式时候的X，Y一样，是用来表明函数的逻辑关系的变量，不是实际的值，所以是可以更改的，即为形参。 如将name改成tittle：  
```
function output(tittle) {
    console.log(tittle);
}

var name = 'Hello,JS';
output(name);
```
整段代码运行的结果依然是“Hello,js”。  
形参的作用在于接受调用该函数时传递的参数。
但是需要注意的是，第一行的“name”和第二行里面的“name“，必须有相同的变量。如果这时候我把第二行的”name“ 改成”B“，就会提示B is undefined，代码无法执行。这时因为改成实际的值后，函数将没有可以接收实参的地方，所以在调用函数的时候不会输出实参的值。  

第五行代码里面的”name“是新定义的一个变量，并把”Hello,JS“ 赋值给了它。更改赋值会影响代码最终运行的结果，如：  
```
function output(name) {
    console.log(name);
}

var name = 'Lesson5';
output(name);
```
实际输出的结果变为“Lesson5”了。  

第六行代码里面的“name”相当于是是把name这个变量传给output 函数，相对于第一行代码中的“name”这里的“name”是一个实际代入的参数，有确定的值，是实参。
值得注意的是，第五行和第六行的“name”都是是可以更改的，但是必须保证名字一致，如把五六行的“name”改成“tittle”后： 
``` 
function output(name) {
    console.log(name);
}

var tittle = 'Hello,JS';
output(tittle);
```
输出结果依然是“Hello,JS”.  

假如我将第二行的代码里面的name改成一个实际的值会发生什么呢？  
```
function output(name) {
    console.log(‘Lesson5’);
}

var name = 'Hello,JS';
output(name);
```
实际输出结果发生了变化，变成Lesson5了。  
因为就整段代码而言，实际先执行的应该是最后一行代码，即调用函数output。当第二段代码更改后，函数内部的逻辑发生了变化，这时函数的意思是无论你传入何种参数，都会打印“Lesson5”这个结果。所以即便是第五行代码里面的变量name的赋值并没有发生变化，整段代码的运行结果也会随着函数代码的变化而变化。  


### 立即返回  

```
function checkFlightSchedule() {
  console.log('开始查航班信息');

  var scheduleInfo = {
    start: '8/23 8:00',
    end: '8/23 10:30',
    from: 'beijing',
    to: 'hangzhou'
  };

  return scheduleInfo.start;
}

// 调用立即函数checkFlightSchedule
var startTime = checkFlightSchedule();
console.log(startTime);
```
立即返回，是指调用一个函数它会立即返回结果。类似于买东西时，我给你钱，你有现货（return）直接给我货，是信息的即时返回。  
上面这段代码的意思是调用一个名为scheduleInfo的函数，函数直接将运行返回结果：8/23 8:00

最后两段代码也可以直接写成  
> console.log(checkFlightSchedule());  

输出的结果是一样的。

需要注意的是，这里的函数需要有return具体的值。如果没有return的值或者return值为空，代码最终执行的结果将是undefined。  


### 间接返回
```
function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  // 模拟构建航班的时间信息
  var scheduleInfo = {
    start: '8/23 8:00',
    end: '8/23 10:30',
    from: 'beijing',
    to: 'hangzhou'
  };

  callback(scheduleInfo.start);
}

function callback(startTime) {
  console.log(startTime);
}
checkFlightSchedule(callback);
```

间接返回的意思就是，函数调用者并不是立即拿到结果。类似于买东西时，分店里没有货了，顾客说，那你用顺丰邮寄给我。这里的顺丰就是返回通道，放在上面这段代码里，就是callback这个回调函数。  
把一个函数作为实参传入另一个函数内部，并在这个函数内部调用，这个被调用的函数就是回调函数。  

这段代码实际运行顺序是：先运行的是最后一行，也就是调用函数checkFightSchedule.然后将callback这个函数作为实参传入函数内部，函数开始运行。先是console.log('开始查航班信息')，然后调用函数callback，并把scheduleInfo.start作为实参传入函数，即代码实际执行的是console.log(schedule.start),即'8/23 8:00'。

### 异步函数

异步是相对同步而言的，同步就是指当一个函数被调用时，它需要把函数内部所有的代码都运行完了，返回调用者需要的值后，下面的代码才能继续运行。  
假如函数里面的数据运算非常庞大，同步调用就意味着调用者必须等待很长一段时间，等被调函数全部运行完下一步代码才能执行。

而异步函数就解决了同步函数导致的代码执行效率问题。它相当于是设置了一个函数返回通道，在调用函数时函数内部代码执行完毕后，通过这个通道传回相应的结果。而在函数内部代码执行的时候，调用者不需要等待，代码可以继续执行下去。  
```
function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  setTimeout(function() {
    var scheduleInfo = {
      start: '8/23 8:00',
      end: '8/23 10:30',
      from: 'beijing',
      to: 'hangzhou'
    };
    callback(scheduleInfo.start);
  }, 5000);
}
function callback(startTime) {
  console.log(startTime);
}
checkFlightSchedule(callback);
```
SetTimeout，即定时器。最初看到这个代码的时候很不理解，为什么setTimeout不用定义就可以直接使用，后来查了一下资料大概知道它其实是一种内置方法，不需要声明就可以直接用。这里通过它实现了异步函数调用。  

> setTimeout(code,millisec)  
> 两个必须的参数：一个调用函数时需要执行的代码串，一个是执行前的等待毫秒数。    

上面的代码意思是5s后再执行callback这个回调函数。我们在这段代码下面再增加一段代码，方便理解这个定时器的作用。  
```
function checkFlightSchedule(callback) {
    console.log('开始查航班信息');
  
    setTimeout(function() {
      var scheduleInfo = {
        start: '8/23 8:00',
        end: '8/23 10:30',
        from: 'beijing',
        to: 'hangzhou'
      };
      callback(scheduleInfo.start);
    }, 5000);
  }
  function callback(startTime) {
    console.log(startTime);
  }
  checkFlightSchedule(callback);
  
  function setOut() {
      console.log('立即出发');
  }
  setOut();
```
整段代码运行结果如下：  
> 开始查航班信息  
> 立即出发  
> 8/23 8:00  

从结果我们可以看到在打印“开始查航班信息”之后，setTimeout中的代码并没有立即执行，而且也不是等待5秒后执行后，再执行prepare()函数。而是先执行了prepare函数，再等待5秒后再执行异步任务。  

也就是说**异步任务是会在主函数运行之后再运行**的。本来按照逻辑，应该是先查航班信息，查到出发时间后再立即出发，但是因为setTimeout方法的这个特点，最后输出的结果出现了混乱。因此在用setTimeout的时候需要格外小心。

### 最近学习的感受

最近学得有点吃力。单独拆一下代码好像都懂，但是要自己写就不是一回事儿了。大概还是练习不够。  
一直在赶作业，马上第七节课了，现在才在做第五节课的作业，有点担心之后能不能跟得上。  
但是老师一直在说第五节就是JS最难的地方，这个搞懂了就搞定了JS，所以有时也会莫名有种自信：不就是一节课的事儿吗？  
昨天单位调休，在家敲了一天代码，总算是把做菜流程捋了一遍。主要是函数里面又有函数，看着看着就懵了！下来接着看，接着敲。  
在上这门课之前，我一直宣称的是和计算机无缘，对代码毫无兴趣。其实现在也算不上有了兴趣，毕竟还有很多东西没有搞明白，但是我已经坚持学了三周多了，并且现在还没有放弃的打算，这真的是一件神奇的事情。  
谢谢老师和同学的陪伴！
继续加油。  