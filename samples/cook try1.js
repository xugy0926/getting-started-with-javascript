function buyFoods(weixin) {
    console.log('Begin to go out and buy');
    setTimeout(function(){
        var foodsList = ['egg', 'fish', 'oil', 'pig'];
        console.log(foodsList); 
        return foodsList;
    },4000)
    weixin();      
}
function weixin(){
    console.log('weixin will tell u');
}

buyFoods(weixin);