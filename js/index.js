const fs = require('fs');
const http = require('http');
//////////content

//////////Server
const server = http.createServer((req, res) =>{
    res.end('Salut');
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server sur port 8000');
})