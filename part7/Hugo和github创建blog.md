# 利用`Hugo`和`github pages`创建自己的博客

## 1. 下载`Hugo`，添加环境变量

## 2. `github`库名一定要是 `<username(github账号)>.github.io`，否则会导致CSS样式等无法读取

## 3. 命令行：`hugo new site <网站文件夹名称>`

## 4. clone想用的[博客模板主题](https://themes.gohugo.io)到文件夹中，主题使用调整配置方法可查看对于的主题仓库

## 5. 编辑配置文件`config.toml`

## 6. `content`文件夹下`post`文件夹下写博客文档

## 7. Hogo常用命令

    ```s
    hugo server -D  # 本地预览
    hugo            # 构建，构建文件夹为public，将public文件夹关联到你的github仓库，上传即可
    ```

## 参考

1. [文档](https://zhuanlan.zhihu.com/p/57361697)
