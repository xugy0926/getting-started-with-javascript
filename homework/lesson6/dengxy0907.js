
var fs =require('fs');//引入fs模块
var dirPathString = '../paixu/WORDS-FROM-THE-HEART';//定义要查询的文件夹
var files =fs.readdirSync(dirPathString);
var needFiles= [];
(function filesContent(){
    for(i=0;i<files.length ;i++){
         var str=files[i];
         var patt1 =new RegExp(".json");
         var result =patt1.test(str);
        if(result){
              needFiles.push(files[i]);
         }else{
             
         }
    }

})(this);//把符合要求的文件名写入数组needfile

var outputPathString = '../paixu/dengxy0907.txt';//定义要写入的文件夹
var filesContent = needFiles;
fs.writeFileSync(outputPathString,filesContent);



 

