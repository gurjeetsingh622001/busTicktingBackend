const Bus = require('../Model/bus')

function addBus(req, res) {
    validaters = ''
    if (req.body.busName == undefined || req.body.busName == '') {
        validaters += 'bus name required'
    }
    if (req.body.busNumber == undefined || req.body.busNumber == '') {
        validaters += 'bus number required'
    }

    if (!!validaters) {
        res.json({
            status: 401,
            err: validaters
        })
    }
    else {
        let bus = new Bus()
        bus.busName = req.body.busName
        bus.busNumber = req.body.busNumber
        bus.save()

        res.json({
            'status': 200,
            'success': true,
            'message': 'bus added'
        })

    }
}

function getBuses(req, res) {
    Bus.find({}).exec()
        .then(data => {
            if (data == null) {
                res.json({
                    'status': 200,
                    'success': false,
                    'message': 'no bus added'
                })
            }
            else {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'data loaded',
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

module.exports = {
    addBus,
    getBuses
}