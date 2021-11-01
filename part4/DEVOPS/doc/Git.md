# GIT

1. [基础用法](#基础用法)
2. [高级用法](#高级用法)
   1. [Git嵌套](#git嵌套)
3. [Github](#github)
   1. [查看github项目大小(必须是公开的仓库)](#查看github项目大小必须是公开的仓库)
4. [本地仓库关联多个远程仓库](#本地仓库关联多个远程仓库)
   1. [方法1：每次push、pull时需分开操作](#方法1每次pushpull时需分开操作)
   2. [方法2：push和pull无需额外操作](#方法2push和pull无需额外操作)
5. [问题](#问题)
   1. [clone succeed, but checkout fail?](#clone-succeed-but-checkout-fail)
   2. [.gitignore](#gitignore)
   3. [问题： `fatal: refusing to merge unrelated histories`](#问题-fatal-refusing-to-merge-unrelated-histories)
   4. [撤销上一次提交](#撤销上一次提交)
   5. [git 每次push时都要输入用户名密码](#git-每次push时都要输入用户名密码)
   6. [gitee too many connections](#gitee-too-many-connections)
6. [附录](#附录)

## 基础用法

```s
# 恢复某个已修改的文件（撤销未提交的修改）
git checkout *.js

# 更新远程代码分支
git remote update origin -p
```

## 高级用法

### Git嵌套

[Git Submodule](https://www.cnblogs.com/lsgxeva/p/8540758.html)

> 项目的版本库在某些情况下需要引用其他版本库中的文件
> 例如公司积累了一套常用的函数库，被多个项目调用，显然这个函数库的代码不能直接放到某个项目的代码中，而是要独立为一个代码库，那么其他项目要调用公共函数库该如何处理呢？
> 分别把公共函数库的文件拷贝到各自的项目中会造成冗余，丢弃了公共函数库的维护历史，这显然不是好的方法；这个时候就可以用到`Git Submodule`


## Github

[发布github网站](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/getting-started-with-github-pages)


### 查看github项目大小(必须是公开的仓库)

直接在浏览器地址栏输入[https://api.github.com/repos/organization/repository]


## 本地仓库关联多个远程仓库

> 摘自[知乎](https://zhuanlan.zhihu.com/p/82388563)
>
> 通常情况下，一个本地Git仓库对应一个远程仓库，每次pull和push仅涉及本地仓库和该远程仓库的同步；
>
> 在一些情况下，一个本地仓库需要同时关联多个远程仓库，比如：同时将一个项目发布在Github和Coding上，以兼顾国内外的访客。


### 方法1：每次push、pull时需分开操作

首先，查看本地仓库所关联的远程仓库：(假定最初仅关联了一个远程仓库)

    ```s
    $ git remote -v
    origin  git@github.com:keithnull/keithnull.github.io.git (fetch)
    origin  git@github.com:keithnull/keithnull.github.io.git (push)
    ```

然后，用git remote add <name> <url>添加一个远程仓库，其中name可以任意指定（对应上面的origin部分），比如：

    ```s
    $ git remote add coding.net git@git.coding.net:KeithNull/keithnull.github.io.git
    # 删除
    $ git remote rm coding.net
    ```

再次查看本地仓库所关联的远程仓库，可以发现成功关联了两个远程仓库：

    ```s
    $ git remote -v
    coding.net      git@git.coding.net:KeithNull/keithnull.github.io.git (fetch)
    coding.net      git@git.coding.net:KeithNull/keithnull.github.io.git (push)
    origin  git@github.com:keithnull/keithnull.github.io.git (fetch)
    origin  git@github.com:keithnull/keithnull.github.io.git (push)
    ```

此后，若需进行push操作，则需要指定目标仓库，git push <repo> <branch>，对这两个远程仓库分别操作：

    ```s
    $ git push origin master
    $ git push coding.net master
    ```

同理，pull操作也需要指定从哪个远程仓库拉取，git pull <repo> <branch>，从这两个仓库中选择其一:

    ```s
    $ git pull origin master
    $ git pull coding.net master
    ```

### 方法2：push和pull无需额外操作

在方法1中，由于我们添加了多个远程仓库，在push和pull时便面临了仓库的选择问题。诚然如此较为严谨，但是在许多情况下，我们只需要保持远程仓库完全一致，而不需要进行区分，因而这样的区分便显得有些“多余”。

同样地，先查看已有的远程仓库：(假定最初仅关联了一个远程仓库)

    ```s
    $ git remote -v
    origin  git@github.com:keithnull/keithnull.github.io.git (fetch)
    origin  git@github.com:keithnull/keithnull.github.io.git (push)
    ```

然后，不额外添加远程仓库，而是给现有的远程仓库添加额外的URL。使用git remote set-url -add <name> <url>，给已有的名为name的远程仓库添加一个远程地址，比如：

    ```s
    $ git remote set-url --add origin git@git.coding.net:KeithNull/keithnull.github.io.git
    ```

再次查看所关联的远程仓库：

    ```s
    $ git remote -v
    origin  git@github.com:keithnull/keithnull.github.io.git (fetch)
    origin  git@github.com:keithnull/keithnull.github.io.git (push)
    origin  git@git.coding.net:KeithNull/keithnull.github.io.git (push)
    ```

可以看到，我们并没有如方法1一般增加远程仓库的数目，而是给一个远程仓库赋予了多个地址（或者准确地说，多个用于push的地址）。

因此，这样设置后的push 和pull操作与最初的操作完全一致，不需要进行调整。

总结: 二者各有优劣，出于简便考虑，可最终采用了方法2 

更多 `git remote --help`

## 问题

### clone succeed, but checkout fail?

> 直接`download zip`下载是其中一个方法

### .gitignore

- 匹配模式前 / 代表项目根目录
- 匹配模式最后加 / 代表是目录
- 匹配模式前加 ！代表取反
- `*` 代表任意个字符
- ? 匹配任意一个字符
- ** 匹配多级目录

[.editorconfig](https://editorconfig.org/)


### 问题： `fatal: refusing to merge unrelated histories`

> 原因： 远程库不同 - 分支 - 分支有不一样的提交 `This branch is 1 commit ahead, 1 commit behind master.`
> 解决方法： `git pull origin master --allow-unrelated-histories`

```s
As with most things in git you a have a couple options

Merge master into your dev branch

git fetch origin master   
git checkout dev
git merge origin/master
git checkout master
git merge dev

Rebase dev ontop of current master

git fetch origin master
git checkout dev
git rebase origin/master
git checkout master
git merge --no-ff dev

The rebase will look cleaner in your history.
```

### 撤销上一次提交

```s
# 查看提交sha1
git log
# 撤销
git reset --hard 上上次sha1

# 只保留修改的撤销
git reset --hard HEAD~

```

### git 每次push时都要输入用户名密码

```s
git config --global credential.helper store
```

### gitee too many connections

> 等一段时间再试

## 附录

- [GIT文档](https://git-scm.com/docs)
- [Github漫游指南](http://github.phodal.com/)
