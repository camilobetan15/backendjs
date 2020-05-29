const express = require('express')
const router = express.Router()
const usuario = require("../models/usuario")


router.get('/', (req, res) => {
    res.send('Hola Mundo')
    
})

module.exports = router