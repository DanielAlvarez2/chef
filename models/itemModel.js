const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Item', itemSchema)