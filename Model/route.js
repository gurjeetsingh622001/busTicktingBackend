const mongo = require("mongoose")

const routeSchema = mongo.Schema({
    'busId': { type: mongo.Schema.Types.ObjectId, ref: 'bus', default: '' },
    'from': { type: String, default: '' },
    'to': { type: String, default: '' },
    'departureTime': { type: String, default: '' },
    'arrivalTime': { type: String, default: '' },
    'isBlocked': { type: Boolean, default: false },

})

module.exports = mongo.model('route', routeSchema)