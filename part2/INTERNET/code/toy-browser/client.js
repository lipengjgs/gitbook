/**
 * 用node 的 net模块实现浏览器请求操作
 */
const net = require('net');
// const client = net.createConnection({
//         port: 7777,
//         host: 'localhost'
//     }, () => {
//     console.log('connect to server')
//     // 这里将请求体发送给服务器
//     /**
//      * GET / HTTP/1.1
//      * Host: localhost:7777
//      * Connection: keep-alive
//      * Cache-Control: max-age=0
//      * Upgrade-Insecure-Requests: 1
//      * User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
//      * Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*//*;q=0.8,application/signed-exchange;v=b3;q=0.9
//      * Sec-Fetch-Site: none
//      * Sec-Fetch-Mode: navigate
//      * Sec-Fetch-User: ?1
//      * Sec-Fetch-Dest: document
//      * Accept-Encoding: gzip, deflate, br
//      * Accept-Language: zh-CN,zh;q=0.9
//      * Cookie: showFPS=false; device=4; rotate=tru
//      **/
//     // client.write('GET / HTTP/1.1\r\n')
//     // client.write('Host: localhost:7777\r\n')
//     // // 注意这里有空行
//     // client.write('\r\n')
//     let request = new Request({
//         method: 'GET',
//         host: 'localhost',
//         port: 7777,
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     request.send(client);
// })

// client.on('data', (data) => {
//     console.log(data.toString());
//     client.end();
// })

// client.on('end', () => {
//     console.log('disconnected from server')
// })

/**
 * @description 模拟xhr Request
 * @class Request
 */
class Request {
    constructor(options) {
        this.method = options.method || 'GET';
        this.host = options.host;
        this.port = options.port || 80;
        this.body = options.body || {};
        this.path = options.path || '/';
        this.headers = options.headers || {};
        if (!this.headers['Content-Type']) {
            this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        switch (this.headers['Content-Type']) {
            case 'application/x-www-form-urlencoded': 
                this.bodyText = Object.keys(this.body).map((key) => {
                        return `${key} = ${encodeURIComponent(this.body[key])}`
                    }).join('&');
                break;
            case 'application/json':
                this.bodyText = JSON.stringify(this.body)
                break;
            default:
                this.bodyText = ''
                break;
        }
        this.headers['Content-Length'] = this.bodyText.length;
    }
    toString() {
        let firstLine = `${this.method} ${this.path} HTTP/1.1\r\n`;
        let secondLine = `Host: ${this.host}:${this.port}\r\n`
        let thirdLine = `${ Object.keys(this.headers).map(key => `${key}:${this.headers[key]}`).join('\r\n') }\r\n`
        let fourthLine = `\r\n`
        let bodyLine = `${this.bodyText}\r\n`
        let reqStr = firstLine + secondLine + thirdLine + fourthLine + bodyLine;
        return reqStr
    }
    // need to be a Promise to resolve response
    send (connection) {
        return new Promise((resolve, reject) => {
            if (connection) {
                connection.write(this.toString());
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                }, () => {
                    connection.write(this.toString())
                })
                // 可能触发多次的，比如网卡buffer写满了，但是流数据没传输完，就会触发data, 沾包问题
                connection.on('data', (data) => {
                    let res = new Response(data);
                    resolve(res)
                    connection.end();
                })
                connection.on('error', (err) => {
                    reject(err);
                    connection.end();
                })
                connection.on('end', () => {
                    console.log('disconnected from server')
                })
            }
        })
        
    }
}

// 这里通过状态机的方式去读取返回的流


// 将流数据传给parser
class ResponseParser {
    recieve (str) {

    }
}

/**
 * @description 模拟xhr Response
 * @class Response
 */
class Response {
    constructor (data) {
        this.data = data
    }
    resolve() {
        console.log(this.data.toString())
    }
}

// 创建请求, 发送
void async function () {
    let response = await new Request({
        method: 'GET',
        host: 'localhost',
        port: 7777,
        headers: {
            'Content-Type': 'application/json'
        }
    }).send();
    response.resolve();
}()
