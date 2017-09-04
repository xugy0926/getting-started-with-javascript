# 【作业提示】
1. 先扫出所有的文件名。
2. 过滤掉非json的名字，得出一个结果全部是json的文件名。
3. 利用jsonfile的方法循环读取内容到一个json的数组变量中。
4. 将内容写入到一个json文件中。
5. 把最终得到的json文件的内容反映到html上，请参考github_index/index.html
6. 修饰一下你的html效果。
7. 部署到你github项目的页面上。


我给出了一个homework_sample.js供你参考。为了不让你直接抄，我里面设置了2个bug，可能需要你调试才能找出bug。

# 【作业步骤】将所有心里话的json文件的内容写入一个json文件中。
1. 引入fs模块／引入file json库。
2. 扫出所有的文件名：第一步定义要扫描的目标文件夹变量（将作为readdir函数的第一个参数），第二步调用fs的readdir读取目标文件夹，得到一个间接返回的结果：err或files（含有目标文件夹下的所有文件名的数组），即fs.readdir的第三个参数（函数）的
3. 把含有.json字符的文件名过滤出来,把所有文件名保存在jsonFiles数组中：第一步定义jsonFiles数组，第二步将files数组中含有.json的文件名（includes）元素放进jsonFiles数组中，这里用了数组的操作方法push和for 循环语句和if条件语句，在这里我将老师homework_sample中的（.md）改成（.json）。
4. 循环取出json文件的内容，并都存在jsonList数组内。读取出错的文件名存在errorFiles数组内。第一步定义jsonList数组和errorFiles数组。第二步，用for循环，jsonfile.readFileSync函数(以文件名（路径＋jsonFiles数组的要素）作为参数)读出文件内容，并将内容放入jsonList数组里。并用try,catch获得读取出错的文件名，放进errorFiles数组中。在这里我将老师给的sample中放入jsonList数组的jsonFiles(i)改成content,因为content是每次循环都重新定义的，所以每次循环content的内容都是新文件的内容，如果是jsonFiles(i)，就变成了将文件名放入数组中了。第三步，用jsonfile.writeFileSync分别将jsonList和errorFiles数组分别写入两个json文件中。
5. 在github上建立一个项目地址，克隆到本地项目文件夹内，并在本地项目文件夹内放index.html和同一目录下public文件夹，将用到的css和js文件放入其中。在index.html内，vue需要的数组内容我用拷贝的方式。试了很多次建一个js文件，并在html文件的head里引用次js文件，但是还是做不到传数据过去，弄不明白。（注：后来参考了邢亚铭同学的作业和老师关于定义完函数立即执行的文章才实现了利用js提供数据到html）
6. 修改html效果。
7. 将项目push到github上，并生成页面,地址如下：
网页地址 https://sunrise81.github.io/sunrise-personal-web/
项目地址 https://github.com/sunrise81/sunrise-personal-web