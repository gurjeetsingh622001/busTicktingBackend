const mongo = require("mongoose")

const routeSchema = mongo.Schema({
    'busId': { type: mongo.Schema.Types.ObjectId, ref: 'bus' },
    'from': { type: String },
    'to': { type: String },
    'departureTime': { type: String },
    'arrivalTime': { type: String },
    'price': { type: Number },
    'isBlocked': { type: Boolean, default: false },

})

module.exports = mongo.model('route', routeSchema)