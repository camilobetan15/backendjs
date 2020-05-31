const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    let control = require('../controllers/usuario')
    res.send(await control.Init({case: "getUserById", id: 1}))
})

router.post('/actividad', async (req, res) => {
    let control = require('../controllers/actividad')
    res.send(await control.Init(req.body))
})

router.post('/entidad', async (req, res) => {
    let control = require('../controllers/entidad')
    res.send(await control.Init(req.body))
})

router.post('/sector', async (req, res) => {
    let control = require('../controllers/sector')
    res.send(await control.Init(req.body))
})

router.post('/seguimiento', async (req, res) => {
    let control = require('../controllers/seguimiento')
    res.send(await control.Init(req.body))
})

router.post('/subsector', async (req, res) => {
    let control = require('../controllers/subsector')
    res.send(await control.Init(req.body))
})

router.post('/usuario', async (req, res) => {
    let control = require('../controllers/usuario')
    res.send(await control.Init(req.body))
})

module.exports = router