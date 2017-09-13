
https://github.com/mzabriskie/axios

前端要访问服务端数据，服务端访问另一个服务端数据，这两种访问都需要用到http客户端。

axios是一个在全后端通吃的HTTP客户端。我认为你在js学习过程中，只需要把axios搞定怎么用，就可以解决所有http相关的请求。

前后端通吃是axios的优势，但更牛的是，它能把处理写成链式结构。
```javascript
axios.get().then().then().catch();
```
以上的处理流程解释如下:

axios.get()获得的结果给到第一个then()，第一个then处理完后给到第二个then()。如果中间过程发生错误，会直接跳到cath()里。

事实上axios.get()是一个异步函数，axios.get()的异步回来后才会调用后面的then()函数。以这样的推理，整个axios.get().then().then().catch()就是一个异步函数链条。


#### Get请求
```javascript
axios.get('/api')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
```javascript
// 案例

axios.get('https://js.xinshengdaxue.com/api/v1/learnJS/course/1/words')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
#### Post请求
```javascript
axios.post('/api', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
```javascript
//案例

axios.post('https://js.xinshengdaxue.com/api/v1/learnJS/sayToMe', {
    name: '***', // 你的名字（你要交第九次作业？一定要和前面交作业用的名字一样哟，否则我没办法统计你的作业次数）
    account: '******', // 你注册新生大学的账号
    content: '老师真酷~~' // 你想对老师说的真心话
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

