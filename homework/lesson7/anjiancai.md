
项目地址：https://github.com/jiancaian/testwordsfromtheheart

网页地址：https://jiancaian.github.io/testwordsfromtheheart/

操作顺序：

1、在words-from-the-heart文件夹下新建一个test文件夹，在文件夹下新建一个package.json文件（一开始自己错误的命名成.js），然后在编写的package.json文件下打开集成终端，cd到test后，输入npm install,自动安装package.json文件中的jsonfile第三方包，此时在test文件下有node_modules文件夹生成，即安装的jsonfile包。

2、在test文件夹下新建一个index.js文件，copy徐老师的homework_sample.js文件内容。徐老师已经提示有bug,自己共修改三处：一是修改第八行中目标文件夹路径，即var pathString = '../../my_project3/words-from-the-heart/'，看到微信群中说到用../../向上返回文件夹，与终端中用cd ..类似；二是第26行中筛选文件夹中的json文件，应为files[i].includes('.json')这样表示；三是第38行读取json文件内容并写入至jsonList,应是jsonList.push(content)。运行index.js文件，正常下生成all_words和error_data的json文件。

以上两步实现了把内容读取至一个json文件中。接下来重点是把json文件内容展示到html中。

3、在test文件夹下新建一个index.html文件，同样copy徐老师的index.html，并复制粘贴包含style.css和vue.min.js的public文件夹。然后修饰index.html文件，一共更改了两处，一是在标题JavaScript编程入门下加入文本信息，<p>授课老师：徐高阳</p>
<p>授课时间：20170808--20170914 每周二和周四晚上8:00--9:00</p>
<p>网页制作：安建才 20170910--23:00</p>
二是把汇总到all_words.json文件中内容全选复制，赋值给index.html文件第56行中变量wordsList。完成以上操作，即可用点击index.html文件查看效果。

4、部署到github上。
新建一个库testwordsfromtheheart,生成一个地址https://github.com/jiancaian/testwordsfromtheheart.git，然后用终端cd words-from-the-heart，git clone 上述地址，此时在words-from-the-heart文件夹下生产一个testwordsfromtheheart文件夹，将通过上述1、2、3步在test文件下的内容全选并复制，粘贴至testwordsfromtheheart文件夹下。此时在终端依次执行git status, git add -A,
git commit -m "the first html", git push origin master,完成从本地仓库上传至远程仓库。
接下来就是生产一个网页文件的地址，在testwordsfromtheheart仓库中点击setting,然后下来找到GitHub Pages 的 Source,选择master branch ，然后点击save保存，稍等片刻，GitHub就会给你生产一个网址，即https://github.com/jiancaian/testwordsfromtheheart，点击网址就能看到部署的网页。

总结：以上步骤基本都是抄的，只对其中的很小一部分进行修改，通过完成以上步骤，对建立网页       有了初步的认识。接下来就是优化网页，让网页好看一些。
   
     在操作前心理一直畏惧，感觉好复杂啊，自己搞不定。实操一遍，觉得还可以，重点是思路要清晰，完成后幸福感满满。


【项目背景】

前期收集了同学们的心里话，我想把这些内容整理到一个页面上展示。

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

我给出了一个homework_sample.js供你参考。为了不让你直接抄，我里面设置了2个bug，可能需要你调试才能找出bug。

