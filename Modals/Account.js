const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AccountSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true
    },
    image: {
        type: String,
        required: [true, 'image is required'],
        trim: true,
        data: Buffer,
    }, 
    timestamp: {
		type: Schema.Types.Date,
		default: Date.now,
		immutable: true,
		required: true,
	}

})
const accountConnection = mongoose.model('Account', AccountSchema)
module.exports = accountConnection

