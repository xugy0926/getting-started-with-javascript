## 第九课内容总结
### 作业部分
后进生，作业中的接口已经无法调用，好在平时工作中会给前端同事写接口，所以对接口调用并不陌生。根据 axios 官方说明，完成作业中 post 请求接口调用。
### 课程内容部分
1. 两个函数异步调用，发生结果嵌套时，第二个异步调用需放置在第一个异步调用中，已防止意外情况，因为第二个异步处理开始时无法确保第一个异步处理已完成。
```
function callback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
  
  for (var i = 0; i < files.length; i++) {
    if (files[i].endsWith('.json')) {
      names.push(files[i]);
    }
  }
}

fs.readdir(dirPathString, callback);
fs.writeFile(outputPathString, names, callback2);
```
正确写法

```
function callback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }
  
  for (var i = 0; i < files.length; i++) {
    if (files[i].endsWith('.json')) {
      names.push(files[i]);
    }
  }
  
  fs.writeFile(outputPathString, names, callback2);
}

fs.readdir(dirPathString, callback);
```
