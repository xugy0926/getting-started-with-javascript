## 作业-1

要求：阅读study/lesson5的sample代码，并执行观察结果。

### 完成情况

逐个sample代码对打执行，对数组中 push/pop/shift/.indexof的用法印象最深，kitchen_workflow_async 耗时最长。



#### 在kitchen_workflow_async代码中：

(1)增加读取随机数结果语句；

(2)增加运行观察节点console.log(1)-console.log(12)，了解：函数中只有return后的内容不再执行，其他还会在调用其它函数后返回继续执行。


#### /----- 代码部分 -----/

function buyFoods(callback) {

    console.log('采购原料和菜');
    
    setTimeout(function() {
        console.log('采购完毕');
       
        var foodsList = ['fish','egg','meat'];
        console.log(1);
        callback(foodsList);
        console.log(2);
    }, 5000);   
    console.log(3);
}

function prepare() {
    
    console.log('努力磨刀...努力洗碗...努力打扫...劳动最光荣');
    //return (Math.random() > 0.5); 原句式，以下为自己修改。
    i = Math.random();
    console.log(i);
    return (i > 0.5);
    console.log(4);
}

function cooking(foodsList, callback) {

    console.log('开始做菜啦~~~');

    setTimeout(function() {
        console.log('今天要做这些菜' + foodsList);
        console.log('大功告成，上菜');
    
        var feast = ['鸡蛋西红柿','红烧肉','红烧鱼'];
        console.log(5);
        callback(feast);
        console.log(6);
    },5000);
    console.log(7);
}

function startWork() {
    
    var success = prepare();

    console.log(8);
    if (!success) {
        console.log('还没准备好');
        return;

    }   
    console.log(9);
    
    buyFoods(function(foodsList) {
       
        console.log(10);
        cooking(foodsList,function(feast) {
            console.log('----- 酒席准备好了 -----');
            for (var i = 0; i < feast.length; i++) {
                console.log(feast[i]);
            }
            console.log(11);
        });
        console.log(12);
    });

        console.log('事情安排好了，我先去洗个澡');
}

startWork();


#### /----- 执行结果1 -----/

an-macprodeMacBook-Pro:Documents kan_macpro$ node JS-L5-kitchen.js

努力磨刀...努力洗碗...努力打扫...劳动最光荣
0.3553369629799288
8
还没准备好


#### /----- 执行结果2 -----/

an-macprodeMacBook-Pro:Documents kan_macpro$ node JS-L5-kitchen.js

努力磨刀...努力洗碗...努力打扫...劳动最光荣
0.7182601417865426
8
9
采购原料和菜
3
事情安排好了，我先去洗个澡
采购完毕
1
10
开始做菜啦~~~
7
12
2
今天要做这些菜fish,egg,meat
大功告成，上菜
5
----- 酒席准备好了 -----
鸡蛋西红柿
红烧肉
红烧鱼
11
6

 
 

## 作业-2

要求：图片上的代码，第1行、第5行、第6行的name变量都有什么差异？请分析差异提交你的结论。以你命名的md文件提交。

![](https://ws3.sinaimg.cn/large/006tKfTcly1fj58adl6wbj30ls09qgmz.jpg)

### 我的回答

第1行的name是声明函数方法output的参数名称，因在函数内部直接使用到，不能省略。可以是任意名称，内部用名应与其保持一致。

第5行的name是声明的一个新的变量，并定义赋值，第6行的name是对新声明的变量执行output函数方法，第5行的name可以是其他任意变量名，第6行name与其保持一致，运行结果完全相同。


