const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/BusTicketingSystem')
  .then(() => console.log('Connected!'));