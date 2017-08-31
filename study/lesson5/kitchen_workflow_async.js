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

// 做准备工作的函数
function prepare() {
  console.log('努力磨刀...努力洗碗...努力打扫...劳动最光荣');
  return (Math.random() > 0.5);
}

// 做菜的函数
function cooking(foodsList, callback) {
  console.log('开始做菜啦~~~');

  // 模拟5秒后通过callback返回结果
  setTimeout(function() {
    console.log('今天要做这些菜' + foodsList);
    console.log('大功告成，上菜');

    var feast = ['鸡蛋西红柿', '红烧肉', '红烧鱼'];
    callback(feast);
  }, 5000);
}

//------------------------------------------------

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

// 干活啦~~
startWork();
