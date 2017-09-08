
http://www.expressjs.com.cn/

express是最成功的基于nodejs的webapp架构之一。一个好的架构能给我们带来什么？更方便的处理视图(html)，更方便的处理路由（/page1，/page2）。
比如，我想设计一个访问`https://xxx.com/page1`的地址就能返回页面`page1.html`，访问`https://xxx.com/page2`的地址就能返回页面`page2.html`。这事搁在express身上太容易解决了。甚至你都不用搞懂它是怎么工作的就能搞定这事。



express提供了一个终端的指令集，可以在终端一键初始化一个项目结构，并立马执行就能启动一个webapp。剩下的你只需要填鸭子一样填入自己的文件和代码。



以下是在本机终端快速生成一个webapp项目。


1. 在本机安装express(我其实更想把这个称为：在本机安装express的终端指令集)
```
> npm install -g express-generator@4

// -g 的意思是全局安装 express-generator@4
```

2. 创建一个项目文件夹
```
> mkdir first-web-app
```

3. 进入项目文件夹
```
> cd first-web-app
```

4. 在first-web-app文件夹下使用express命名创建一个webapp。
```
> express --view=ejs

// --view=ejs的意思是使用ejs的视图引擎
// 强烈提示这步执行完后，要观察终端输出的信息，你会得到创建项目的信息，而且里面有提示你接下来怎么做。
```
5. 安装项目依赖
```
> npm install
```
6. 运行web-app
```
> npm start
```

搞定！赶紧打开浏览器访问localhost:3000或127.0.0.1:3000

同学们，webapp的内容我在js编程课程入门课里只点到为止，给你们树立一个学习方向。后续需要你们自己去深入。
