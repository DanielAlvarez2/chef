const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String
})

module.exports = mongoose.model('Item', itemSchema)