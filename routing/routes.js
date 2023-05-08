const router = require('express').Router()

let busController = require('../controller/busController')



//add bus
router.post('/addBus', busController.addBus)

module.exports = router