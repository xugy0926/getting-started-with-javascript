# Windows 命令行常用命令

下面这些命令是初学者经常要用到的指令，请熟记。

具体用法的含义，请善用搜索引擎进行查询。

## Windows 终端/命令行的打开方式

点击[开始]菜单 -> 点击[运行]或者按下 `Win+R` 快捷键 -> 输入 `cmd` 并按下回车

## 切换磁盘

```shell
// 切换到C盘
> C:

// 切换到D盘
> D:
```

## 目录操作

| 命令名 | 功能                           | 举例                        |
| ------ | ------------------------------ | --------------------------- |
| mkdir  | 创建目录                       | mkdir folder_name           |
| rmdir  | 删除目录                       | rmdir folder_name           |
| xcopy  | 复制文件夹的内容到另一个文件夹 | xcopy D:\folder1 D:\folder2 |
| cd     | 改变当前目录                   | cd folder_name              |
| dir    | 显示当前目录下的所有文件         | dir                         |

## 文件操作

| 命令名 | 功能       | 举例                                |
| ------ | ---------- | ----------------------------------- |
| copy   | 复制文件   | copy D:\file1.txt D:\file2.txt      |
| del    | 删除文件   | del file_name                       |
| ren    | 修改文件名 | ren file_name.txt new_file_name.txt |