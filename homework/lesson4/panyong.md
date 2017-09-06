# 第四节课 小结

首先，谢谢老师，第四节课本应8月24日就关闭，没想到8月27日竟然还可以看到。也发现之前听过一次的内容，竟然全忘了，就算去看PPT也回忆不起讲的内容了。于是，拿起手机边听课，边用电脑做文字笔记。再次听课，收获很大。

这堂课，最大的收获是，通过案例“厨房办一桌酒席工作流程”，理解了编程的思路，这个思路对实际问题到代码的转换有指导意义。

笑来老师说教是最好的学，想象自己将要讲课时，去听课，又体会到了新的收获，发现老师教的非常好。老师教函数时：
1）先聊，实际生活场景中的“调用”：买可乐，理发，打印。
2）再聊，代码中函数的定义与调用：非常简单。
3）最后，演示了实际生活场景到程序代码的映射：报数，厨房办一桌酒席。

一切都变得简单、自然。蕴含的编程思路对解决实际问题有指导意义。不像一般的将函数的课程，就只有语法知识，没有解决问题的编程思路，听了也就只是听了，对运用没有指导意义。

下面是老师课程的教学流程：

## 初学git终端命令使用注意事项
先ls或pwd，知道当前在哪里，确保进入到自己的工作目录。（知道自己在哪儿，知道自己去哪儿，然后再开始工作）


## 函数(function)
### 1、生活中的“调用”讨论

```
我要买瓶可乐。我要理发。我要打印。

“调用”的关键点：
1）明确目标（如：理发）。
2）给予目标必要信息（如：发型要求）。
3）目标处理返回结果。
```

### 2、函数的定义与调用
```
//定义
function counter (num){ 
    num++; 
    return num;
}

//调用(执行)函数
counter(num);

```
### 3、生活场景映射到代码的思路

#### 报数 - 轮流
```
报数规则：
1）从左往右，轮流报数
2）我说“开始”，执行报数。

映射到代码：

1）报数代码
function personC()
{
    console.log('3');
}

2)我说“开始”，执行轮流报数
function startSoundOff(){
    personA();personB();personC();......
}
```
#### 报数 - 通知
```
规则：第一个开始报数，第一个报数后通知下一个报数。

映射到代码：

function personB()
{
    console.log('2');
    personC();
}
function personA()
{
    console.log('1');
    personB();
}
function startSoundOff(){
    personA();
}
```
### 4、厨房的工作流程：办一桌酒席
```
//准备工作
function prepare() {
    console.log('磨刀。。。扫地。。。洗碗。。。劳动最光荣！');

    return true; //返回值的方式，告诉调用者，我准备工作完成状态。
}

//买菜
function bugFoods() {
    console.log('去买菜...');

    var foodsList=['egg','fish','meat'];

    return foodsList; //买完菜了，返回菜
}

//做菜
function cooking(foodsList) {
    console.log('开始做菜');

    console.log(foodsList);

    var list = ['西红柿炒蛋','红烧肉'];

    return list;
}

//startWorkFlow，是做一桌菜的的流程，也是编程的思路，老师讲的非常好，而且例子举的非常可口。

//老师的讲解流程是，先讲解prepare(),buyFoods()等，再在startWorkFlow()中去调用。

//其实，也可以先讲解startWorkFlow()，先理清工作流程，然后再进入到prepare(),buyFoods()等具体实现每一个函数的功能。

function startWorkFlow()
{
    //准备
    var result = prepare();

    if (result) {

        //买菜
        var foodsList = buyFoods();
        
        //做菜
        var list = cooking(foodsList);

        //上菜
        console.log(list);
    }
}

// 干活啦~~
startWorkFlow();
```

#### VUE让数据动起来
以styde/lesson2/my_personal_info_page.html为例，改变网页中的数据。

1、引入vue
```
 <script src="https://unpkg.com/vue"></script>
```
2、vue的使用
```
var app = new Vue({
  el: '#app',
  data: {
    person: xiaoming
  }
})
```

vue这一部分，暂时没管，后续再研究。

#### Visual Studio Code 的用法

这要演示了插件的扩展安装(`ctrl+shift+x`)与使用(`ctrl+shift+p`)。