/*
* 模拟报数过程 - 调用对象方法
*
* 对象soldierA代表士兵A, 依次类推。
* startSoundOff()函数是开始报数的处理函数。
*/

// 定义对象soldierA
var soldierA = {
  soundOff: function() {
    console.log('1到');
  }
};

// 定义对象soldierA
var soldierB = {
  soundOff: function() {
    console.log('2到');
  }
};

// 定义对象soldierA
var soldierC = {
  soundOff: function() {
    console.log('3到');
  }
};

// 定义对象soldierA
var soldierD = {
  soundOff: function() {
    console.log('4到');
  }
};

// 定义对象soldierA
var soldierE = {
  soundOff: function() {
    console.log('5到');
  }
};

// startSoundOff()按顺序调用每个对象的报数方法
function startSoundOff() {
  soldierA.soundOff();
  soldierB.soundOff();
  soldierC.soundOff();
  soldierD.soundOff();
  soldierE.soundOff();
}

// 执行报数函数startSoundOff()
startSoundOff();
