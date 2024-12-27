const mongoose = require('mongoose')

const Twitter = new mongoose.Schema({
    nameoftrend1  : {
        type : String
    },
    nameoftrend2  : {
        type : String
    },
    nameoftrend3  : {
        type : String
    },
    nameoftrend4  : {
        type : String
    }
})

module.exports = mongoose.model('Twitter',Twitter)