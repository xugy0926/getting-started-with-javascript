# lesson2_theSecondHomework_variableAndValue

There is little difference between most of classmates and me. My undergraduate major is Electric Enginnering and Computer Science with full English teaching. The instructor of this Javascript lesson, Mr, XU, hopes that we can write the article to sharing the understanding from each lessons with classmates. To be honest, I should keep this one in Chinese but I want to practice my English in this way. I know I will make lots of mistakes but I will try my best. I will make commit to explian something which is important or I do not explian clear.

The main idea of lessons2 suggests that what is varable and value in Javascript. The instructor kept the last lesson example in the beginning, envirnment and hand out question Who is Xiao Ming?

Then he describe the relationship between varable and value. The point is that Everything starts with varable name then define its value. At here, I explian it in another way.

    a{b:c;}
It comes from css, but their thinkings are in same way. a is the name of the objet (id or group), b is the property of a, and c is the value of the property.
// a 是一个名字（由你自己命名，例如：小明），b 是 命名 a 的属性， c 是所定义的值 Js 中写法会不同此处只是帮助理解//
Here I put a real example, 

    xiaoMing{eye-color:black;eye-size:big}, we can say "xiaoming has big black eyes".
Moreover, the realationship between them in logic is a ---> b ---> c, whcih means that it is single way. You could not come back. Assuming, a is unqiune name, the property b of a, and the value of property b may be same with other object x, object y, etc. It is only value same. Here is another example,

    xiaoMing{leg-length:long;hair-length:short;}
    xiaoHong{leg-length:medium;hair-length:long;}
even though both have "long" value, but we know that xiaoMing does not have long hair and xiaoHong does not have long leg.
//Js 中会遇到Value 一样的， 但是这个Value 的属性和名称应该是不一样，也有少数完全一样的时候是因为其自身的小环境所导致的，相信老师以后会讲，书上也会有讲，可以搜索 local varable and global varable//

After talk about the relationship between the varable and value, we should know how to name the varable and what types of value could exist.

    All JavaScript variables must be identified with unique names.
    These unique names are called identifiers.
    Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
    The general rules for constructing names for variables (unique identifiers) are:
    Names can contain letters, digits, underscores, and dollar signs.
    Names must begin with a letter
    Names can also begin with $ and _ (but we will not use it in this tutorial)
    Names are case sensitive (y and Y are different variables)
    Reserved words (like JavaScript keywords) cannot be used as names

and the types of value : {数字 number [整数init，浮点float，双精准double];} {文本/字符串 String} {布尔(为啥这么翻译，好奇？) boolean} {对象 object} {数组 Array}, undefind and null. Those type of values are priode by JavaScript core, it is basic and loacl service.

Now, I would like to talk about the rule of identified. There are three popular identifier naming convention. The instructor shows more than three types in lecture. 
    
    var height = 170, weight = 130.1;
    // normal, easy to understanding. 
    var isMan = true;
    //lower camel case, start with small letter for the first letter of later words use Capital.
    var wechat_user_name = 'xiaoming';
    //Pascal Case, use "-" between two words. 
    At last, offical doc would like to use Hungarian notation, here is the link of information about it.     
    //https://en.wikipedia.org/wiki/Hungarian_notation

Addtionally,

    <\n>

in Javascript is meaning make the empty line, and change to the next line.

In conclusion, in lesson2, the goal of it is understanding variables and value, the new pint I got from this lecture is the purpose of code is deal with date then output the result, and I need to use the best way to slove my problem.

---

additional homework: https://tiandimeihua.github.io/xinshengdaxue_javascript/
