# [Mingw-w64](http://www.mingw-w64.org/doku.php/download)在win10下的安装使用

## 介绍

MinGW(Minimalist GNU for Windows), 是一个适用于微软windows应用程序的极简开发环境。MinGW提供了一个完整的开源编程工具集，适用于原生MS-Windows应用程序的开发，并且不依赖于任何第三方C运行时DLL。MinGW主要供在MS-Windows平台上工作的开发人员使用，但也可跨平台使用，MinGW包括：

- GCC的一个移植，包括C，C ++，ADA和FORTRAN编译器;
- GNU Binutils (如:as, ld, ar等);
- 一个命令行安装程序，带有可选的GUI前端，（mingw-get）用于MS-Windows上的MinGW和MSYS部署;
- 一个GUI首次设置工具（mingw-get-setup），可以帮助启动并运行mingw-get。
- Mingw-w64是原始mingw.org项目的升级版，该项目旨在支持Windows系统上的GCC编译器。 它在2007年进行了分支，以便为64位和新API提供支持。 从那以后，它得到了广泛的使用和分发

## 安装

### 选项说明

- Version制定版本号，从4.9.1-8.1.0，按需选择，没有特殊要求就用最新版吧；
- Architecture跟操作系统有关，64位系统选择x86_64，32位系统选择i686;
- Threads设置线程标准可选posix或win32;
- Exception设置异常处理系统，x86_64可选为seh和sjlj，i686为dwarf和sjlj;
- Build revision构建版本号，选择最大即可。
- 下载压缩包的话，选择合适位置解压，将mingw64/bin加入环境变量即可

### 安装完成判断

添加环境变量后，打开CMD，执行`gcc -v`

### vscode中使用

- 安装插件`C/C++`, 启用时自动会加载对应的路径
