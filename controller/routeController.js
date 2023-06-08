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
    if (req.body.price == undefined || req.body.price == '') {
        validaters += 'price time required'
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
        route.price = req.body.price

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
                    'message': 'route loaded',
                    'data': data
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

function searchRoutes1(req, res) {
    // console.log(req.body)
    validaters = ''

    if (req.body.from == undefined || req.body.from == '') {
        validaters += 'from  required'
    }
    if (req.body.to == undefined || req.body.to == '') {
        validaters += 'to  required'
    }
    if (req.body.busName == undefined || req.body.to == '') {
        validaters += 'bus name required'

    }

    if (!!validaters) {
        res.json({
            status: 401,
            err: validaters
        })
    }
    else {

        if (req.body.busName == 'All') {
            Route.find({
                $and: [
                    {
                        'from': req.body.from
                    },
                    {
                        'to': req.body.to
                    },

                ]

            }).populate('busId').exec()
                .then(routeData => {
                    if (routeData == null || routeData == '') {
                        res.json({
                            'status': 200,
                            'success': false,
                            'message': 'no route found'
                        })
                    }
                    else {

                        res.json({
                            'status': 200,
                            'success': true,
                            'message': 'route loaded ',
                            'data': routeData
                        });
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
        else {
            Route.find({
                $and: [
                    {
                        'from': req.body.from
                    },
                    {
                        'to': req.body.to
                    },

                ]

            }).populate({
                path: 'busId',
                match: { 'busName': req.body.busName },
                select: 'busName busNumber'
            }).exec()
                .then(routeData => {
                    if (routeData == null || routeData == '') {
                        res.json({
                            'status': 200,
                            'success': false,
                            'message': 'no route found'
                        })
                    }
                    else {

                        // console.log(routeData)
                        // Filter out null or undefined busId values

                        const filteredData = routeData.filter(route => route.busId !== null && route.busId !== undefined);

                        if (filteredData.length === 0) {
                            res.json({
                                'status': 200,
                                'success': false,
                                'message': 'no route found'
                            });
                        }
                        else {
                            res.json({
                                'status': 200,
                                'success': true,
                                'message': 'route loaded ',
                                'data': filteredData
                            });
                        }
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

    }
}

function searchRoutes(req, res) {
    // console.log(req.body)
    Route.find().exec()
        .then(routeData => {
            if (routeData == null) {
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
                    'message': 'data loaded',
                    'data': routeData
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
    getRoutes,
    searchRoutes,
    searchRoutes1
}