// 引用内置库
const fs = require("fs");
const path = require("path");

// 定义要查询的目标文件夹。
const scanPathString = path.join(__dirname, "../../../words-from-the-heart");

// 定义输出的目标文件及其路径。
const writePathString = path.join(__dirname, "./homework3.txt");

// 保存的文件Striing;
let saveScanFileString = "";
// 搜索的文件类型;
let findFileType = ".json";

//写入文件function;
function writeFile() {
  function callback(err) {
    if (err) {
      console.log("Failwriting");
    } else {
      console.log("Sucesswriting");
    }
  }
  fs.writeFile(writePathString, saveScanFileString, callback);
}

//扫描文件function;
//提供：扫描 total 文件个数，扫描目标类型文件个数，文件夹个数和非目标文件个数;
function scanFile() {
  function callback(err, files) {
    if (err) {
      console.log("Scan Fail");
      return;
    }

    if (files.length != 0) {
      console.log("Find some files and folders");
      var j = 0;
      var k = 0;
      var l = 0;
      var m = 0;

      for (var i = 0; i < files.length; i++) {
        var eachFilesPath = path.join(scanPathString, files[i]);
        var checkDirectry = fs.lstatSync(eachFilesPath).isDirectory();
        if (checkDirectry == true) {
          l = l + 1;
        }

        if (files[i].endsWith(findFileType)) {
          saveScanFileString = saveScanFileString + files[i] + "\n";
          j = j + 1;
        } else {
          k = k + 1;
        }
      }
      m = i - l;
      console.log("Total Find : " + i);
      console.log("There is/are " + l + " Directiory(ies)");
      console.log("Total files : " + m);
      console.log(findFileType + " type files : " + j);
      console.log(k - l + "file(s) is/are not " + findFileType + " files.");

      saveScanFileString = saveScanFileString.trim();
      writeFile();
    } else {
      console.log("There is not any files.");
    }
  }
  fs.readdir(scanPathString, callback);
}

//写入代码嵌套在扫描代码中，不知到怎么做call back 来调取；
scanFile();


/*

Below this line, you can put in markdown to read it.
--------------------------------------------------------
#lesson6_第六次作业_scanAndWrite

This time homework, I spent almost 4 days on it. No matter how busy I was, I should done this 20 days ago. I will talk about something about lesson6 first, and later I will talk about me.

---
lesson6

1. var, let, and const;

At the beginning of study javascript, the prof from university, instructor Mr.Xu and most of textbook in the web, all of those teach with "var" at the beginning. However, this time when I read the node.js API, I found that some code not use "var", they prefer to use "const" and "let".

```
const fs = require('fs');

fs.unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
```
Maybe Mr.Xu taught in later lecture or he already mentioned this point and I missed it. I got some idea from internet. I have some questions and I will out at the end of this article.

2. how important for flow chart;

When I write the version 2, I stop there for half of one day. Then later I try to draw the picture to slove the problem. I also felt happy while I typeing the version 3 homework3.js. I believed that I git the feeling as same as you coding in lesson 4. If everything follow my picture, I belive I can fly in coding.

3. relative and absolute path;

I did not know the difference between relative and absolute path in node.js becasue I even did not know 
```
1. node lesson6\sample.js
2. node sample.js
```
that I can run sample.js by line 1 way. I always cd dir to the folder and run it like line 2.
I tried to solve this problem with one whole day. The reason I can find this problem beacsue I go to saw Hewei's homework, I did three different version homework, and if you want you can find them in [lesson6 study](https://github.com/tiandimeihua/xinshengdaxue_javascript/tree/master/study/lesson6).
After I finish the version 2 which is homework2.js, I do not know how to use callback make scan function and write function toghter, then I go to see hewei's howmwork. I found the proeblem with the path. I used the similar idead with him, but there have difference in code.

4. add some other task;

After I read the code from hewei, he use three different ways to slove the problem in two versions. However, I only come out with one. Moreover, I add different features with him. I found the diffence between he and I. He can think more bigger than me. In the other word, he stands more higher than me now. In his code, I see some new I never see before. Maybe I need to finish reading the textbook. Yep, I must read it.

---
Questions:
1. Can I use "const" and "let" to instead of "var" ?
2. How can I find what I need in the whole API ? Sometimes I do not know where to find it. For example, 
```
.endsWith()
```

---
没有及时的听课，自己的经历还少，精力不够，没有在8月底的时候把课程跟上，5以后直播也很少去看，还好14那天去看了直播，远在重洋，网络好差，坚持了20分钟，我放弃了。 刚刚看lesson6的时候，有好多话想和老师说，但是后来写作业的时候想想算了。谢谢老师。

---
1. 老师上次批改我的作业说 形参和实参 可以点明以下么？ 谢谢。
2. 微信群压了2000+的消息，因为没有及时的听课，怕被剧透，所以没有去看，要现在去看吗？

---
老师辛苦了。
--------------------------------------------------------
*/