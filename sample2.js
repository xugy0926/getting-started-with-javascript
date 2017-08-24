
function prepare() {
    console.log('磨刀。。。扫地。。。洗碗。。。劳动最光荣');

    return true;
}

function buyFoods() {
    console.log('去买菜。。。');

    var foodsList= ['egg','fish','meat'];

    return foodsList;
}

function cooking(foodsList) {
    console.log('开始做菜');

    console.log(foodsList);

    var list = ['鸡蛋西红柿', '红烧肉'];

    return list;
}

function startWorkFlow() {

    var result = prepare();
    
    if (result) {
        var foodsList2 = buyFoods();

        var list = cooking(foodsList2);

        console.log(list);
    }
}

startWorkFlow();