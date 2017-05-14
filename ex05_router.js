const express = require('express')
const router = express.Router()

router.use((req, resp, next) => {
    const init = Date.now()
    next()
    console.log(`Tempo : ${Date.now() - init} ms.`)
})

router.get('/produtos/:id/:nome', (req, res) => {
    res.json({id: req.params.id, nome: req.params.nome})
})

router.get('/clientes/:id/:nome', (req, res) => {
    res.json({id: req.params.id, nome: req.params.nome})
})

module.exports = router