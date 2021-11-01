const { createCipher } = require('crypto');
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('has request comein')
    res.setHeader('Content-Type', 'text/html;');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok')
})

server.listen(7777,()=>{
    console.log('listen 7777')
});