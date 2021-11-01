# Python

> Python2与Python3的区别是很大的，所以一定要注意版本的区别

## 一、环境变量

> 需要添加的环境变量：

```s
C:\Python27
C:\Python27\Scripts\
```

## 二、pip

> Python3安装的时候自动就会安装`pip`
> Python2就需要自行安装`pip`

- 1. 先安装[setuptools](https://pypi.org/project/setuptools/#history), 记得选择合适的版本，比如`41.0.0`
- 2. 下载解压缩，安装

  ```sh
  python ./easy_install.py
  ```

- 3. 安装完之后，下载[pip](https://pypi.org/project/pip/#files)

  ```sh
  python ./setup.py
  ```

- 4. 安装完pip之后就可以`pip install`

## 三、三方库安装

### 1、获取第三方库

- **方式一**： [Python Package Index](https://pypi.org/)，简称 pypi
- **方式二**：假如有些三方库下载下来无法安装（因为解析的问题），则可以访问 [这里（算是补丁吧）](https://www.lfd.uci.edu/~gohlke/pythonlibs)

### 2、安装

- **方式一**：（官方推荐 pip）

```bash
    pip install <三方库名>
```

> 假如下载失败（cannot fecth），可以尝试国内镜像地址
>
> - [http://mirrors.aliyun.com/pypi/simple/](http://mirrors.aliyun.com/pypi/simple/) 阿里云
> - [https://pypi.mirrors.ustc.edu.cn/simple/](https://pypi.mirrors.ustc.edu.cn/simple/)  中国科技大学
> - [http://pypi.douban.com/simple/](http://pypi.douban.com/simple/)  豆瓣
> - [https://pypi.tuna.tsinghua.edu.cn/simple/](https://pypi.tuna.tsinghua.edu.cn/simple/) 清华大学
> - [http://pypi.mirrors.ustc.edu.cn/simple/](http://pypi.mirrors.ustc.edu.cn/simple/) 中国科学技术大学

```bash
pip install <三方库名> -i <镜像地址>
```

- **方式二**：（集成环境安装 ）

> [anaconda](https://www.anaconda.com/products/individual)；集成环境本身就有几百个常用科学包及其依赖

- **方式三**：（文件安装）

> 下载好文件，再用 `pip install`

还可以通过其它的, IDE - `Pycharm`等安装，不过不建议。

### 3、常用的三方库

```s
pillow
numpy
requests
psutil
```

- [常用库详细](https://blog.csdn.net/alice_tl/article/details/89815949)
    - 入门推荐： [廖雪峰 - python](https://www.liaoxuefeng.com/wiki/1016959663602400)

#### 1、去python官网下载python

注意事项：

- 不同的操作系统一定要下对应版本的
- `2.*` 和 `3.*`之间版本差异比较大，一定要看项目是需要哪个版本

#### 2、安装python的包管理工具 pip

- `3.*`版本可以选择安装pip
- 假如安装完没有pip, 可以去[官网](https://pypi.org/project/pip/)下载pip,然后解压缩，进入文件夹`python ./setup.py install` 即可安装
- 测试`pip -v`, 假如没有pip命令，则需要添加环境变量

#### 3、pip安装numpy,opencv

因为国外下载速度太慢，所以一般用国内镜像源

- 阿里云  <http://mirrors.aliyun.com/pypi/simple/>
- 豆瓣 <http://pypi.douban.com/simple/>
- 清华大学 <https://pypi.tuna.tsinghua.edu.cn/simple/>
- 中国科学技术大学 <http://pypi.mirrors.ustc.edu.cn/simple/>
- 华中科技大学 <http://pypi.hustunique.com/>

[具体可查看这里](https://blog.csdn.net/sinat_21591675/article/details/82770360)

```python
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ numpy
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ pillow  # 安装PIL库

# 要安装opencv轮子，需要先下载whl文件
# 下载地址：https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple/opencv-python/
# 官方地址：https://www.lfd.uci.edu/~gohlke/pythonlibs/#opencv 下载极慢
# 下载的时候注意与python版本对应的版本：比如opencv_python-3.4.1-cp36-cp36m-win_amd64.whl就是3.6.*版本使用的
pip install *.whl

```

安装完就可以import使用了

### 4、
