# 作业
声明：按代码从上到下的顺序，分别把三个name称为name1、name2、name3。

1.name1是函数output声明所需要的参数，如果按照老师的“声明 → 定义 → 赋值”三步骤来说的话，此时name1只是被声明了，再结合output函数对name1的用法来看，
  此时它可能是任何类型的数据，number、string、object...都可以。
  
2.name2是声明定义了一个变量，并给它赋予‘Hello,JS’这样一个具体的值。

3.name3就是把name2作为一个参数拿给output函数使用
（即name3其实就是name2，假设name2的命名发生变化“name2 → hello”，那么name3也得跟着变才行“name3 → hello”），
 这也相当于给name1定义和赋值，此时name1的值就为name2，数据类型为string。
 之后再次调用output函数时，我们还可以给name1赋予不同的值name4、name5...name_x，name1的数据类型也可能随之改变，当然函数的运行结果也会跟着改变。

# 一个疑问

![](https://ws2.sinaimg.cn/large/006tKfTcgy1fiw3x4c7zoj30rs0fndsz.jpg)
图1——方便理解问题的截图

![](http://ww2.sinaimg.cn/large/006tKfTcgy1fiw39xr971j30m805s0tz.jpg)
<br />图2——再次运行，查看到的情况的确是console.log('事情安排好了，我先去洗个澡')这句代码，在那5秒的间隙里先运行了。

【疑问】如果从正确表达“做饭流程”这方面来说，这样的代码算不算有问题？
