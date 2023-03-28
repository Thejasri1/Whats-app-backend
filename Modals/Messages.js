const mongoose =require('mongoose')
const Schema =  mongoose.Schema

const messagesSchema =new Schema({
    message :{
        type:String,
        required:[true,'text is required'],
        trim:true
    }
})
const messagesConnection = mongoose.model('Messages',messagesSchema)
module.exports = messagesConnection
