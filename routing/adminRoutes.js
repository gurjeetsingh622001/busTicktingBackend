const router = require('express').Router()

let busController = require('../controller/busController')
let busRouteController = require('../controller/routeController')



//add bus
router.post('/addBus', busController.addBus)
router.get('/getBuses', busController.getBuses)

//add bus route 
router.post('/addRoute', busRouteController.addRoute)
router.get('/getRoutes',busRouteController.getRoutes)

module.exports = router