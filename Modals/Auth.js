const mongoose =require('mongoose')
const Schema = mongoose.Schema

const AuthSchema = new Schema({
    image: {
        type: String,
        required: [true, 'image is required'],
        trim: true,
    }, 
    name:{
        type:String,
        required:[true,'user name can not be empty'],
        trim: true,
    },
    status:{
        type:String,
        required:[true,'status can not be empty'],
        trim: true,
    }
})
const AuthConnection = mongoose.model("auth",AuthSchema)
module.exports = AuthConnection