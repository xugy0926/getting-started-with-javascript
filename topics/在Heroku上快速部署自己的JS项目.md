## 在Heroku上快速部署自己的项目

### Heroku 安装与注册
注册一个 heroku 帐号，可以免费部署5个应用（小于500M）。看看它支持哪些编程语言，Node.js、Ruby、Java、PHP、Python、Go、Scala、Clojure，好像挺多的。我们用的是Node.js，看来是可以的。

![](https://ws3.sinaimg.cn/large/006tKfTcgy1fjdcqi03ftj311o0k5jsi.jpg)

#### 安装

可以看看[官方教程](https://devcenter.heroku.com/articles/heroku-cli)，也可以网上搜一下教程，挺多的。

#### 注册

如果国内的邮箱注册不了，建议用Gmail。

注册好帐号之后，将帐号绑定在电脑上，在终端执行：heroku login

``` javascript
$ heroku login
Enter your Heroku credentials.
Email: javascript@example.com
Password:
Could not find an existing public key.
Would you like to generate one? [Yn]
Generating new SSH public key.
Uploading ssh public key /Users/java/.ssh/id_rsa.pub
```

### 在终端创建Heroku应用

#### 方法一：

1.在iTerm要部署的项目位置执行：heroku create

``` javascript
$ heroku create
Creating sharp-rain-871... done, stack is cedar-14
http://sharp-rain-871.herokuapp.com/ | https://git.heroku.com/sharp-rain-871.git
Git remote heroku added
```

2.再执行：git push heroku master

``` javascript
$ git push heroku master
Counting objects: 343, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (224/224), done.
Writing objects: 100% (250/250), 238.01 KiB, done.
Total 250 (delta 63), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
略...
```

3.启动项目，执行：web: ./bin/www npm start

4.打开项目： heroku open

#### 方法二：

1、和方法一一样，先在终端创建一个heroku项目；

2、把要部署的项目上传到github；

3、打开heroku网站，登录自己的帐户，可以看到在Personal apps下面看到自己创建的项目；

![](https://ws2.sinaimg.cn/large/006tKfTcgy1fjde0wpf6hj30mf04p0su.jpg)
![](https://ws1.sinaimg.cn/large/006tKfTcgy1fjde2afcwhj30y006i0sp.jpg)

4、打开自己刚创建的项目，选择Deploy，并绑定自己的Github帐号。

![](https://ws3.sinaimg.cn/large/006tKfTcgy1fjde73vny4j30xg0ddjry.jpg)

5、搜索自己放在github里要部署的项目，然后点击“Connect”连接。

![](https://ws4.sinaimg.cn/large/006tKfTcgy1fjdeistl4qj30xr09baah.jpg)

6、选择部署的分支，然后点击”Deploy Branch”即可。

![](https://ws1.sinaimg.cn/large/006tKfTcgy1fjderv9jkoj30o30lkq3r.jpg)

7、在页面的右上角，点击“Open app”就看到自己部署的作品啦！

![](https://ws1.sinaimg.cn/large/006tKfTcgy1fjdevzguguj30xp02bjrc.jpg)


## The End

希望对你有用！哈哈哈
