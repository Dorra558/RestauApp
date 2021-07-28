const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commandSchema = new Schema({
nom :{
    type: String,
    required: true
    
},
typePayment :{
    type:String,
    required: true   
    }

})

module.exports = mongoose.model('command',commandSchema)