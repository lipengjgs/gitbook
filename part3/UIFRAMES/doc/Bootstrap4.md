
# Bootstrap4

> 现在基本上没什么人用boots了，但是学习他可以了解他的设计思想、还有CSS规则
> 目标： 能够对它进行二次开发，纳为己用

1、viewport设置

```
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```
2、由于设置了* {box-sizing:border-box;} 当与第三方插件等冲突的时候，可以用content-box重置覆盖

```
.selector {
  box-sizing: content-box;
}
```

3、