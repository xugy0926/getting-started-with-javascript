(function (window) {
var words = [
  {
    "avatar": "http://tva2.sinaimg.cn/crop.558.0.1143.1143.180/670e76acgw1ehgchgijn2j21kw0vyqrf.jpg",
    "name": "Andrea",
    "words": "运用逻辑优势，开启业余程序员大门！"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tNc79ly1fig6fhvtbvj30zk0zkn4f.jpg",
    "name": "周泠秋",
    "words": "在人们看来编程是一件很难的事，但是正因为难做起来才有意思啊"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tNc79gy1fio9xha9hjj30hs0hsdgr.jpg",
    "name": "蔡东言",
    "words": "一入编程深似海。。。。"
  },
  {
    "avatar": "http://opkslf6o7.bkt.clouddn.com/image/jpg/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
    "name": "曹振",
    "words": "利用这次难得的机会系统学习javascript和前端知识，向着全栈的目标前进"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tKfTcgy1fikl7frqgvj30hs0hsglv.jpg",
    "name": "陈玲敏",
    "words": "正在学Ruby On Rails。Javascript看着很强大，到哪都能遇到它。接触的时候有种很神奇的感觉。"
  },
  {
    "avatar": "http://img0.imgtn.bdimg.com/it/u=1649639124,2757239308&fm=27&gp=0.jpg",
    "name": "崔雨薇",
    "words": "学习有时是甜的，开心到可以飞起来，有时候又很累。但是因为有了一起学习的同伴，相互鼓励，学习变得一直都很甜。希望能把JS学到溜，同时，特别期待老师会教其他的课程，在编程的路上越走越远。"
  },
  {
    "avatar": "![](https://ws4.sinaimg.cn/large/006tNc79ly1fijmh2nsyzj30dw0dwdhl.jpg)",
    "name": "Elizabeth周丽",
    "words": "2017年最重要的三件事之一就是学习编程，今年的目标是在年底时候成为高级新手，做出自己的网站。感谢新大开设的JavaScript，帮助我逐步打开编程世界的大门，让我有勇气在老师和同学们的陪伴下进入新的世界～ Hello,world!"
  },
  {
    "words": "学习编程对我来说是进入一个完全崭新的世界，也是一个很大的挑战。\n能够学好编程对我来说不仅意味着掌握了一门新的语言，同时也是我开始学习《刻意练习》这本书之后，利用刻意练习来学习一门新技能的试验场。因此希望自己能获得这个双重成功。",
    "name": "Explorer1982.",
    "avatar": "http://pan.baidu.com/s/1eROFrmM"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tKfTcgy1fia6uqf70zj30l70l7tb7.jpg",
    "name": "Jay Chen",
    "words": "希望能够从Javascript入手，从基础掌握前后端的相关编程知识。"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tKfTcgy1fidwsnx71cj30u81hcq8n.jpg",
    "name": "Liaoyuemin",
    "words": "I want to be strong to enjoy an imperfect life "
  },
  {
    "avatar": "http://pic6.58cdn.com.cn/zhuanzh/n_v1bl2lwkpsigsvriy7uftq.jpg",
    "name": "刘军",
    "words": "开拓视野，把想法透过编程得以实现，同时也是为跨界做准备"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tNc79gy1fiekv1tc2wj3069069mx4.jpg",
    "name": "Risexie",
    "words": "学习编程是我新生活的开始，是为了更好地和未来的世界相处"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tNc79ly1fj23gkeumnj30b40b4q4a.jpg",
    "name": "陈如珊",
    "words": "认真地玩编程，开心地学Javascript。"
  },
  {
    "avatar": "http://a3.qpic.cn/psb?/V14GyYoI2uOb2N/wtaaC5ASnGKJjaZR78xoTkuJYXK17SEwf5OjVh7GjTk!/b/dD4BAAAAAAAA&ek=1&kp=1&pt=0&bo=kAGQAQAAAAARFyA!&vuin=591351718&tm=1502805600&sce=60-1-1&rf=viewer_4",
    "name": "孙博",
    "words": "制作出自己的JS小作品，享受并收获认真思考练习提升的过程"
  },
  {
    "avatar": "http://othyo5zr8.bkt.clouddn.com/17-8-6/7536584.jpg",
    "name": "王仲斌",
    "words": "掌握一门技术，可以独立开发小程序，和一些工具，成为一个跨纬度生长的人"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tKfTcly1fic46qkg8zj30zk0zkwh0.jpg",
    "name": "郭威",
    "words": "打磨编程技能，解决自己和他人生活中问题，赚钱"
  },
  {
    "avatar": "https://thumbnail0.baidupcs.com/thumbnail/2ff007c6dbf8d6676ac0523419d77453?fid=1141771415-250528-550510704890453&time=1501902000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-%2BtK2iy3fz0O6ZFqA0gTdnADhVwI%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5020581978850644106&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
    "name": "凌晓",
    "words": "永远年轻，永远热泪盈眶。喜欢不断学习新知识的感觉，喜欢把学到的知识应用然后固化到骨髓里面的感觉。更何况编程是我们必须掌握的技能之一，所以我来了，而且会学好。还有曾经逼迫上大一的老弟自学编程，导致他产生了严重的挫败感，这次我打算自己先把知识掌握，然后再教他，重新培养他被我和编程打垮的自信。然后，希望能在课程上遇到志同道合的朋友，大家一起跟着高老师学习，相互帮助，共同进步。最后，真心喜欢浸淫在知识学习中的快感。"
  },
  {
    "avatar": "http://b96.photo.store.qq.com/psb?/V132hQNs4gFlJL/DtXK2yG3MGq6Ghknb6CYgVuyrLXmyn8ahmLyXO0m4SI!/b/YWj8OTnxDAAAYj2hQTkqDQAA&bo=ngKqAQAAAAABBBQ!&rf=viewer_4",
    "name": "郑超",
    "words": "看看学完之后到底能用它来干点啥好玩的事情"
  },
  {
    "avatar": "http://wx2.sinaimg.cn/square/95a79662ly1fidxfgug9fj20hs0hsta0.jpg",
    "name": "安建才&刘蕾",
    "words": "学习编程思维和学习如何运用编程数据解决问题，深夜加餐"
  },
  {
    "avatar": "http://a2.qpic.cn/psb?/V11bQUyC41BSKW/cflhIsZGdGoKWSgWJBwAKBZXqyQWjW2weLdTh6AraeY!/b/dD8BAAAAAAAA&bo=fgKAAgAAAAARB84!&rf=viewer_4",
    "name": "陈浩",
    "words": "学习编程目的是想习得另一种看问题的思路"
  },
  {
    "avatar": "http://wx2.sinaimg.cn/square/95a79662ly1fidxfgug9fj20hs0hsta0.jpg",
    "name": "安建才&刘蕾",
    "words": "学习编程思维和学习如何运用编程数据解决问题"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tNc79gy1fickawwmvxj30ou0oudhc.jpg",
    "name": "吴魁拼",
    "words": "区块链行业发展如此迅猛，我想进去看看！"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tNc79ly1ficrwvfngtj30wu0ihq5w.jpg",
    "name": "尹志宝",
    "words": "看了文章瞬间路转粉，迟到生来补交作业"
  },
  {
    "avatar": "http://wx1.sinaimg.cn/small/006xcK8hgy1fimmji87nmj30hs0hs74k.jpg",
    "name": "包国强",
    "words": "改善当前的现状和不满，让自己有个更好的工作环境和薪资待遇，也可以通过学习编程思想运用到其他的方方面面，让自己的生活多姿多彩"
  },
  {
    "avatar": "http://pan.baidu.com/s/1o8LXp6y",
    "name": "Chloe",
    "words": "学习编程让思维越狱"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tNc79gy1fiiip1u9jwj30hs0hs74e.jpg",
    "name": "柴高平",
    "words": "希望这次能够正真学会一门语言"
  },
  {
    "avatar": "http://ww4.sinaimg.cn/large/74f67c55jw1disaov37shj.jpg",
    "name": "陈德荣",
    "words": "互联网的兴起，Web的流行，已经快二十年，创造了财富神话，改变了世界。JavaScript在Web的流行中，起来关键作用，为基于浏览器的复杂交互提供了可能。Web还会流行下去，它具有超越系统的普适交互特性，不管在Windows、Mac、Linux，不管是桌面还是移动设备，iOS or Anroid设备，都可以一次编写，到处运行。现在甚至可以在后端运行的node.js。Web、JS的标准也在不断进化。基于Web的应用越来越广泛。相信未来，JavaScript必将创造更多奇迹、越来越流行。学好这门语言是非常有必要的。"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tKfTcgy1fia3guals9j30e10dtdn3.jpg",
    "name": "程君",
    "words": "我想设计出属于自己的产品，成为一名程序员！"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tKfTcgy1fiqnq8hezhj30pt0pt0w6.jpg",
    "name": "陈璐璐",
    "words": "必备技能+1"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tKfTcgy1fikoe96wyej30hs0hsdga.jpg",
    "name": "陈燕杏",
    "words": "认真接触ruby语言是从两个月前开始的，学习全栈营的课程，有收获但是进步缓慢，学到目前的感觉还是不太懂，就连前面一课「提交一个项目」我都倍感吃力，基础不好，学习状态也不佳，我在想我是不是不适合学编程？想在几个月之间从小白入门编程于我难度还是挺大的，但是我会坚持学下去的，因为这是一门被人们认为要学会的技能，我就是想看看习得之后会给我带来多大的变化。"
  },
  {
    "avatar": "https://github.com/Chenzd-homeland/sample_picture/blob/master/picture.jpg?raw=true",
    "name": "陈自东",
    "words": "通过学习JavaScript掌握大牛学习编程的方法，为学习别的编程技能打好基础。最终的目标是习得一项硬技能，换份有挑战性，能创造更大价值的工作。"
  },
  {
    "avatar": "https://avatars3.githubusercontent.com/u/31364061?v=4&s=40",
    "name": "陈子文",
    "words": "延续儿时的兴趣！小时候爸爸给我买了学习机,有机会接触basic语言,当时没有老师指导,再加上那个学习机是不能存档的,对问题的不能解决之感和耐心的缺乏,无奈的放弃了编程学习.我也是个懒人,喜欢一次创建重复使用的路子,我认为计算机编程就是这样.我认为编程是能锻炼人的思维,帮助人更理性的思考问题,我希望自己学会后把这些方法都给我的儿子."
  },
  {
    "avatar": "http://wx1.sinaimg.cn/mw690/539843d2gy1ficrbw1497j20hs0hsjrv.jpg",
    "name": "戴军/cloudyview",
    "words": "大学的时候学过一年的C，那个时候实话说，没好好认真学。工作出来了，从事的工作范围都是跟软件，互联网相关，但是，每次自己总觉得编程这样的事情，交给专业人士就好，我做好我的产品经理/项目经理/业务架构设计这些工作就好。后来自己出来创业，又接触了区块链这些领域，越发觉得完全不懂编程，越来越像文盲——完全看不懂人家在做什么。特别是区块链。我之前的认为，让技术的归程序员，让经济的，人文的，管理的这些归到各自的专业人士那里去吧。但是比特币给我的震撼是，中本聪这个人根本就是用密码学，用程序，用计算机，而且，最可怕的是用这背后的思维方式，在碾压经济学。我是学经济和管理的，这让我相当焦虑。由于区块链的关系，我知道了李笑来老师。后来，又学习了他的《通往财富自由之路》，一边学，一边思考着如何践行，如果让我的焦虑成为我的刚需。而后来，我知道了新生大学，进来就看到JS的课程。没说的，立刻上！我希望学了以后，我能更好的理解中本聪的论文，我能更好的看懂区块链的那些代码。如果可能，我希望自己能为这些做出一些贡献，多少都好。我知道有相当多的区块链项目是采用NODE.JS来写的，有一天，希望自己构思的项目，自己能动手写出来。这是我学习JS的愿望。PS：我在注册的时候，将姓名当成用户名来输入了。我正在跟客服交涉是否能修改这个姓名。目前先用这个cloudyview来做作业。"
  },
  {
    "avatar": "http://a4.qpic.cn/psb?/V10782zs2lPwov/w*Os6Zhbo2hGum4pucwjDAcTuU387FoWmRkZxCH29Xs!/b/dPcAAAAAAAAA&ek=1&kp=1&pt=0&bo=OAQ4BAAAAAARFyA!&vuin=24603898&tm=1502848800&sce=60-2-2&rf=viewer_4",
    "name": "崔淼",
    "words": "从事信息化相关工作，但编程却是小白，希望通过新生大学这个平台，学习JavaScript，为自己打开多维成长之路。"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tNc79ly1fih8dej6twj3046046gln.jpg",
    "name": "邓翔宇",
    "words": "希望能入门编程，虽然对职业路径还没有规划，但是敲代码是我人生中遇到的最爽的一件事"
  },
  {
    "avatar": "https://avatars0.githubusercontent.com/u/30835292?v=4&u=0828fdc04493f465d3a4ee0957fb8397e9c0d940&s=400",
    "name": "刁志聪",
    "words": "我学习JS的心愿是，先将容易上手的JS学透，然后应用在自己的领域里，如果可能，转行编程行业，把自己的想法用编程的方式展现出来，这将会是一件非常有趣的事"
  },
  {
    "avatar": "https://avatars3.githubusercontent.com/u/7390760?v=4&s=400",
    "name": "dongge",
    "words": "JS是升职加薪的利器"
  },
  {
    "avatar": "https://wx2.qq.com/cgi-bin/mmwebwx-bin/webwxgeticon?seq=659548762&username=@e7175d308edc5250999bdf0f6cc5ed3c&skey=@crypt_3e5c8b8b_404775965a35ed981c3bb72a9addcb03&type=big",
    "name": "donglili",
    "words": "在这个需要学习学习再学习的时代，有幸遇到了js,又恰好这个课程超便宜，为什么不学一下呢？走过路过不要错过。进来发现这个课程真是超值了，有老师和助教全天候服务。超赞！"
  },
  {
    "avatar": "https://qlogo1.store.qq.com/qzone/50004612/50004612/100?1445774486",
    "name": "段颖志",
    "words": "已知比较关注编程，前两年自学过python，但由于各种变故没有持续下去。这次加入新大报了JS和python两门语言，希望通过这两门语言踏进编程的世界。学习编程的目的一是想理解编程的逻辑性，运用到生活中，二是想用编程做点什么事情，至于做什么还真不知道，学起来再看。"
  },
  {
    "avatar": "http://a3.qpic.cn/psb?/V13RQJID39Shhk/d7.HmUGVCLCaS9.8wEeavMT8CsnCBhnasvTaha10u.U!/b/dG0BAAAAAAAA&bo=gAKAAgAAAAARBzA!&rf=viewer_4",
    "name": "杜红霞",
    "words": "我要学会编程，更好的生活和工作"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/ad915470gy1fid3b2869rj20qo0zkdmw.jpg",
    "name": "方庆扬",
    "words": "一想到以后可以在电脑上做出自己的东西，就很兴奋"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tNc79ly1ficho8d5amj30hs0hsdg6.jpg",
    "name": "范青",
    "words": "我在大学时学的应用电子专业，课程中偏爱数据结构、C语言，学得乐此不疲，成绩明显好于其他课程。工作后，工作内容与编程无关，记得刚开始还想学下当时的ASP开发，曾经抱书在公司翻看，很遗憾当时未建立起元认知能力、做自己最重要的事以及默默学起来等等概念，受周围环境影响较大，没多久就放下了。那段时间前后还买过《Java Programming Language》、《Java编程思想》，其实并没有学习，这几天重学编程，这两本书又找了出来，不知旧版本的价值是否已打折扣，这个待我慢慢体会。工作一段时间后，曾经业余时间基于已有平台制作过几个网站，并未深入编程语言，后来也仅是维护还既有的老用户，未再发展新客户，因为我未投入更多精力，老客户也所剩无几。又过了不少时间，自从小程序概念的出现起，看到过笑来老师鼓励大家学习，觉得应该是挺有趣，去图书馆借了本《编写可维护的javascript》，那时或因工作、生活的忙碌，或因并没有很明确的学习任务，自学并没有真正开始，直到现在，报名了新生大学的课程。这本已续借多次的书终于可以开始仔细阅读。目前我对javascript所能做的事还不太了解，只知道也许掌握了就可以做小程序了。希望能做出自己感兴趣、实用的小程序，还想象着也许可以尝试给我那所剩无几的网站客户做出小程序，如果他们中意，准备免费赠送老客户。P.S.很高兴能通过新大的课程进入了github平台，打开了一片新的视野。全英文的界面对于基本不用英语的人有相当的冲击力、也是一种激发，希望自己能多多练习，以后更多的用英语表达。"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tNc79gy1fi827p2y74j30go0go76d.jpg",
    "name": "费玺光",
    "words": "我可能还不太了解 JavaScript ，招聘的时候都是HTML/CSS/JavaScript，就想让我的前端开发水平更上一层，或者能领悟到更深的意义吧！"
  },
  {
    "avatar": "https://ww3.sinaimg.cn/large/006tNc79ly1ficgraqd81j30jz0jzgqc.jpg",
    "name": "冯凯",
    "words": "I am on my way!"
  },
  {
    "avatar": "http://oucyv4vzu.bkt.clouddn.com/tian.jpg",
    "name": "geyee",
    "words": "学习 JavaScript 的心愿：1.磨砺编程思维，践行编程习惯，能创建一些拿得出手的应用；2.让自己过得说的过去，信心与勇气；3.类 MOOC 学习环境下与他人更好的交流。"
  },
  {
    "avatar": "http://wx2.sinaimg.cn/mw690/006yZIPkgy1fic9zmazatj30hs0hs0tq.jpg",
    "name": "郭俏君",
    "words": "想学习Javascript是机缘巧合的事，我一直想要学习编程，但没有什么目标语言，自学深感乏力，一般的编程课程又价格高昂，负担不起。看到新大开了编程课程，相信质量不错，价格又合理，特别是Javascript性价比超高，而且听说Javascript既能做前端，又能做后端，很全能的样子（虽然并不知道前端和后端是什么），最近又有时间就报了。报了之后，发现老师认真负责又幽默风趣，更加期待上课了（我绝对不是在拍马屁），希望学完后能正式脱离小白的身份。"
  },
  {
    "avatar": "https://wx2.qq.com/cgi-bin/mmwebwx-bin/webwxgeticon?seq=1542306414&username=@27c8d42815d1807ccf3b7f9a827936a95cb05cf27362d9457f0f0d70eb6ec7ae&skey=@crypt_70df2d69_2b86dfdbb5a9008f98d1ac9c3d7f61ea&type=big",
    "name": "韩猛",
    "words": "在我心中“编程”一直都是很神圣的技能，也特别向往，希望有一天，自己也可以通过学习成为掌握这项技术的牛人。现在的职业发展受限希望学会一项新技能，开启一段新的职业生涯。让自己更有价值。将来能用JavaScript创造出自己的小程。认识更多的编程牛人，与牛人为伍。"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tNc79gy1fiej3i999vj30hs0hsaau.jpg",
    "name": "韩巍",
    "words": "成为技术大牛"
  },
  {
    "avatar": "http://wx1.sinaimg.cn/mw690/9f4e25a9ly1filvlfthavj20be0bfdgp.jpg",
    "name": "郝户",
    "words": "Make America Great Again!"
  },
  {
    "avatar": "https://visualhunt.com/photo/200318/",
    "name": "郝凯歌",
    "words": "技术是有价值的，未来更为凸显，现在才刚刚开始"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tNc79ly1fi8psvoa5gj305k05kt8z.jpg",
    "name": "何伟",
    "words": "前端在网站开发中所占的比重越来越大，Node.js也开始在后端领域崭露头角，因而与两者息息相关的JavaScript也变得越来越重要。学习编程语言不只是为了多掌握一门技能，它更是我们用全新的视角认识世界的一种方式。除此之外，学习编程技能还能够让我们抓住可能到来的机会，在未来的竞争中增加自己的竞争力的维度。就我自己而言，本来就是从事这个职业的，而且很喜欢这项工作，接着新生大学开通JavaScript课程的机会，继续深造，让自己的技能更上一层楼，何乐而不为？顺便在这里再推广一下自己在Github上的帐号：https://github.com/Dream4ever。"
  },
  {
    "avatar": "https://github.com/albertschr/albertschr.github.com/blob/master/dogemoney.jpeg",
    "name": "hitchhacker",
    "words": "搞定JS."
  },
  {
    "avatar": "https://o3b126ie1.qnssl.com/avatar/cbdb8537-f7a4-4273-b0e3-76ab95d03e66",
    "name": "黄家树",
    "words": "JavaScipt is a widely used language in the world. There is a greate need in the worktime, so I want to learn it."
  },
  {
    "photograph": "(http://a3.qpic.cn/psb?/V10JH8df1OW8A3/vAEC2UOGMhnLxOhoh0Wkfd2*IyN5oR0s47gfPgG7lcE!/m/dG4BAAAAAAAAnull&bo=gAKAAgAAAAARBzA!&rf=photolist&t=5)",
    "name": "����",
    "dords": "���ѧһ�㣬˵����ʲôʱ����õ���js"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tNc79gy1fifzn6nfwkj30hs0h8gmc.jpg",
    "name": "黄晓晖",
    "words": "学习javascript纯属偶然，我本来是新生大学的会员，改版后看到这个课程，既然可以从零基础学习，就尝试着接触一下编程的世界，就让我从javascript开始吧"
  },
  {
    "avatar": "http://ou5vdfvru.bkt.clouddn.com/photo.jpg",
    "name": "黄永飞",
    "words": "你学习JavaScript的心愿，学会玩小程序"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tNc79gy1fim22xnv1oj30r80ra499.jpg",
    "name": "黄志华",
    "words": "太有趣了！我开始被这种多人协同的事情所着迷，我在设想为什么老师要我们提供头像，我想有一天老师会利用这些头像组成一个类似照片墙的东西？每个人还会自动浮现这句话！"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tKfTcgy1fii70fhp5jj30hs0hsaat.jpg",
    "name": "胡传亮",
    "words": "能够用JS改变生活状态，提升生活品质，在网络世界中起到些作用"
  },
  {
    "avatar": "http://i1.bvimg.com/1949/cb3d28ecfd7f92b3t.jpg",
    "name": "���쵤",
    "words": "�����˽�ǰ�ˡ�����Լ�������ص�֪ʶ�����Զ������˼ά��"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tKfTcgy1fif52cwlloj30jz0k0dgj.jpg",
    "name": "胡宜",
    "words": "敲指令就能驱动电脑工作，这样很酷，我也想成为这样酷的人"
  },
  {
    "avatar": "http://wx2.sinaimg.cn/mw690/005Egs8bgy1figzupy12yj30hs0hsaa8.jpg",
    "name": "胡永",
    "words": "学好js进入编程世界，了解区块链，为将来转行做准备"
  },
  {
    "avatar": "https://lh3.googleusercontent.com/-aDYCfKxW2rw/V2igWiKBq0I/AAAAAAAAD7Q/Urqh9kcetOwMvyE1RdN7ovXzVXpg6W0vwCEwYBhgL/w140-h140-p/16084879805343795.jpg",
    "name": "ianyang",
    "words": "获得基本代码能力，便于鉴别开源项目真伪与品质"
  },
  {
    "avatar": "https://ww3.sinaimg.cn/large/006tNc79ly1fibin27q4aj30hs0hs0tl.jpg",
    "name": "江蓉",
    "words": "虽然参加了全栈营的学习，但是javascript还是一点不懂，希望能够入门，谢谢老师！"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tKfTcly1fia8o6wzshj30hs0hr0up.jpg",
    "name": "靳超",
    "words": "你学习JavaScript的心愿：对我而言，程序并非一种语言，而是实现自由的工具。我想用想象力把工具带到更远的地方，而现在，从创建一个站点做起！"
  },
  {
    "avatar": "http://image.jiantuku.com/17-8-9/54286073.jpg?attname=file_1502268260429_5d12.jpg&e=1502269210&token=el7kgPgYzpJoB23jrChWJ2gV3HpRl0VCzFn8rKKv:iDsZGCt1aRzOZmugi4kcIY4-EJo=",
    "name": "郎建军",
    "words": "This is the second time I learn Java Script. Last year I learned some all by myself. Then before mastering it, I gave up. One of the reason is that my working laptop was stolen and that made me mad and sad. This time I will try to catch up, master it and have some products."
  },
  {
    "avatar": "https://i.loli.net/2017/08/17/5995a306c8ad6.jpg",
    "name": "雷震",
    "words": "好好学，管它有没有用，说不定以后就是工程师呢？"
  },
  {
    "avatar": "http://b166.photo.store.qq.com/psb?/V11W2Ieo3T6gbv/xVmzvkTshEQqPQBZ6U83UDKhbdzR3.uHinYIHNUhPfg!/b/dKYAAAAAAAAA&bo=OAQ4BNAL0AsFCSo!&rf=viewer_4",
    "name": "梁会锋",
    "words": "感觉现在是一个全民学编程的时代，不想被时代抛弃。再一个就是便宜，哈哈"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tKfTcgy1filyapuztaj30hs0hsq3o.jpg",
    "name": "梁信众",
    "words": "希望通过学习编程思维，帮助总结出自己的生活原则，从而解决生活中的实际问题。也许这个想法在别人看来难以理解，但是在你做成任何事情之前，都需要有一个愿景或构想，有了此蓝图，才会有实现的可能性。"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tNc79gy1fieezsimgnj30lk0lk7wh.jpg",
    "name": "lichen",
    "words": "正在学习ruby on rails ，想通过学习JS来完善对编程的认知边界，同时补充一些知识技能。"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tNc79gy1fiqf2ameatj30hs0hsgmh.jpg",
    "name": "lily(许丽）",
    "words": "还有不到一个月的时间，我想在小宝贝出生之前来一次自我挑战，学编程是我曾经仅仅停留在脑海里，但从不敢真正想象的一件事儿，高阳老师的这个课让我想要通过学js，试图来一次别样的新生！感谢高阳老师，感谢同学们的帮助！今天高阳老师给我的远程协助，我突然想象，也许我通往这个世界之门将真正打开，我想我会爱上js～"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tKfTcgy1fidvof293rj309s0800uq.jpg",
    "name": "李明星",
    "words": "正在紧跟着老师的脚步领略编程语言JavaScript的魅力，希望这次的学习之旅能帮助我打开编程的暗门"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tKfTcgy1fijm1e02f7j30zk0zctad.jpg",
    "name": "林德光",
    "words": "以编程为生"
  },
  {
    "avatar": "http://a3.qpic.cn/psb?/V13uYcBA2Bs7DK/29OCNJhoKlbukD0H.BS9cbtDBgINJQAO1B4GT44Ln5Q!/b/dD0BAAAAAAAA&bo=gAKAAoACgAIRCT4!&rf=viewer_4",
    "name": "林细瑶",
    "words": "打了一百遍退堂鼓，最后还是颤颤巍巍报了这门编程课——万一学会了呢!前天光下载git就费了好大劲，课前作业更是看不懂，硬着头皮去上第一节课，竟然完全听懂了！对，感觉真的是全懂了！但是，但是，好像作业还是不会做啊......今天又断断续续折腾了很久，终于来到这里。等会我敲下一步会报错吗？坑们，我又来了！"
  },
  {
    "avatar": "http://osv97pbuy.bkt.clouddn.com/avatar_wechat.JPG",
    "name": "李朋",
    "words": "用JavaScript搞项目"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tKfTcly1fiduvhawdwj30iy0iygm9.jpg",
    "name": "李涛",
    "words": "对编程领域很好奇，而且感兴趣。希望真正会用git工具，使用GitHub创建个人主页，编辑文档。这几天下来，我始终处于对这些新概念的懵懂状态，一遍遍地从最初的预习作业开始重新操作，一步步地按照老师的文档描述去练习，不断加深理解。"
  },
  {
    "avatar": "https://github.com/liujin1991/javascript/blob/master/wx.jpg",
    "name": "刘锦",
    "words": "抱歉，老师，我来晚了。中间好多节课都没听，这几天抓紧时间学习!"
  },
  {
    "avatar": "https://wx4.sinaimg.cn/thumb300/7b535f23gy1fi9s6a7fixj20hs0hsaa9.jpg",
    "name": "刘军",
    "words": "我想试试从0开始能不能学好一项技能。"
  },
  {
    "avatar": "http://pan.baidu.com/s/1mi5L9Rq",
    "name": "刘丽媛",
    "words": "没什么事，是睡一觉和喝一罐可乐解决不了的。所以，一般遇到问题我们都说不要轻易放弃，可有些事确实会损耗你的认知。这样你就不如去睡一觉，醒来后再去做，避免认知胶着的发生，反而会有好的结果。"
  },
  {
    "avatar": "https://thumbnail0.baidupcs.com/thumbnail/6a64fde3ca59e4660be37f8d59adc28b?fid=2063916389-250528-1045738355729916&time=1504530000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-uPJUshlmHxvd6yWLQ5V2uBzAAD4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5726183852813185133&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
    "name": "柳青",
    "words": "学习编程思维，开发一款微信小程序"
  },
  {
    "avatar": "http://ww1.sinaimg.cn/large/006axpoxly1fibksijahbj33402c0hdu.jpg",
    "name": "刘儒勇",
    "words": "会有javaScript做项目"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tKfTcly1fiig7mmw14j30hs0hsjua.jpg",
    "name": "刘胜思",
    "words": "从JavaScript开始，一步步构建起自己的编程技能树，这是我的7年目标之一！"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tNc79ly1fibk20u4ynj30ru0ronlf.jpg",
    "name": "刘胜新",
    "words": "学习本身就是有趣的事情、不为别的、只想做些有趣的事情"
  },
  {
    "avatar": "http://a3.qpic.cn/psb?/ebfa945e-6b53-48b4-b671-f3abe4715eee/SOtY*57lbcOrPu08atEJbRU612e8Q6XGBG5QPir8cNk!/b/dG0BAAAAAAAA&bo=gAKAAgAAAAARBzA!&rf=viewer_4",
    "name": "刘小昊",
    "words": "想知道程序员的世界是怎样的，对此我非常好奇。"
  },
  {
    "avatar": "https://qlogo1.store.qq.com/qzone/7249864/7249864/100?1461031672",
    "name": "刘永军",
    "words": "践行终身学习，结合公司需求，学以致用。"
  },
  {
    "avatar": "https://pan.baidu.com/s/1boV6rHt",
    "name": "刘争春",
    "words": "被徐老师的超低价给吸引进来了，本来学的是python数据科学，哈哈哈！！！"
  },
  {
    "avatar": "http://up.qqjia.com/z/13/tu14994_2.jpg",
    "name": "李想(Ideal)",
    "words": "通过学会一门编程语言，努力掌握计算机式的思维模型"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tNc79gy1fic8mdlpftj30sc0scgno.jpg",
    "name": "李小欣",
    "words": "继续在编程的奇妙世界里探索"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tKfTcly1fj23busdqjj30940b4teb.jpg",
    "name": "李永静",
    "words": "说实话这样的学习机会很少，大家平时工作都很忙，最大的感慨就是时间不够用的，老师能这样尽心尽力的教我们，群里有这么多热心的同学，我没有理由不好好学"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tKfTcgy1fi8vbcwpx0j30no0no0v5.jpg",
    "name": "Rachel",
    "words": "我想做一个小程序解决工作中重复的工作／我想参与未来的世界。"
  },
  {
    "avatar": "https://avatars0.githubusercontent.com/u/384727?v=4&s=460",
    "name": "蓉儿",
    "words": "成为屌屌的全栈设计师"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tKfTcgy1fiihu6re29j30hs0hs3zk.jpg",
    "name": "罗睿君",
    "words": "学习编程思维"
  },
  {
    "avatar": "http://www.spzwl.com/img/1111.jpg",
    "name": "macheng",
    "words": "成长是永远的刚需！"
  },
  {
    "avatar": "http://pan.baidu.com/s/1boUksaV",
    "name": "MaggieWong王颖",
    "words": "希望能开发一个微信小程序记录外用内服药使用情况"
  },
  {
    "avatar": "http://pan.baidu.com/s/1i5DtEct",
    "name": "Marshalcy",
    "words": "完成个人站，做出自己想要的效果。"
  },
  {
    "avatar": "https://raw.githubusercontent.com/wiki/mdqsky/words-from-the-heart/xdjs-portrait.jpg",
    "name": "闵东泉",
    "words": "学习编程，获得新生！"
  },
  {
    "avatar": "http://pan.baidu.com/s/1cpStK6",
    "name": "欧阳春",
    "words": "学习编程思维，现在才交作业，才搞懂"
  },
  {
    "avatar": "http://pan.baidu.com/s/1eSlF58e",
    "name": "潘琦",
    "words": "学无止境，技多不压身，学到更要做到，享受琦妙之旅"
  },
  {
    "avatar": "https://avatars0.githubusercontent.com/u/2305999?v=4&u=78e4d2861d39cfa64ef316a16ad0dfcacf486abd&s=400",
    "name": "潘勇",
    "words": "想建个个人网站。想玩公众号和小程序。想Get个高级、好玩、又可赚钱的技能：编程！"
  },
  {
    "avatar": "http://oon3erbcp.bkt.clouddn.com/avata%28qiujingyu%29.png",
    "name": "丘竟钰（一休）",
    "words": "能让自己建立的网站更加生动活泼"
  },
  {
    "avatar": "https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgeticon?seq=656839578&username=@c44a7655c2d20258da570c60e428efe3&skey=@crypt_94c460b8_9409eab225957dfccb93d4736572eab0",
    "name": "邵振",
    "words": "培训学习的良好习惯，提升个人竞争力，提高自身的生活品质。"
  },
  {
    "avatar": "https://github.com/zjutszl/my_post_images/blob/master/26155027.jpg?raw=true",
    "name": "沈志立",
    "words": "刚刚加入新大这个大家庭，久违了。老早就想学一门计算机语言了，但总是从入门到放弃:),希望这次能快速入门，正式进入程序员的世界~"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tKfTcgy1fidstmvzb0j30cs0csq3r.jpg",
    "name": "祁曚",
    "words": "学习javaScript,在网页前端使用，微信小程序的开发。学习新的技能"
  },
  {
    "avatar": "http://ww3.sinaimg.cn/large/006tKfTcgy1fiutn4rxwhj30hs0hsq2z.jpg",
    "name": "孙艳",
    "words": "看不懂代码的UI不是好产品，哈哈"
  },
  {
    "avatar": "https://github.com/Supersunlady/sample-picture/blob/master/weixin%20picture.jpg?raw=true",
    "name": "孙艳红",
    "words": "我是在看到笑来老师那句‘只要你文字能力好，就能学编程’之后挑起的好奇心，去年就想报Xdite编程课，但一直以为得先换一台高配置的苹果电脑，就作罢。这一切，我想可能也都是借口，比如这次的编程课我听了四节，不仅听得云里雾里，连Github网站注册和GIT都没安装。还好找到了战友，在队长的督促和陪伴下，昨晚装好GIT，今天注册好Github，现在开始写作业。这次得到素不相识的战友热情的帮助，很暖心，我希望自己能从一位小白变成以后也可以帮助别人的高手。"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tNc79ly1fiia00ci7sj30j60j7wf0.jpg",
    "name": "suzichao",
    "words": "路漫漫其修远兮，吾将上下而求索"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tKfTcgy1fichri1aobj30hs0bumxh.jpg",
    "name": "唐剑锋",
    "words": "学习了全栈营后，觉得还要提高，所以来学，希望能学到东西"
  },
  {
    "avatar": "https://avatars1.githubusercontent.com/u/16713557?v=4&u=166356ef5dd53744cb3bd878a2a682268d5ad551&s=400",
    "name": "汤宣洋",
    "words": "学习JavaScript的心愿，希望成为一名能撸得了代码的产品经理O(∩_∩)O哈哈~"
  },
  {
    "avatar": "http://pan.baidu.com/s/1jH4ojxO",
    "name": "唐文东",
    "words": "能对网页有更深入的了解；能做出一个爬虫软件，把每天翻网页找信息的工作交给电脑；最终能进入一个全新的世界开阔眼界"
  },
  {
    "avatar": "https://avatars0.githubusercontent.com/u/25058977?v=4&s=400",
    "name": "taobao",
    "words": "如何从学过到精通"
  },
  {
    "avatar": "https://avatars0.githubusercontent.com/u/22571496?v=4&u=4c4771e3dd0713292f18ec5f3283a6b2891fc504&s=400",
    "name": "陶振伟",
    "words": "学习js,让人生更多彩。"
  },
  {
    "avatar": "你头像的链接地址",
    "name": "你的名字",
    "words": "你学习JavaScript的心愿"
  },
  {
    "avatar": "http://photo.weibo.com/5054269711/photos/detail/photo_id/4122238134662918/album_id/3683440326228894#4122238134662918",
    "name": "田智羽",
    "words": "放下对编程的恐惧，进入这个新世界，让自己更有价值一点，这个世界更好一点"
  },
  {
    "avatar": "https://user.qzone.qq.com/349004643/photo/59ae03c6-5475-4796-8f1b-f5749f74ea98/batchid/1502109563746000",
    "name": "涂益浪_tuyilang",
    "words": "学习javascript将是一件既有趣又有用的事情，顺便看看xdite老师的元学习方法是否在编程这件事上奏效，哈哈！"
  },
  {
    "avatar": "http://ou7elf9tx.bkt.clouddn.com/blog/170805/lm1mcDh715.png?imageslim",
    "name": "王长庆（Frank）",
    "words": "Firstly, it is because XinShengDaXue put up this lesson, and I am a student who saw it. XinDa is a fantastic place and I love it, although I haven't known a lot about this lesson, but I believe I can learn much from it.    Secondly, I have heard a lot about programming. This is a world made of CODE, so programmer can make many things by programming. I want to be a programmer, or be a man knowing something about programming at least. I think if my dream comes ture, my life will have more fun and more possibility.    In one word, programming is a kind of magic in my eyes, JAVAscript is a chance for my to get this magic."
  },
  {
    "avatar": "http://a1.qpic.cn/psb?/V122ytfQ2Wo0yN/kaa1B6eo0X*80AhXR1sXk3yzd4HQSpy8Or2XjJ2Nc10!/b/dD4BAAAAAAAA&bo=oAU4BAAUAA8RALU!&rf=viewer_4&t=5",
    "name": "王凡豪",
    "words": "我听说编程加音乐等于自由"
  },
  {
    "avatar": "http://b131.photo.store.qq.com/psb?/V10MQthU4Wxqzy/QQOB.XuWvwI7ouyZAaVtDVt3T8.iR*FguIh*nLF2pAA!/b/dBseG06zAwAA&bo=ngL2AQAAAAABB0s!&rf=viewer_4",
    "name": "王美玲",
    "words": "我想学好这门课，这是我第一次正儿八经地上编程课；很幸运能遇到徐老师。"
  },
  {
    "avatar": "http://b131.photo.store.qq.com/psb?/V10MQthU4Wxqzy/QQOB.XuWvwI7ouyZAaVtDVt3T8.iR*FguIh*nLF2pAA!/b/dBseG06zAwAA&bo=ngL2AQAAAAABB0s!&rf=viewer_4",
    "name": "王美玲",
    "words": "这是我的第一门编程"
  },
  {
    "avatar": "https://thumbnail0.baidupcs.com/thumbnail/e198cb436ac867f5d7a3987b259154c3?fid=1263497160-250528-104582875615306&time=1504450800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-SsJRsyAERIK1YHNRUAufKGDSFt0%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5705134557209556634&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
    "name": "王沙沙",
    "words": "你学习JavaScript的心愿：这次报js课，是因为公司之后会开发服务号和小程序，虽然我觉得自己短时间学了也不能独立做事，但或许以后可以帮忙。自己对编程有兴趣，以后有可能在工作中用到，公司是创业公司，希望自己能在不同维度找到能认领的工作；编程也是一个肯定要会的技能、工具，一个肯定要踏进的世界，实用又有趣，所以要学。我还希望学会之后能带着好友还有姨妈舅舅家其他小朋友们（想太远了哈哈）。为什么想学编程？又酷又可爱啊！！！在我心里，会用代码就是又酷又可爱又厉害的！（写这个主题的时候一开心又写了不少跟编程相关的其他的事，怕自己太啰嗦、纯自high，就不在这里放了，稍后放到自己公号里。）"
  },
  {
    "avatar": "http://a2.qpic.cn/psb?/V13xDUYI0lw68j/PWRY82rfXz6V.fDKzLKPMLwPIGGHjsVGnu5OdrYjcFU!/b/dD8BAAAAAAAA&bo=ZwFnAQAAAAARADc!&rf=viewer_4&t=5",
    "name": "王宣鼎",
    "words": "这个人很懒，什么都没有留下。"
  },
  {
    "avatar": "http://opkslf6o7.bkt.clouddn.com/image/jpg/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
    "name": "王一虎",
    "words": "利用这次难得的机会系统学习javascript和前端知识，向着全栈的目标前进，感谢李朋、云飞和徐老师，今天开学第一天，迈开第一步，与孩子一起成长。"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tKfTcgy1fi86weipyzj31kw23v1ky.jpg",
    "name": "王煜亮",
    "words": "我想成为让世界变的更美好的人，想通过编程提高自己证明自己，可以认识更多朋友，赚更多钱"
  },
  {
    "avatar": "http://r.photo.store.qq.com/psb?/V13hqj0m2qC5lF/lardD2PAalGPWSVgKLOS*2M.Yje7*wUAr1KmS6w9Tio!/r/dD0BAAAAAAAA",
    "name": "王云飞",
    "words": "相信自己，超越自己"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tNc79gy1fih299nuumj3064064q3c.jpg",
    "name": "王智超",
    "words": "希望能通过javascript，走入程序员的世界，从事让自己兴奋的工作"
  },
  {
    "avatar": "https://avatars0.githubusercontent.com/u/24565307?v=4&s=460",
    "name": "wayneWong 王炜",
    "words": "之前学过一点 html和css， 还比较好理解，但是JS 就更偏向于 编程和代码了，所以想和名师系统的学一下"
  },
  {
    "avatar": "http://upload-images.jianshu.io/upload_images/6581981-58c3a896aeabbb62.jpg",
    "name": "陈为林",
    "words": "跟着高阳老师学JS,好好学习,天天向上."
  },
  {
    "avatar": "http://a1.qpic.cn/psb?/746f526d-5a85-440c-bd36-f4e5e4285e00/rftDdSBZXQwo2Tghi6DW18vkaZ.8EvrOzJKa*ZWn1cM!/b/dD4BAAAAAAAA&bo=kQKQApECkAIRADc!&rf=viewer_4",
    "name": "温刘欣",
    "words": "希望有拿得出手的技能，毕业后能到互联网公司工作。"
  },
  {
    "avatar": "https://avatars1.githubusercontent.com/u/29993284?v=4&u=d5728c1c5fab19cbb0d0aa6c7f80cac6ced02cae&s=400",
    "name": "温云新",
    "words": "学习前端必修课，开发微信小程序"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tNc79gy1fjazppi0ssj30hs0hsdg5.jpg",
    "name": "吴迪",
    "words": "掌握编程技能，开发自己的应用。"
  },
  {
    "avatar": "http://wx3.sinaimg.cn/large/68487189ly1fiel3jeyogj20hs0hsaa5.jpg",
    "name": "吴高星",
    "words": "Big JavaScript Small Life"
  },
  {
    "avatar": "http://photo.weibo.com/1715758172/photos/detail/photo_id/4137694631471858/album_id/3440940430341158",
    "name": "wuguohua",
    "words": "学习编程是为了理解这个世界的底层代码，未来已来，未来不远。"
  },
  {
    "avatar": "http://a2.qpic.cn/psb?/V11gEvOt4cCVez/6ge1tCxikCCzfOs7i9yjnmJjOPXGanLoRKRQyRl4bXs!/b/dIUBAAAAAAAA&ek=1&kp=1&pt=0&bo=gAKAAoACgAIRADc!&tm=1504231200&sce=0-12-12&rf=viewer_311",
    "name": "夏能啟",
    "words": "我想踏入编程大门，未来将会是万物互联的时代，掌握编程这门技术会是刚需，现状MR混合现实技术已经悄悄来临了，我想运用MR技术来解决社会上制造业的问题，首先我要学习编程来运用编程结合MR技术来解决制造业的问题，以上我暂时总结了这几点，希望和同学们一起进步，加油"
  },
  {
    "avatar": "http://tva1.sinaimg.cn/crop.0.0.540.540.180/716bda7bjw8ei4se9cxfnj20f00f074i.jpg",
    "name": "晓静",
    "words": "成为神"
  },
  {
    "avatar": "http://oqym24k6p.bkt.clouddn.com/xiaoyi/2017-08-11-IMG_5308.JPG",
    "name": "小一",
    "words": "不会编程的人终将被淘汰"
  },
  {
    "avatar": "http://t3.qpic.cn/mblogpic/4627a939e664f144bb58/460",
    "name": "谢玉辉",
    "words": "我学习JavaScript纯属兴趣爱好，真要谈心愿的话，我最的心愿是成为时代的精英"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tKfTcgy1fi7s7vo8y0j30hs0hsaay.jpg",
    "name": "徐高阳",
    "words": "我想带领大家感受编程语言JavaScript的魅力，与同学们一起成长我感到非常的荣幸"
  },
  {
    "avatar": "http://a3.qpic.cn/psb?/V10O9c6i3HeJsg/aQbyx7d0GV16sSzxKreB.pJXZsSWASh0p6UY0PUJT*E!/b/dCPS2FikLwAA&bo=VQOAAgAAAAAFB*A!&rf=viewer_4",
    "name": "徐良海",
    "words": "JAVA有一定基础，以前没用过GIT做版本管理，这个还不错，省得搭建SVN。。。。"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tNc79gy1fixa6njatgj30e80fn14g.jpg",
    "name": "徐敏",
    "words": "怀着好奇心报了JS课程，希望拓展自己的思维方式，继续跨界学习不同领域的知识。"
  },
  {
    "avatar": "http://okr0iw9h2.bkt.clouddn.com/2017-08-08-yammy%20.png",
    "name": "yammy",
    "words": "JavaScript is a must in front-end, I'm using it for my projects now.And, I'd like to make it useful for me both in front-end and back-end. Wow, pretty cool."
  },
  {
    "avatar": "http://a2.qpic.cn/psb?/V143oJCd4RvPsQ/Q*tFPW34KCpPIzfe4HooGNcHQKtwH.e60vJwNQqUfVg!/b/dB4BAAAAAAAA&bo=fgKAAn4CgAIRADc!&rf=viewer_4&t=5",
    "name": "杨春光",
    "words": "希望通过掌握编程技巧，设置财报参数，筛选上市公司股票，这样就不用自己挨个分析了！"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tNc79gy1fj4ibtff3tj30dt0dstjd.jpg",
    "name": "李清凤",
    "words": "我想与大家一起感受编程语言JavaScript的魅力，与同学们一起成长我感到非常的荣幸"
  },
  {
    "avatar": "http://wx3.sinaimg.cn/mw1024/61cb7abdgy1fi85e6hp1tj20gx0gxgor.jpg",
    "name": "Terry Yang",
    "words": "学习新的技能，开启新的生活体验，走向下一个7年"
  },
  {
    "avatar": "http://otnjt3h06.bkt.clouddn.com/image/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.jpg",
    "name": "杨学武",
    "words": "从开始学习编程到使用 ASP.NET 编写第一个管理系统网站，前后用时一年多，在这个过程中，一路磕磕绊绊，总是在为了新的界面、更友好的交互方式、更方便用户使用而发现跟多的东西，Bootstrap，JavaScript，jQuery......网站也从开始翻着一本《ASP.NET从入门到精通》找例子，在博客园找控件的用法，到现在会写一点简单的 JavaScript 语句响应用户操作，利用 Bootstrap 对网站进行布局。这次之所以要学习 JavaScript 课程，有两个目的。 一是想通过和老师一起学习，能够更好的运用 JavaScript,并且我也是因为在课程目录里看到老师会讲 jQuery ，觉得必须要上这个课。二是想和大家在一起学习，听老师讲课，能听到不一样的声音，吸收不一样的想法，学到更多编程思维方面的知识。"
  },
  {
    "avatar": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3ODA0MDI4OF5BMl5BanBnXkFtZTgwMjEyNzI3MDE@._V1_UY317_CR131,0,214,317_AL_.jpg",
    "name": "杨业鹏",
    "words": "感觉是被忽悠上了编程这条贼船，然后就停不下来了。目前还是处在糊里糊涂，跌跌撞撞的状态。加油吧，继续努力，总有一天你会感受到编程世界的无限魅力"
  },
  {
    "avatar": "http://oug6btu3p.bkt.clouddn.com/%E5%A4%B4%E5%83%8F.jpg",
    "name": "严情木",
    "words": "Now, I’m in the JavaScript learning program, and start to use Gitbub. It’s very interesting. Can you feel my smile mouth?😀"
  },
  {
    "avatar": "https://avatars1.githubusercontent.com/u/20189536?v=4&s=460",
    "name": "李一淼",
    "words": "想完完整整的学习一种编程语言；之前都半途而废了让我很懊恼；之前学过html等，对Java很感兴趣；同时我们公司的网站我也负责更新，觉得这个会对我有用处。最核心的就是想完整的学下来，即使他的意义对我的职业来说并没有看得到的连续性。"
  },
  {
    "avatar": "https://o3b126ie1.qnssl.com/avatar/40663b07-cb8b-4ba0-90b9-bb30543289e1",
    "name": "尹旭",
    "words": "学习JavaScript，希望能在自己的工作中应用，提高效率，并尝试在业余时间利用编程技能为他人提供价值，获取额外收入"
  },
  {
    "avatar": "http://a1.qpic.cn/psb?/62469739/FiPwDeU4ZhcyW0emCXEW1CUFrpDT5OGSDih8eEsYCOM!/b/dOcAAAAAAAAA&bo=gAKAAgAAAAABACc!&rf=viewer_4",
    "name": "尤石磊",
    "words": "一直对编程很感兴趣，这次新大提供的平台很不错，希望自己能够掌握点编程知识，对生活有所帮助。"
  },
  {
    "avatar": "https://ss3.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/pass/;q=90;g=0/sign=cb4604c004f41bd5961fe0fd61e1e6f6/8d5494eef01f3a299bad36259325bc315d607cf0.jpg",
    "name": "乐瑞琪",
    "words": "换一种角度，更好的认识这个世界！"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tKfTcgy1fij20nn60tj303b038jrm.jpg",
    "name": "余剑科",
    "words": "希望能学会编程，实现心中好玩的idea!!"
  },
  {
    "avatar": "https://ws4.sinaimg.cn/large/006tKfTcgy1fj6r141ekij30b40b40v2.jpg",
    "name": "zengjinlin",
    "words": "学习编程思维，做出炫酷的网站，转行做软件工程师！"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tNc79gy1fi86vb5velj316022onpd.jpg",
    "name": "张瑞瑞",
    "words": "js用途很广，忍不住来学一下^_^"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tKfTcgy1fidqzwf3gyj30hs0hsaal.jpg",
    "name": "张高阳",
    "words": "改了好几遍，目前我已经不想多说什么了"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tNc79gy1fi8o1ri2hcj30hs0hsmy8.jpg",
    "name": "张丽娜",
    "words": "成为一名真正可以翱翔在编程世界的帅气程序媛"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tNc79ly1fien1cn3clj30bf0bfgll.jpg",
    "name": "张倩",
    "words": "习得新技能，培养自己的耐性。"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tKfTcgy1fie0w5fpl2j3075075mxg.jpg",
    "name": "张雪冬",
    "words": "我想知道极客世界的玩法，为人生增加更多可能性。"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tKfTcgy1fidqzbxnllj30fi0fiq4t.jpg",
    "name": "zhaochunyi",
    "words": "踏实上课，做作业，跟上步伐"
  },
  {
    "avatar": "https://thumbnail0.baidupcs.com/thumbnail/52fb2c693131ce2841fc2bbbc0de538a?fid=1783299430-250528-187806972639896&time=1501862400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-CKsa5G9nmK686CFhBAcdJHnvY%2Fw%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5009830728287247056&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
    "name": "赵凯莉",
    "words": "希望我能从中发现很多好玩有趣的事情！"
  },
  {
    "avatar": "https://ws3.sinaimg.cn/large/006tKfTcly1fj7xh5emo8j30f10he48j.jpg",
    "name": "赵睿",
    "words": "争取用更少的代码，实现更多的事💪"
  },
  {
    "avatar": "http://h.hiphotos.baidu.com/image/pic/item/71cf3bc79f3df8dc46979b75c711728b461028af.jpg",
    "name": "赵晓昕",
    "words": "补作业中，看了笑来老师的《人人都是工程师》感觉学习编程好像也没有很难，遇到任务，不断拆分，一步一步跟着走就能入门。以前学过VB，VF，都是皮毛。这次想认真学习一下。还有就是，会编程可以减少很多重复的工作，可以变得更牛，编程的世界有很多牛人和很多牛的做事方法做事思维，也可以提高自己。一个人对着电脑，按照老师的提示一步步前进，遇到困难的时候想想这么多同学已经做过了。他们能做到，我相信自己也可以，就这样一步一步走来。做了很多以前没有做过的事情，黑暗里走了这么久，解决了这么多困难，感觉以后再遇到什么没有解决的事情，也没什么好怕的了。感谢老师，带着我们一路前行"
  },
  {
    "avatar": "https://sh-btfs-v2-yun-ftn.weiyun.com/ftn_handler/91ba18097625786d6930168e2ab53b09e144e2dbe4615d06ca5951997105a2a2e37a4d1d0624af9e3fd5f3e0e895862d2b55476d9cc6b4543f28bda1532e4cbf/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170809192415.jpg",
    "name": "赵一楠",
    "words": "我希望学习JavaScript能帮我在北京找到一份月收入2万的工作"
  },
  {
    "avatar": "http://opqyer7zj.bkt.clouddn.com/17-8-7/84970174.jpg",
    "name": "郑承演",
    "words": "多掌握一种实现数据可视化的方式；数据分析进阶"
  },
  {
    "avatar": "https://thumbnail0.baidupcs.com/thumbnail/f8a43306dbdf7c8269d5edbd1c6e4922?fid=796796274-250528-84981343015016&time=1502715600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-8XDhP2nMXn3yATa4orxXkSaEZB0%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5239161895737332579&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video",
    "name": "周弘",
    "words": "通过学习js，打开编程世界的大门，从而进入另一个世界，以期获得不一样的生活体验"
  },
  {
    "avatar": "https://quanzhan-production.s3.amazonaws.com/uploads/user/image/662/thumb_WechatIMG4.jpeg",
    "name": "周启洲",
    "words": "学过php ruby  js 由于太单调没有下功夫，希望完成本课程有所进步"
  },
  {
    "avatar": "https://ws2.sinaimg.cn/large/006tKfTcgy1fii8sbeyjxj30hm0hmwf7.jpg",
    "name": "周文明",
    "words": "学会编程，用编程改变生活！"
  },
  {
    "avatar": "http://wx4.sinaimg.cn/mw690/005tMBEFgy1fi8ts0awxnj30hs0hs3z9.jpg",
    "name": "周子琦",
    "words": "在校学生，编程小白。希望能学到一项新技能，学会用新的方式表达自己的创意。请老师和同学们多多指教。"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tKfTcgy1fi8vbcwpx0j30no0no0v5.jpg",
    "name": "Rachel",
    "words": "我想做一个小程序解决工作中重复的工作／我想参与未来的世界。"
  },
  {
    "avatar": "https://ws1.sinaimg.cn/large/006tNc79gy1fidieqkz6hj30hs0hsq4m.jpg",
    "name": "朱宁宁",
    "words": "希望自己和孩子都不被现实世界限制，走向自由"
  },
  {
    "avatar": "http://chuantu.biz/t5/164/1502191686x2890149518.jpg",
    "name": "Eugene",
    "words": "相信未来不懂编程就像以前的文盲，想活在未来。"
  },
  {
    "avatar": "https://avatars0.githubusercontent.com/u/24871891?v=4&u=b493442c8b1f23e860c99323eb39bd9569c8979f&s=400",
    "name": "邹海南",
    "words": "自己对编程很感兴趣，觉得它能够让生活、学习更高效，也可以帮自己更好地理解这个信息世界！课程结束后，要建立自己的网站并维护好。也希望能在这里结识更多学习道路上的朋友，共同前进！！"
  }
]

  window.words = words;  
})(this);
