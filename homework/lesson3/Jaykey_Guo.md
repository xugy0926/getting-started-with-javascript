### 基础-第三课

![avaScript-Lesson-3-000](../Pictures/3.Screenshots/JavaScript-Lesson-3-0002.png)

驼峰式命名法：

命名的时候要突出**是什么，**能够从名称知道对应是什么东西，有什么作用，在命名的时候也要知道，不是用HOW命名，HOW的描述更多是对应的方法，例如：

```javascript
document.getElementById("demo");
```

#### 一个案例：

```javascript
for (
  var i = 0, j = myLikeColorsList.length - 1;
  i < myLikeColorsList.length / 2;
  i++, j--
) {
if (i!=j){
  console.log(myLikeColorsList[i]);
  console.log(myLikeColorsList[j]);
}else{
  console.log(myLikeColorsList[i]);
}
}
```

两倍速遍历数据的方法，同时从两头开始查找。

//从两头开始烧绳子，节省一半的时间和调用次数。

#### 作业：

![](https://ws1.sinaimg.cn/large/006tNc79gy1fph0nvpfe6j30zk0k0dln.jpg)

我的作业：

![](https://ws3.sinaimg.cn/large/006tNc79ly1fph5qgx1g5j30qi0eftci.jpg)

------

小结：

1. 命名是一件重要的事情，是代码中团队协作的重要部分，不仅要自己看得懂，也要让任何一个懂代码的人看得懂，这样才能提高自己的输出效率和团队的合作效率。
2. 循环的使用，三个部分要齐全，一个是循环的指标（index），一个是循环的条件，最后是循环后对指标的操作。
