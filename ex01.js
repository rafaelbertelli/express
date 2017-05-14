const express = require('express')
const server = express()
const porta = 3000

server.listen(porta, () => {
    console.log(`Executando na porta ${porta}`)
})

server.get('/', function(req, resp) {
    resp.send('<h1>Index!</h1>')
})

server.get(/api/, function(req, resp) {
    resp.send('<h1>API!</h1>')
})

server.all('/teste', function(req, resp) {
    resp.send('<h1>teste</h1>')
})

