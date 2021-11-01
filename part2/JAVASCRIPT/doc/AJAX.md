# AJAX

## 服务器端

1. 数据库服务器 SQL
2. Web服务器 PHP

    ```php
    mysqli_connect()
    mysqli_query()
    mysqli_insert_id()
    mysqli_affected_rows()
    mysqli_fetch_assoc()
    mysqli_fetch_all()
    ```

## HTTP协议

1. 请求消息格式

- 请求起始行
    a. 请求方法
    ```js
        GET
        POST
        PUT
        DELETE
        HEAD
        TRACE
        OPTIONS
        CONNECT
    ```
    b. 空格
    c. 请求URI
        /xx.php?k1=v1&k2=v2
    d. 空格
    e. 协议版本

- 请求头部
```js
Content-Type: 
    text/plain
    application/x-www-form-urlencoded
    multipart/form-data
```

- CRLF
- 请求主体 : k1=v1&k2=v2

2. 响应消息格式

- 响应起始行
```
协议版本
空格
状态码
    1xx
    2xx
    3xx
    4xx
    5xx
空格
原因短句
```

- 响应头部
```js
Content-Type: 
    text/plain
    text/html
    application/javascript
    application/xml
    application/json
    text/css
    image/png
    image/jpeg
    .....
```
- CRLF
- 响应主体

## 客户端

1. 原生AJAX

- 发起两种请求

GET
```js
1)  var xhr = new XMLHttpRequest();
2) xhr.onreadystatechange = function(){}
3) xhr.open('GET', 'x.php?k=v', true)
4) xhr.send(null);
```

POST
```js
1)  var xhr = new XMLHttpRequest();
2) xhr.onreadystatechange = function(){}
3) xhr.open('POST', 'x.php', true)
3.5) xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
4) xhr.send('k1=v1&k2=v2');
```

- 接收五种响应

    a. text
    服务器端
        header('Content-Type: text/plain');
        echo 'succ';
    客户端
        xhr.responseText

    b. html

    服务器端
        header('Content-Type: text/html');
        echo '<li></li><li></li>';
    客户端
        ul.innerHTML = xhr.responseText

    c. script

    服务器端
        header('Content-Type: application/javascript');
        echo 'alert(123)';
    客户端
        eval( xhr.responseText )

    d. xml

    服务器端
        header('Content-Type: application/xml');
        echo '<plist><p></p><p></p></plist>';
    客户端
        xhr.responseXML

    e. json

    服务器端
        header('Content-Type: application/json');
        echo '[ {},{} ]';
        echo '{ }';
        echo json_encode($list);
    客户端 
        JSON.parse( xhr.responseText )

2. jQuery中AJAX

```js
1) $('div#header').load('header.php')
2) $.get('x.php',  {k: v}, function(txt, msg, xhr){})
3) $.post('x.php', {k: v, k: v}, function(txt, msg, xhr){})
4) $.getScript('x.php')
5) $.getJSON('x.php', {k:v}, function(obj, msg, xhr){ })
6) $.ajax( {
   type: 'GET',
   url: 'x.php',
   data: {k: v},
   beforeSend: fn,
   success: fn,
   error: fn,
   complete: fn
} )
```