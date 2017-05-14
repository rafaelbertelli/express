const express = require('express')
const server = express()
const porta = 3000

server.use('/api', function(req, resp, next) {
    console.log('Início...')
    next()
    console.log('Fim...')
})

server.use('/api', function(req, resp) {
    console.log('Resposta...')
    resp.send('<h1>Hello API!!!</h1>')
})

server.listen(porta, () => {
    console.log(`Executando na porta ${porta}`)
})