const mongoose = require('mongoose')
const Schema = mongoose.Schema
const serviceSchema = new Schema({
nom :{
    type: String,
    required: true
    
},
description :{
    type:String,
    required: true   
    }

})

module.exports = mongoose.model('service',serviceSchema)