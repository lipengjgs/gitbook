# NGINX

> 主要是学习nginx.conf（核心）的配置

inux下配置文件一般在/etc/nginx/nginx.conf || /usr/local/nginx/nginx.conf

```bash
# nginx进程，一般设置为和cpu核数一样
worker_processes auto;

# 错误日志存放目录
# nginx的error_log类型如下（从左到右：debug最详细 crit最少）： 
# [ debug | info | notice | warn | error | crit ] 
error_log /var/log/nginx/nginx_error.log crit;

# 进程pid存放目录
pid /var/run/nginx.pid;

# 用户，默认是nginx 可以不用设置
user nginx;

# 最大文件打开数
worker_rlimit_nofile 51200;

# cpu亲和力配置，让不同的进程使用不同的cpu
worker_cpu_affinity 0001 0010 0100 1000 0001 00100100 1000;

# 工作模式及链接数上限
events {
    use epoll; 
    # epoll是多路复用IO(I/O Multiplexing)中的一种方式,但是仅用于linux2.6以上内核,可以大大提高nginx的性能
    #如果你使用Linux 2.6+，你应该使用epoll。如果你使用*BSD，你应该使用kqueue
    work_connections 51200; # 单个后台worker process进程的最大并发链接数
    multi_accept on;# 告诉nginx收到一个新连接通知后接受尽可能多的连接。
}

http {
  include mime.types; #文件扩展名与类型映射表
  default_type application/octet-stream; #默认文件类型
  
   #设定请求缓存  
  server_names_hash_bucket_size 128;
  client_header_buffer_size 32k;
  large_client_header_buffers 4 32k;
  client_max_body_size 1024m;
  client_body_buffer_size 10m;
  
  sendfile on;  #开启高效传输模式
  
  #激活tcp_nopush参数可以允许把httpresponse header和文件的开始放在一个文件里发布，
  #积极的作用是减少网络报文段的数量
  tcp_nopush on;
  
  keepalive_timeout 120;  #连接超时时间，单位是秒
  server_tokens off; #隐藏响应header和错误通知中的版本号
  
  #激活tcp_nodelay，内核会等待将更多的字节组成一个数据包，从而提高I/O性能
  tcp_nodelay on;

  #FastCGI参数是和动态服务器交互起作用的参数
  fastcgi_connect_timeout 300; #设定Nginx服务器和后端FastCGI服务器连接的超时时间
  fastcgi_send_timeout 300; #设定Nginx允许FastCGI服务端返回数据的超时时间
  fastcgi_read_timeout 300;#设定Nginx从FastCGI服务端读取响应信息的超时时间
  fastcgi_buffer_size 64k;#设定用来读取从FastCGI服务端收到的第一部分响应信息的缓冲区大小
  fastcgi_buffers 4 64k;#设定用来读取从FastCGI服务端收到的响应信息的缓冲区大小以及缓冲区数量
  fastcgi_busy_buffers_size 128k;#设定系统很忙时可以使用的fastcgi_buffers大小，推荐大小为fastcgi_buffers *2。
  fastcgi_temp_file_write_size 128k;#fastcti临时文件的大小，可设置128-256K
  fastcgi_intercept_errors on;

  #Gzip Compression
  gzip on; #开启gzip压缩功能
  gzip_buffers 16 8k;
  #压缩比率。用来指定GZIP压缩比，1压缩比最小，处理速度最快；9压缩比最大，传输速度快，但处理最慢，也比较消耗cpu资源。
  gzip_comp_level 6;
  gzip_http_version 1.1;
  #设置允许压缩的页面最小字节数，页面字节数从header头的Content-Length中获取。默认值是0，表示不管页面多大都进行压缩。建议设置成大于1K。如果小于1K可能会越压越大。
  gzip_min_length 256;
  gzip_proxied any;
  gzip_vary on;
  gzip_types
    text/xml application/xml application/atom+xml application/rss+xml application/xhtml+xml image/svg+xml
    text/javascript application/javascript application/x-javascript
    text/x-json application/json application/x-web-app-manifest+json
    text/css text/plain text/x-component
    font/opentype application/x-font-ttf application/vnd.ms-fontobject
    image/x-icon;
  gzip_disable "MSIE [1-6]\.(?!.*SV1)";

  #If you have a lot of static files to serve through Nginx then caching of the files' metadata (not the actual files' contents) can save some latency.
  open_file_cache max=1000 inactive=20s;
  open_file_cache_valid 30s;
  open_file_cache_min_uses 2;
  open_file_cache_errors on;

  #设定访问日志的日志记录格式，每列细节参考
  log_format  main  '$remote_addr $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '$http_user_agent $http_x_forwarded_for $request_time $upstream_response_time $upstream_addr $upstream_status';


  #反向代理负载均衡设定部分
  # upstream表示负载服务器池，定义名字为www.nginx.com的服务器池
  upstream www.nginx.com {
     #server是服务器节点起始标签，其后是节点地址，可为域名或IP，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。
     #调度算法，默认是rr轮询。ip_hash;
    server 172.16.1.7:80 weight=1;
    server 172.16.1.8:80 weight=1;
    server 172.16.1.9:80 weight=1 backup; # backup表示热备
  }
  
  server {
      listen 80;
      server_name _;
      access_log /var/log/nginx/access_nginx.log main;
      error_log /var/log/nginx/error_nginx.log;

      location ^~ /build {
          return 404;
      }

      location ^~ /. {
          return 404;
      }

      location / {
          try_files $uri $uri/ /index.html;
          root /mycode; #站点根目录，即网站程序存放目录 
          index index.html index.htm;
      }
      
      #将符合js,css文件的等设定expries缓存参数，要求浏览器缓存(有些最好不缓存)。
      location ~ .*.(js|css)?$ {
          expires 30d; #客户端缓存上述js,css数据30天
      }
  }
}
```

nginx 配置：
<https://blog.csdn.net/weixin_42167759/article/details/85049546>
1、用于调试、定位问题的配置项；
2、正常运行的必备配置项；
3、优化性能的配置项；
4、事件类配置项（有些事件类配置项归纳到优化性能类，这是因为它们虽然也属于event{}块，但作用是优化性能）
