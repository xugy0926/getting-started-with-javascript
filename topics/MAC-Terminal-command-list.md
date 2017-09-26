# Mac 终端常用指令

下面这些命令是初学者经常要用到的指令，请熟记。

具体用法的含义，请善用搜索引擎进行查询。

## 目录操作

| 命令名 | 功能                       | 举例              |
| ------ | -------------------------- | ----------------- |
| mkdir  | 创建目录               | mkdir folder_name |
| rmdir  | 删除目录               | rmdir folder_name |
| mv     | 移动或重命名目录       | mv dir1 dir2      |
| cd     | 改变当前目录               | cd folder_name    |
| pwd    | 显示当前目录完整的绝对路径 | pwd               |
| ls     | 显示当前目录的所有文件     | ls / ls -la       |

## 文件操作（含目录）

| 命令名 | 功能                     | 举例                     |
| ------ | ------------------------ | ------------------------ |
| cp     | 复制文件或目录           | cp file1 file2           |
| rm     | 删除文件或目录           | rm file_name             |
| mv     | 移动或重命名文件名或目录 | mv file_name1 file_name2 |
| open   | 打开文件或文件夹         | open file_name / open .  |

## 命令行的技巧

```shell
我们在终端中操作的时候，有时候来来回回地进出文件夹就会迷路，这时可以执行 pwd 来看看完整的当前路径的位置
> pwd

在当前文件夹下创建 my_folder 文件夹
> mkdir my_folder

进入刚才创建的 my_folder，注意要紧接着刚才的命令执行，否则可能出错
> cd my_folder

退到父级目录
> cd ..

退到父级目录的父级目录
> cd ../..

删除文件夹 my_folder，下面两个命令都可以
> rmdir my_folder
> rm -rf my_folder //强制删除
```
