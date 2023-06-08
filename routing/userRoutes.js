const router = require('express').Router()

let busController = require('../controller/busController')
let busRouteController = require('../controller/routeController')



//add bus
router.get('/getBuses', busController.getBuses)

//add bus route 
router.get('/getRoutes', busRouteController.getRoutes)

//search routes
router.post('/searchRoutes', busRouteController.searchRoutes)

router.post('/searchRoutes1', busRouteController.searchRoutes1  )

module.exports = router