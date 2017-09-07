## 第七课作业

【技术要求】

1. 使用filejson这个库，把同学们的json文件汇总到一个json文件中。
2. 用vue实现一个html，把json文件的内容展示出来。

【提示】

1. 先扫出所有的文件名。
2. 过滤掉非json的名字，得出一个结果全部是json的文件名。
3. 利用jsonfile的方法循环读取内容到一个json的数组变量中。
4. 将内容写入到一个json文件中。
5. 把最终得到的json文件的内容反映到html上，请参考github_index/index.html
6. 修饰一下你的html效果。
7. 部署到你github项目的页面上。

---

### 我的操作步骤：

1. 先是学习老师的几个例子，观察jsonfile.readFileSync， jsonfile.writeFileSync，jsonFile.readFile，jsonFile.writeFile几个函数的用法和区别。只有jsonfile.readFileSync是有直接返回值。

2. 发现老师例子里的两个坑：

   - 过滤json文件名时的`.md`:

   ```javascript
    //把含有"json"字符的文件名过滤出来,把所有文件保存在jsonFiles数组中
     var jsonFiles = [];
     for (var i = 0; i < files.length; i++) {
       if (files[i].includes('.md')) {
         jsonFiles.push(files[i]);
       }
     }
   ```

   -  读取心里话是的`jsonFiles.push(files[i]);`:

   ```javascript
   // 读取json文件

         var content = jsonfile.readFileSync(pathString + jsonFiles[i]);

         jsonList.push(jsonFiles[i]);
   ```

3. 在形成index.html的时候卡了很久，不知道如何将json文件中的内容在html中显示。看了老师的index.html也没明白，最后查看其他同学的作业，发现罗陆军同学的作业步骤，是先把数据内容放在js文件里，然后通过head里调用js文件来实现。照猫画虎，完成html。

4. 以下是最终的HTML。

   [新生大学javascript学习心里话](https://yousl.github.io/allwords/)

