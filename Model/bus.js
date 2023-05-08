const mongo = require("mongoose")

const busSchema = mongo.Schema({
    'busName': { type: String, default: '' },
    'busNumber': { type: String, default: '' },
    'isBlocked': { type: Boolean, default: false },
    'created_at': { type: Date, default: Date.now() }
})

module.exports = mongo.model('bus', busSchema)