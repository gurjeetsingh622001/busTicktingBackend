const express = require('express')
const app = express()
const port = 5200
const cors = require('cors')
const adminroutes = require('./routing/adminRoutes')
const userRoutes = require('./routing/userRoutes')
const db = require('./config/db')
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))
app.use('/admin', adminroutes)
app.use('/user', userRoutes)

app.get('/admin', function (req, res) {
    console.log('hello api works')
})
app.listen(port, function () {
    console.log('port 5000')
})