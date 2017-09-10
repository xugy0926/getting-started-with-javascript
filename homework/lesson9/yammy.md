## 部署好的静态网页
[静态页面](https://yammmy.github.io/post-words/)
[代码地址](https://github.com/Yammmy/post-words/)

参考老师的代码，修改成使用填写表单的方式来发送想说的话

## 作业新得
起初调试代码，需要不断的测试，我有点担心测试多了会不会刷屏[心里话页面](https://js.xinshengdaxue.com/sayToTeacher)，为此我还故意先设置一个任意字符作为新大账号，酱紫返回的response状态 code 就是错误代号2。

后来代码写的差不多，有信心真实测试才发现，真是想多了：如果同一个新大账号 post 多次数据，后一次 post 出去的数据会覆盖之前的数据。

关于这次作业，我的思路是：既然axios能发出特定字段的 post 请求，如果想要使用表单的方式发送，只需要使用 js 代码抓取表单 submit 之后的字段并赋值给 post 的对象字段就可以了。

经过一段 Google，成功找到抓取表单字段的方法。在配合 bootstrap 的表单美化，成功解决问题。

还在考虑更好的方法中，先交一个初版的作业。