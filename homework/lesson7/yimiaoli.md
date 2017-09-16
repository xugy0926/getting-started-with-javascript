### 作业成果部分
网页地址 ：http://warmplant.cn/rouor/
项目地址 ：https://github.com/rouor/rouor

### 引入第三方库
1. 首先要新建package.json文件，这是一个入口。
2. 其中name 和版本号是最重要的。
3. JS前端的重点和难点在于<script> js code </script>用这个去渲染 <body></body>里面的内容
4. 在 var object ={
  el:''[el里面指的是具体内容的锚点，div去设置，因为下面的data只会渲染锚点里面的东西]
  data:{

  }
}
5. vue就是JS在浏览器环境中使用的第三方库。
6. jsonfile.readFileSync 意思是读取文件内容并立即返回
7. var content = jsonfile.readFileSync(pathString + jsonFiles[i]);其中=是赋值；jsonfile.readFileSync是方法。

### 遇到的大坑
1. 相对路径： 本地测试第一遍的时候，只有没更新的网站，是因为我没有修改本地引入vue的相对路径和css的相对路径，看了2遍Topic的内容，重新做，测试成果。
2. 在本地测试成功的基础上，上传到我的github里，网页还是不能正常显示，倒腾了半天，刚开始以为要把相对路径写成必须是网站的地址，后面发现不用；其实我没有把public文件夹上传到我的rouor repo，所以vue得引用和css都不成功。就这个内容折腾了一下午。但是我忍住没有在群里问。当时的心路历程是这样的：好焦虑怎么办做不出来——要在群里问——但是，转念想，昨天最后一节课，徐老师还说了要在编代码之前多想，**想清楚再下手，而不是不停的不动脑子的去做。**因此，我调整了一下焦虑的心——用逻辑分析一下——本地显示正常，git显示不出来vue和css的原因只可能是出在路径上——重新检查，把public文件夹上传。——bingo!
3. 因此学到了解决bug，最重要的是先冷静下来，根据逻辑课里学到的知识做逻辑的分类思考，然后分别去检查。
