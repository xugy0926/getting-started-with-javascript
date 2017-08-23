/*
* 模拟报数过程 - 嵌套调用
*
* 函数soldierA()代表士兵A, 以此类推。
* startSoundOff()函数是开始报数的处理函数。每个士兵报完数后告诉下一个士兵继续报数。
* 这是函数嵌套的调用方式。
*/

function soldierA() {
  console.log('1到');
  soldierB();
}

function soldierB() {
  console.log('2到');
  soldierC();
}

function soldierC() {
  console.log('3到');
  soldierD();
}

function soldierD() {
  console.log('4到');
  soldierE();
}

function soldierE() {
  console.log('5到');
}

// startSoundOff()只调用排头士兵执行开始报数
function startSoundOff() {
  soldierA();
}

// 执行报数函数startSoundOff()
startSoundOff();
