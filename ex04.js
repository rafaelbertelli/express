const express = require('express')
const server = express()
const porta = 3000

server.route('/clientes')
    .get((req, resp) => resp.send('Lista de clientes'))
    .post((req, resp) => resp.send('Novo cliente'))
    .put((req, resp) => resp.send('Altera cliente'))
    .delete((req, resp) => resp.send('Remode cliente'))

server.listen(porta, () => {
    console.log(`Executando na porta ${porta}`)
})