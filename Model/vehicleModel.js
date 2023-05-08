const mongo = require("mongoose")

const vehicleSchema = mongo.Schema({
    'vehicle_type' : { type:String, default:'' },
    'engine_capacity' : { type:String, default:'' },
    'varient' : { type:String, default:'' },
    'isBlocked' : { type:Boolean,default:false},
    'created_at' : { type:Date,default:Date.now()}
})

module.exports = mongo.model('vehicle', vehicleSchema)