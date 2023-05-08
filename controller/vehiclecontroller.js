const Vehicle = require('../Model/vehicleModel')

function addvehicle(req, res) {
    console.log(req.body)
    validaters = ''
    if (req.body.Vehicle_type == undefined || req.body.Vehicle_type == '') {
        validaters += 'invalid Vehicle type'
    }
    if (req.body.Engine_capacity == undefined || req.body.Engine_capacity == '') {
        validaters += 'invalid Engine_capacity'
    }
    if (req.body.Varient == undefined || req.body.Varient == '') {
        validaters += 'invalid Varient'
    }
    if (!!validaters) {
        res.json({
            validaters
        })
    }
    else {
        let vehicleobj = new Vehicle()
        vehicleobj.vehicle_type = req.body.Vehicle_type
        vehicleobj.engine_capacity = req.body.Engine_capacity
        vehicleobj.varient = req.body.Varient
        vehicleobj.save()

        res.json({
            'status': 200,
            'success': true,
            'message': 'vehicle added'
        })



    }
}

module.exports = {
    addvehicle
}