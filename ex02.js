const express = require('express')
const server = express()
const porta = 3000

server.listen(porta, () => {
    console.log(`Executando na porta ${porta}`)
})

server.get('/', function(req, resp, next) {
    console.log('Início...')
    next()
    console.log('Fim...')
})

server.get('/', function(req, resp) {
    console.log('Resposta...')
    resp.send('<h1>Hello World</h1>')
})