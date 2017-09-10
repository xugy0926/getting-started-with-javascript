function soldierA(number, allCount) {
  console.log('1到');

  if (number < allCount) {
    return soldierB(number + 1, allCount);
  } else {
    return 'finished';
  }
}

function soldierB(number, allCount) {
  console.log('2到');
  if (number < allCount) {
    return soldierC(number + 1, allCount);
  } else {
    return 'finished';
  }
}

function soldierC(number, allCount) {
  console.log('3到');
  if (number < allCount) {
    return soldierD(number + 1, allCount);
  } else {
    return 'finished';
  }
}

function soldierD(number, allCount) {
  console.log('4到');
  if (number < allCount) {
    return soldierE(number + 1, allCount);
  } else {
    return 'finished';
  }
}

function soldierE(number, allCount) {
  console.log('5到');

  if (number < allCount) {
    return 'unfinished'; //还没结束啊。人呢？有人吗。。。'
  } else {
    return 'finished';
  }
}

function startSoundOff() {
  var allCount = 6;
  var result = soldierA(1, allCount);

  if (result === 'finished') {
    console.log('好！');
  } else {
    console.log('是谁没报数，给我站出来！！');
  }
}

startSoundOff();
