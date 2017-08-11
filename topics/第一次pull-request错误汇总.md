## 错误汇总

#### 错误1

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/pull-request-error/error-1.png)

上面犯了两个错误，JSON文件的内容要满足JSON格式，一对key-value后面需要一个半角的都好隔开。
代码不认识全角字符，引号和分号一定要用英文半角。
```
{
"key1": "value1",
"key2": "value2"
}
```

[JSON wiki](https://zh.wikipedia.org/wiki/JSON)

[第一次使用JSON](https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%BD%BF%E7%94%A8JSON.md)

#### 错误2

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/pull-request-error/error-2.png)

这张url是百度云盘的网页链接，想获取图片，要把鼠标放在图片上-> 右键 -> 复制图片地址

#### 错误3

![](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/pull-request-error/error-3.png)

avatar的值不要用`![](...)`这种格式，这种格式是markdown的格式。直接把()里的https的url拿出来即可。

