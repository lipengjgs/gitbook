# [Linux](http://linux.vbird.org/)

## Linux介绍

### 1. Distributions（发行版）

> 每个distribution除了架构的严谨度与选择的套件内容外，其实差异不太大

- Ubuntu
- CentOS

## 快速搭建带后台的php模板网站（[宝塔](https://www.bt.cn/)，linux）

> 宝塔是一个运维工具，没必要深入去了解学习，知道基本怎么用就OK

### 1. 安装

- 通过xshell等工具，进入主机空间（以阿里云，主机空间最好干净一些些，以免发生莫名其妙的情况）

```sh
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install.sh && sh install.sh
```

- 等待安装完成即可；安装完最后可以看到log中有登录账号和密码等；

### 2. 上传代码

- 进入宝塔登录界面（一般是 `域名:8888`）进行登录；
- 【文件】 - 【上传代码包】-【解压】；

### 3. 安装环境，创建网站

- 【软件管理】 - 安装相关的环境（注意版本）；
- 【数据库】- 【root密码】；
- 【网站】-【添加站点】-【指定好根目录和环境版本】；

### 4. 进入网站域名

- 【一般为install文件夹】- 【设置项目的数据库，数据之类的】- 【完成】；
- 完成之后即可访问对应的页面；

## Linux操作(基本命令)

```sh
ls    # -al 显示包括隐藏文件
ll    # 显示文件列表详细信息
mkdir # 目录名 建立目录
touch # 新建文件
uname # 显示版本信息
dir   # 显示当前目录文件
pwd   # 查询当前所在的目录位置
cd    # cd　..回到上一层目录，注意cd 与..之间有空格。cd　/返回到根目录。
cat   # 文件名 查看文件内容
cat >abc.txt  # 往abc.txt文件中写上内容。
more  # 文件名 以一页一页的方式显示一个文本文件。
cp    # 复制文件
mv    # 移动文件
rm 文件名 # 删除文件，rm -a 目录名删除目录及子目录
rmdir    # 删除子目录，目录内没有文档。
chmod    # 设定档案或目录的存取权限
grep     # 在档案中查找字符串
diff     # 档案文件比较
find     # 档案搜寻
date     # 现在的日期、时间
who      # 查询目前和你使用同一台机器的人以及Login时间地点
w        # 查询目前上机者的详细资料
whoami   # 查看自己的帐号名称
groups   # 查看某人的Group
passwd   # 更改密码
history  # 查看自己下过的命令
ps       # 显示进程状态
kill     # 停止某进程
gcc      # 黑客通常用它来编译C语言写的文件
su       # 权限转换为指定使用者
telnet IP  # telnet连接对方主机（同win2K），当出现bash$时就说明连接成功。
ftp      # ftp连接上某服务器（同win2K）
netstat -nap  # 查看端口号
```

## Linux上传下载工具

### 1. FileZilla

### 2. lrzsz

```sh
yum insall lrzsz
# rz 上传
rz

# sz 下载
sz [file]
```

### 3. sftp

> 通过 sftp 协议进行连接

```s
# 上传
put

# 下载
get
```

## Linux 下载解压文件过程

```sh
# 下载
wget [url]
# 解压
tar xf [name].xz

cd ./[name]

# 修改环境变量 profile, 先备份
cp /etc/profile /etc/profile.bak
vim /etc/profile

# 添加 export PATH=$PATH:*/bin
# 使之立即生效
source /etc/profile

# 单单使用 export PATH=$PATH:*/bin 是 临时添加环境变量

# 解压zip文件
# 下载unzip
unzip [file]

```

