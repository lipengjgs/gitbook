# HTTP

> Hyper Text Transfer Protocal
>
> RFC - 最著名的是[RFC-2616](https://www.rfc-editor.org/info/rfc2616) : 定义了今天普遍使用的一个版本 HTTP 1.1
>
> 是一个应用层协议， 由 **请求** 和 **响应** 构成， B/S模型 || C/S模型
>
> 是一个无状态协议（同一个客户端的这次请求和上次请求是没有对应关系）； 无连接 （限制每次连接只处理一个请求）
>
> 通常承载于TCP协议之上， 有时也承载于TLS或SSL协议层之上（HTTPS）
>
> HTTP默认端口号： 80 ； HTTPS默认端口号： 443

- 抓包工具： Wireshark

## [基本概念](http://medialize.github.io/URI.js/about-uris.html)

- URI （Uniform Resource Identifiers）统一资源标识符
    - URL (Uniform Resource Locator) 统一资源定位符 eg: foo://example.com:8042/over/there?name=ferret#nose
    - URN (Uniform Resource Name) 统一资源命名符 eg: urn:isbn:0201896834 ； urn:example:animal:ferret:nose

> URL 与 URN 是 URI 的 **子集**

```js
// 一个通用的URL结构

              origin
       __________|__________
      /                     \
                         authority
     |             __________|_________
     |            /                    \
              userinfo                host                          resource
     |         __|___                ___|___                 __________|___________
     |        /      \              /       \               /                      \
         username  password     hostname    port     path & segment      query   fragment
     |     __|___   __|__    ______|______   |   __________|_________   ____|____   |
     |    /      \ /     \  /             \ / \ /                    \ /         \ / \
    foo://username:password@www.example.com:123/hello/world/there.html?name=ferret#foo
    \_/                     \ / \       \ /    \__________/ \     \__/
     |                       |   \       |           |       \      |
  scheme               subdomain  \     tld      directory    \   suffix
                                   \____/                      \___/
                                      |                          |
                                    domain                   filename

// 一个通用的URN结构

urn:example:animal:ferret:nose?name=ferret#foo
    \ / \________________________/ \_________/ \ /
     |               |                  |       |
  scheme       path & segment         query   fragment

```

- DNS解析

## 请求过程（原理）

1. 浏览器向 DNS 服务器请求解析该 URL 中的域名所对应的 IP 地址;

2. 解析出 IP 地址后，根据该 IP 地址和默认端口 80，和服务器建立TCP连接;

3. 浏览器发出读取文件(URL 中域名后面部分对应的文件)的HTTP 请求，该请求报文作为 TCP 三次握手的第三个报文的数据发送给服务器;

    [http://www.blogjava.net/images/blogjava_net/amigoxie/40799/o_http%e5%8d%8f%e8%ae%ae%e5%ad%a6%e4%b9%a0-%e6%a6%82%e5%bf%b5-3.jpg](http://www.blogjava.net/images/blogjava_net/amigoxie/40799/o_http%e5%8d%8f%e8%ae%ae%e5%ad%a6%e4%b9%a0-%e6%a6%82%e5%bf%b5-3.jpg)
    1）No1：浏览器（192.168.2.33）向服务器（220.181.50.118）发出连接请求。此为TCP三次握手第一步，此时从图中可以看出，为SYN，seq:X （x=0）
    2）No2：服务器（220.181.50.118）回应了浏览器（192.168.2.33）的请求，并要求确认，此时为：SYN，ACK，此时seq：y（y为0），ACK：x+1（为1）。此为三次握手的第二步；
    3）No3：浏览器（192.168.2.33）回应了服务器（220.181.50.118）的确认，连接成功。为：ACK，此时seq：x+1（为1），ACK：y+1（为1）。此为三次握手的第三步；
    4）No4：浏览器（192.168.2.33）发出一个页面HTTP请求；
    5）No5：服务器（220.181.50.118）确认；
    6）No6：服务器（220.181.50.118）发送数据；
    7）No7：客户端浏览器（192.168.2.33）确认；

4. 服务器对浏览器请求作出响应，并把对应的 html 文本发送给浏览器;

5. 释放 TCP连接;

6. 浏览器将该 html 文本并显示内容;

## 请求方法

- GET       请求指定的页面信息，并返回实体主体
- HEAD      类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头
- POST      向指定资源提交数据进行处理请求（例如提交表单或者上传文件）；数据被包含在请求体中；POST请求可能会导致新的资源的建立和/或已有资源的修改
- PUT       从客户端向服务器传送的数据取代指定的文档的内容
- DELETE    请求服务器删除指定的页面
- CONNECT   HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器
- OPTIONS   允许客户端查看服务器的性能
- TRACE     回显服务器收到的请求，主要用于测试或诊断

## 请求结构与响应结构

> TCP流中的文本

第一部分：请求行，第一行明了是post请求， path 为 / ，以及http1.1版本。
第二部分：请求头部，第二行至第六行。
第三部分：空行，第七行的空行。
第四部分：请求数据，第八行。

```html
POST / HTTP1.1
Host:www.wrox.com
User-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)
Content-Type:application/x-www-form-urlencoded
Content-Length:40
Connection: Keep-Alive
 
name=Professional%20Ajax&publisher=Wiley
```

第一部分：状态行，由HTTP协议版本号， 状态码， 状态消息 三部分组成。
第一行为状态行，（HTTP/1.1）表明HTTP版本为1.1版本，状态码为200，状态消息为（ok）
第二部分：消息报头，用来说明客户端要使用的一些附加信息

第二行和第三行为消息报头，
Date:生成响应的日期和时间；Content-Type:指定了MIME类型的HTML(text/html),编码类型是UTF-8

第三部分：空行，消息报头后面的空行是必须的

第四部分：响应正文，服务器返回给客户端的文本信息。

```html
HTTP/1.1 200 OK
Date: Fri, 22 May 2009 06:07:21 GMT
Content-Type: text/html; charset=UTF-8
 
<html>
      <head></head>
      <body>
            <!--body goes here-->
      </body>
</html>
```

## 状态码

1xx：指示信息--表示请求已接收，继续处理

2xx：成功--表示请求已被成功接收、理解、接受

3xx：重定向--要完成请求必须进行更进一步的操作

4xx：客户端错误--请求有语法错误或请求无法实现

5xx：服务器端错误--服务器未能实现合法的请求

```js
200 OK                        //客户端请求成功
400 Bad Request               //客户端请求有语法错误，不能被服务器所理解
401 Unauthorized              //请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用 
403 Forbidden                 //服务器收到请求，但是拒绝提供服务
404 Not Found                 //请求资源不存在，eg：输入了错误的URL
500 Internal Server Error     //服务器发生不可预期的错误
503 Server Unavailable        //服务器当前不能处理客户端的请求
```

## Fetch

```js
function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}
```

## 数据分包的原因

```text
Basically, when data is sent across the web, it is sent as thousands of small chunks,

so that many different web users can download the same website at the same time. 

If websites were sent as single big chunks, only one user could download one at a time, 

which obviously would make the web very inefficient and not much fun to use.
```

## Cookie

> domain path 不同路径下拿的cookie不一样， 在做用JS存储Cookie的时候，发现在不同的目录下，调用同一个js方法来存储Cookie，到别的目录取不出或取出的值是不对的
域名path 重定向的时候尤其要注意

```js
// 设置cookie
        setCookie(cname, cvalue, exdays, path) {
            let d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toGMTString();
            let cPath = '';
            if(path) {
                cPath = ";path=/" + path;
            }
            document.cookie = cname + "=" + cvalue + "; " + expires + cPath;
        },
        // 获取cookie
        getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(name) > -1) return c.substring(name.length, c.length);
            }
            return "";
        },

```

## http2.0

## http3.0
