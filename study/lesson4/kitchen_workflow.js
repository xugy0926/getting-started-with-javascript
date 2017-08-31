// 采购食物的函数
function buyFoods() {
  console.log('采购原料和菜');
  var foodsList = ['fish', 'egg', 'meat'];
  return foodsList;
}

// 做准备工作的函数
function prepare() {
  console.log('努力磨刀...努力洗碗...努力打扫...劳动最光荣');
  return (Math.random() > 0.5);
}

// 做菜的函数
//
function cooking(foodsList) {
  console.log('今天要做这些菜' + foodsList);
  console.log('大工告成，上菜');

  var feast = ['鸡蛋西红柿', '红烧肉', '红烧鱼'];
  return feast;
}

// 流程控制函数
function startWork() {
  var success = prepare();

  if (success) {
    var foodsList = buyFoods();
    var feast = cooking(foodsList);

    console.log('----酒席准备好了----');

    for (var i = 0; i < feast.length; i++) {
      console.log(feast[i]);
    }
  } else {
    console.log('还没准备好');
  }
}

// 干活啦~~
startWork();
