const Route = require('../Model/route')

async function addRoute(req, res) {
    console.log(typeof req.body.departureTime)
    validaters = ''
    if (req.body.busId == undefined || req.body.busId == '') {
        validaters += 'bus Id required'
    }
    if (req.body.from == undefined || req.body.from == '') {
        validaters += 'from  required'
    }
    if (req.body.to == undefined || req.body.to == '') {
        validaters += 'to  required'
    }
    if (req.body.departureTime == undefined || req.body.departureTime == '') {
        validaters += 'departure time required'
    }
    if (req.body.arrivalTime == undefined || req.body.arrivalTime == '') {
        validaters += 'arrival time required'
    }

    if (!!validaters) {
        res.json({
            status: 401,
            err: validaters
        })
    }
    else {
        let route = new Route()
        route.busId = req.body.busId
        route.from = req.body.from
        route.to = req.body.to
        route.departureTime = req.body.departureTime
        route.arrivalTime = req.body.arrivalTime

        await route.save()

        res.json({
            'status': 200,
            'success': true,
            'message': 'bus route added'
        })
    }
}

function getRoutes(req, res) {

    Route.find().populate('busId').exec()
        .then(data => {
            if (data == null) {
                res.json({
                    'status': 200,
                    'success': false,
                    'message': 'data does not exist'
                })
            }

            else {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': data
                })

            }
        })
        .catch(err => {
            res.json({
                'status': 500,
                'success': false,
                'message': String(err)
            })
        })
}


module.exports = {
    addRoute,
    getRoutes
}