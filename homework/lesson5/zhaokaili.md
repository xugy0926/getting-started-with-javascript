#第五节课作业：

**代码中第1行、第4行、第5行的name变量有什么差异？**

```javascript
function output(name){
    console.log(name);
}

var name = 'Hello, JS';
output(name);
```

1.  var name = 'Hello, JS';   name：在内存上开辟一片空间，这个空间的名字叫name，里面存的是指向 'Hello, JS'的地址，就是说我们拿着name里面存的这个地址，可以根据地址找到'Hello, JS'

2.  function output(name){
    console.log(name);
}    此处第一个name是指在定义函数的时候在内存上单独开辟一块空间，在函数只是定义未被调用时，这块空间上没有存储任何东西，为空（null）

3. output(name); 此处是一个传参的过程，就是指把第var name = 'Hello, JS';中的name空间中存储的地址复制一份到unction output(name){
    console.log(name);
}    中开辟的name空间上，output函数就可以拿着这个索引找到'Hello, JS'，然后就可以对'Hello, JS'进行操作



