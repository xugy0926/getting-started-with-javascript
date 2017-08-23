
function prepare() {
    console.log('磨刀。。。扫地。。。洗完。。。劳动最光荣');
    return ture;
}

function buyFoods(){
    console.log('去买菜....');
    var foodsList=['egg','fish','meat'];
    return foodsList;
}

function cooking(foodsList){
    console.log('开始做菜');
    console.log(foodslist);
    var list=['西红柿鸡蛋','红烧肉'];
    return list;
}

function startWorkFlow(){
    var result=prepare();
    if(result){
        var foodsList=buyFoods();
        var list=cooking(foodsList);
        console.log(list);
    }
}

startWorkFlow();