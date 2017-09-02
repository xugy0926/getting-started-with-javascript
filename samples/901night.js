function checkFlightTime(weixin){
    console.log('Begin to check');
    setTimeout(function(){
        weixin('8:00');
    },5000);
}

function weixin(startime){
    console.log('tomorrow 8:00');
}
checkFlightTime(weixin);

