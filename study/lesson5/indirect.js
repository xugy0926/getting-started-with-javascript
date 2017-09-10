// 定义函数callback
function callback() {
  console.log('我跑完了');
}

// 定义函数run，run接收一个函数类型的参数，当执行完动作后，调用该函数。
function run(2b) {
  console.log('🏃🏃🏃🏃🏃');
  2b();
}

// 调用函数run，并把函数callback当参数传过去
run(callback);