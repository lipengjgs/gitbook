# Flutter

## 一、Android Studio (环境)

### 1、模拟器调试

> 夜神模拟器， 提前将`flutter`SDK下的`bin`添加到环境变量

```shell
# 进入夜神模拟器的安装目录的 bin 下
./adb.exe connect 127.0.0.1:62001
# vscode中的右下角会显示
# 在项目的目录下：(假如在vscode中无法执行flutter命令，而正常是可以执行的，桌面上右键单击vscode图标，兼容性选项卡下勾选以管理员身份运行，重新运行即可)
flutter run
```

![vscode连接模拟器](/resources/flutter/VSCode连接模拟器.png)

### 查看包名

- 进入sdk目录下

```s
./aapt.exe dump badging *.apk
```

#### 2、AndroidStudio真机调试

- 可以修改右上角的`main.dart`下拉那里`Edit Configurations`, 进行更换入口
- 点击加号新增Flutter，修改`name`和`Dart entrypoint`
- 连接手机运行即可

```s
StatelessWidget 和 StatefulWidget切换时，光Hot Reload依然报错，就需要再 Hot Restart一下
```

## 二、Dart

> 在Dart语言中使用下划线前缀标识符，会强制其变成私有的
> Dart2成为强类型语言
> 2015年第一个版本叫sky
> 程序主要有两种运行方式：静态编译与动态解释

- JIT
    （Just-in-time）即 “即时编译”
- AOT
    （Ahead of time）即 “提前编译”

```dart
// 没有!== 只有!=
// List
```

## 三、Flutter

### 1. 目录结构

```s
/android      #安卓平台相关代码
/ios          #ios平台相关代码
/lib          #flutter相关代码，主要编写的代码就在这个文件夹
/test         #存放测试代码
pubspec.yaml  #配置文件，放一些第三方库的依赖
```

### 2. 组件

> 所有的东西都是组件(widget)，各种widget嵌套

```dart


```

### 3. 格式化

```shell
flutter format .
```

### 4. 安装三方包

> 打开资源管理器，kill 掉所有 dart 进程
>
> 删除 flutter sdk 安装目录下的 `bin/cache/lockfile` 文件

- 点击 `packages get` 无法下载时，添加两个环境变量，最好重启一下

```sh
PUB_HOSTED_URL ===== https://pub.flutter-io.cn
FLUTTER_STORAGE_BASE_URL ===== https://storage.flutter-io.cn
```

- `flutter doctor` 后再 点击 `packages get` ||`flutter pub get`

### 5. 代码结构

- 导入包

```dart
import 'package:flutter/material.dart';
```

- 更新状态

```dart
setState
```

### 导入已有的flutter项目

- 直接 `file -> open` 项目文件夹即可

## [Reading](https://book.flutterchina.club/)

## [查询三方库版本](https://pub.flutter-io.cn/packages)
