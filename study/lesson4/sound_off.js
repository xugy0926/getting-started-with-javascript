/*
* 模拟报数过程 - 顺序调用
*
* 函数soldierA()代表士兵A, 依次类推。
* startSoundOff()函数是开始报数的处理函数。
*/

function soldierA() {
  console.log("1到");
}

function soldierB() {
  console.log("2到");
}

function soldierC() {
  console.log("3到");
}

function soldierD() {
  console.log("4到");
}

function soldierE() {
  console.log("5到");
}

// 按顺序调用士兵函数开始报数
// 这是一种顺序调用函数的方式，由startSoundOff内部设计好调用的执行流程
function startSoundOff() {
  soldierA();
  soldierB();
  soldierC();
  soldierD();
  soldierE();
}

// 执行报数函数startSoundOff()

startSoundOff();
