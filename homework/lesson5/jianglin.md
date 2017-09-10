###姜琳第五次课作业

####作业

![](https://o3b126ie1.qnssl.com/avatar/081d10a4-6e49-47a5-8f9b-ca7d48dacb78)

第1行的`name`是函数定义中的函数参数，在第2行，函数定义的内部调用对了这个参数`name`。

第5行的`name`是定义的变量，这个变量的名字是"name"。

第6行的`name`是函数output调用变量"name"，值是字符串'Hello,JS'。

总之，第1行和第2行的name指的是参数，二者应该一致。第5行和第6行的name指的是变量，二者应该一致。


####练习笔记

	// 采购食物的函数
	function buyFoods(callback) {
	  console.log('我要开始采购食物啦。。。。');

	  // 模拟5秒后通过callback返回结果
	 	 setTimeout(function() {
    console.log('采购完毕');
    var foodsList = ['fish', 'egg', 'meat'];
    callback(foodsList);
	 	 }, 5000);
	}
	// 流程控制函数
	function startWork() {
	  var success = prepare();
	
	  if (!success) {
	    console.log('还没准备好');
	    return;
	  }
	
	  buyFoods(function(foodsList) {
	    cooking(foodsList, function(feast) {
	      console.log('----酒席准备好了----');
	      for (var i = 0; i < feast.length; i++) {
	        console.log(feast[i]);
	      }
	    });
	  });
	  console.log('事情安排好了，我先去洗个澡');
	}
这里的callback是形参，可以说是“形式函数参数”，这个名字之所以是callback，是为了表示它的功能。而在整篇代码里，没有明确的定义callback这个函数，而是在调用的时候，直接定义了一个匿名函数，阅后即焚（感谢何伟同学的指导）。
这样做的好处，我自己的理解，一开始是以为能使代码更可读，但是在练习敲了这段代码之后，认为这种方式应该是在定义buyFoods的时候，只是定义了这个函数需要有回调的功能，但是具体怎么回调，在定义的时候不确定，这样就不唯一。然后在调用的时候，可以根据不同的调用需求，定义不同的回调函数。当然如果每次回调方式完全一样的话，那么在定义的时候就把回调函数写清楚，是更方便的选择。

####听课笔记

- 函数定义里的变量和调用的变量完全不是一回事。

`function run(name1){console.log(name1);}`

`var name = 'xugaoyang';`

`run(name);`

name和name1是有区别的。

- callback名字叫做**回调**，但实际上是调用一个函数去处理，和**返回**不同。

**异步**是回调的一种方式。

函数定义在哪里，都是可以使用。和位置没有绝对的关系。


	function callback(){
	    console.log('I finished running')
	}
	function run(cb){
	    console.log('run run run run run');
	    cb();
	}
	run(callback);


