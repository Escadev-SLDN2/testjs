const fs = require('fs')

const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Salut à toi')
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Server running on http://localhost:8000')
})
