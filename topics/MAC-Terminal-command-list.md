这些命令是初学者经常要用到的指令，请熟记。

##### 目录操作

命令名|功能|举例
----|----|----
mkdir|创建一个目录          |mkdir folder_name
rmdir|删除一个目录          |rmdir folder_name
mvdir|移动或重命名一个目录   |mvdir dir1 dir2
cd   | 改变当前目录         |cd folder_name
pwd  |显示当前目录的全路径   | pwd
ls   |显示当前目录的所有文件 | ls / ls -la

##### 文件操作

命令名|功能|举例
----|----|----
cp | 赋值文件或目录| cp file1 file2
rm | 删除文件或目录| rm file_name
mv | 修改文件名或目录 | rm file_name
open | 打开文件或文件夹 | open file_name / open .

##### 命令行的技巧

```
有时候我们操作终端的时候，进出文件夹会迷路，这时执行pwd来看看当前的路径位置
> pwd

在当前文件夹下创建my_folder目录
> mkdir my_folder

进入创建的my_folder
> cd my_folder

退到上一个目录
> cd ..

推到上一个的上一个目录
> cd ../..

删除文件夹my_folder
> rmdir my_folder
> rm -rf my_folder //强制删除

```
