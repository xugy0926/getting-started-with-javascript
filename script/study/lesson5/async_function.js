// 模拟异步处理的手法

// 定义一个函数，函数名为callback
function callback() {
  console.log('我终于被调用了');
}

// 5秒钟后调用callback函数
setTimeout(callback, 5000);
