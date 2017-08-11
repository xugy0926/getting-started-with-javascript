#如何从主项目更新fork的项目？


##step 1——打开：terminal，cd到自己fork后git clone的project下
###以Mac为例，首先需要打开terminal终端，进入到从github上fork的项目，并且该项目被git clone的你自己的本地目录下。
###![Image text](https://github.com/zhanglinalove/my_post_image/blob/master/WechatIMG186.jpeg)

##step 2——step 2 git remote add upstream xxxx
###与上游仓库同步代码之前，必须配置 remote，“xxxx”代表你需要与之保持同步的数据源，本次作业为例，需要键入老师的git项目地址
###![Image text](https://github.com/zhanglinalove/my_post_image/blob/master/WechatIMG187.jpeg)
##step 3——git checkout master
###切换至master分支下，该步骤操作简单，直接操作即可
###![Image text](https://github.com/zhanglinalove/my_post_image/blob/master/WechatIMG188.jpeg)
##step 4——git fetch upstream
###此操作的意思是取上游数据，简而言之，就是将老师的问题，下载至你的本地
###![Image text](https://github.com/zhanglinalove/my_post_image/blob/master/WechatIMG189.jpeg)
##step 5——git merge upstream/master
###进行主节点和上游节点数据的合并
###![Image text](https://github.com/zhanglinalove/my_post_image/blob/master/WechatIMG190.jpeg)
##step 6——git push origin master
###合并后的文件进行push操作，将本地文件上传至github服务器上。
###![Image text](https://github.com/zhanglinalove/my_post_image/blob/master/WechatIMG191.jpeg)


#tips！#
####*1、你自己的文件在push到github之前一定要进行add和commit的操作，否则会有报错的提示*
####*2、操作完成后，去GitHub确认，自己项目文件内容与上游数据一致性，接下来再进行pull request操作*
